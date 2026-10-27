/* Core: utilities, storage, item database, spaced repetition and daily selection. */
(function () {
  'use strict';

  const App = (window.App = { leaveFns: [], views: {} });

  /* ------------------------------------------------------------------ utils */
  const U = (App.util = {});
  U.$ = (sel, root = document) => root.querySelector(sel);
  U.$$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  U.esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  U.cloze = (s) => U.esc(s).replace(/＿+/g, '<span class="blank">＿＿</span>');
  U.shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  U.sample = (arr, n) => U.shuffle(arr).slice(0, n);
  U.pad = (n) => String(n).padStart(2, '0');
  U.dateKey = (d = new Date()) => `${d.getFullYear()}-${U.pad(d.getMonth() + 1)}-${U.pad(d.getDate())}`;
  U.today = () => U.dateKey();
  U.addDays = (key, n) => {
    const [y, m, d] = key.split('-').map(Number);
    return U.dateKey(new Date(y, m - 1, d + n));
  };
  U.fmtTime = (secs) => `${Math.floor(secs / 60)}:${U.pad(Math.max(0, Math.floor(secs % 60)))}`;
  U.speak = (text) => {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP';
    u.rate = 0.85;
    speechSynthesis.speak(u);
  };
  U.toast = (msg) => {
    const t = U.$('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(U.toast._t);
    U.toast._t = setTimeout(() => t.classList.remove('show'), 2200);
  };

  App.onLeave = (fn) => App.leaveFns.push(fn);
  App.runLeave = () => {
    App.leaveFns.splice(0).forEach((fn) => {
      try { fn(); } catch (e) { console.error(e); }
    });
  };

  /* ---------------------------------------------------------------- storage */
  const KEY = 'jlpt-dojo-v1';
  const defaults = () => ({
    level: 5,
    theme: 'auto',
    perDay: { kanji: 5, vocab: 5, grammar: 2 },
    items: {},
    daily: {},
    activity: {},
    history: []
  });
  const S = (App.store = { s: defaults() });
  S.load = () => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const o = JSON.parse(raw);
        const d = defaults();
        S.s = Object.assign(d, o);
        S.s.perDay = Object.assign(defaults().perDay, o.perDay || {});
      }
    } catch (e) {
      console.warn('Could not read saved data', e);
    }
    // keep the daily cache small
    const cutoff = U.addDays(U.today(), -14);
    Object.keys(S.s.daily).forEach((k) => { if (k < cutoff) delete S.s.daily[k]; });
  };
  S.save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(S.s)); } catch (e) { /* storage full / blocked */ }
  };
  S.reset = () => { S.s = defaults(); S.save(); };
  S.exportJSON = () => JSON.stringify(S.s, null, 2);
  S.importJSON = (text) => {
    const o = JSON.parse(text);
    if (typeof o !== 'object' || !o || !o.items) throw new Error('Not a valid backup file');
    S.s = Object.assign(defaults(), o);
    S.s.perDay = Object.assign(defaults().perDay, o.perDay || {});
    S.save();
  };

  /* --------------------------------------------------------------- database */
  const D = window.DATA;
  const LEVELS = [5, 4, 3];
  const db = (App.db = { kanji: [], vocab: [], grammar: [], particle: [], verb: [], byId: {} });
  const add = (type, item) => {
    item.type = type;
    if (db.byId[item.id]) console.warn('Duplicate item id', item.id);
    db.byId[item.id] = item;
    db[type].push(item);
  };
  LEVELS.forEach((l) => {
    (D.kanji[l] || []).forEach((r) =>
      add('kanji', { id: 'k:' + r[0], level: l, char: r[0], meaning: r[1], on: r[2], kun: r[3], word: r[4], wordReading: r[5], wordMeaning: r[6] }));
    (D.vocab[l] || []).forEach((r) =>
      add('vocab', { id: 'v:' + r[0], level: l, word: r[0], reading: r[1], meaning: r[2], ex: r[3], exEn: r[4] }));
    (D.grammar[l] || []).forEach((g) => add('grammar', Object.assign({ id: 'g:' + g.p, level: l }, g)));
  });
  D.particles.forEach((r) =>
    add('particle', { id: 'p:' + r[1], level: r[0], s: r[1], a: r[2], t: r[3], why: r[4], alt: r[5] || [] }));
  D.verbs.forEach((r) =>
    add('verb', { id: 'b:' + r[0], level: r[8], dict: r[0], kana: r[1], meaning: r[2], group: r[3], masu: r[4], te: r[5], nai: r[6], ta: r[7] }));

  db.pool = (type, level) => db[type].filter((x) => x.level === level);
  /** items of this level and easier levels (N5 is easiest, so level >= given) */
  db.upTo = (type, level) => db[type].filter((x) => x.level >= level);

  App.TYPE_LABEL = { kanji: 'Kanji', vocab: 'Vocabulary', grammar: 'Grammar', particle: 'Particle', verb: 'Verb' };
  App.LEVEL_INFO = { 5: 'Beginner', 4: 'Elementary', 3: 'Intermediate' };

  /* --------------------------------------------- spaced repetition (Leitner) */
  const INTERVALS = [0, 1, 3, 7, 14, 30];
  const R = (App.srs = {});
  R.rec = (id) => S.s.items[id];
  R.ensure = (id) => (S.s.items[id] = S.s.items[id] || { box: 0, due: U.today(), c: 0, w: 0, weak: false, streak: 0 });
  R.isSeen = (id) => !!(S.s.items[id] && S.s.items[id].box >= 1);
  R.isDue = (id) => {
    const r = S.s.items[id];
    return !!(r && r.box >= 1 && r.due <= U.today());
  };
  R.isMastered = (id) => !!(S.s.items[id] && S.s.items[id].box >= 4);

  /** Flashcard grading: good = knew it. `missed` = already failed once this session. */
  R.flash = (id, good, missed) => {
    const r = R.ensure(id);
    if (!good) {
      r.w++;
      r.box = 1;
      r.due = U.today();
    } else {
      r.box = missed ? 1 : Math.min(5, r.box + 1);
      r.due = U.addDays(U.today(), INTERVALS[r.box]);
      if (!missed) { r.c++; r.streak++; if (r.streak >= 2) r.weak = false; }
    }
    S.save();
    App.log(1);
  };
  /** Mark a lesson (e.g. a grammar page) as studied. */
  R.study = (id) => {
    const r = R.ensure(id);
    if (r.box < 1) r.box = 1;
    r.due = U.addDays(U.today(), INTERVALS[r.box]);
    S.save();
    App.log(1);
  };
  /** Quiz answer: wrong answers push the item back to box 1 and flag it as weak. */
  R.answer = (id, ok) => {
    if (!id) return;
    const r = R.ensure(id);
    if (ok) {
      r.c++;
      r.streak++;
      if (r.streak >= 2) r.weak = false;
    } else {
      r.w++;
      r.streak = 0;
      r.weak = true;
      if (r.box > 0) { r.box = 1; r.due = U.today(); }
    }
    S.save();
  };

  /* ----------------------------------------------------------- daily picking */
  const DL = (App.daily = {});
  const dayBucket = () => {
    const d = U.today();
    S.s.daily[d] = S.s.daily[d] || {};
    return S.s.daily[d];
  };
  const pickNew = (type, level, n, exclude) => {
    const out = [];
    for (const item of db.pool(type, level)) {
      if (out.length >= n) break;
      if (!R.isSeen(item.id) && !exclude.includes(item.id)) out.push(item.id);
    }
    return out;
  };
  /** Today's "new item" set for a type/level. Stable for the whole day once created. */
  DL.ids = (type, level) => {
    const b = dayBucket();
    const k = type + level;
    if (!b[k]) {
      b[k] = pickNew(type, level, S.s.perDay[type] || 5, []);
      S.save();
    }
    return b[k];
  };
  DL.more = (type, level, n) => {
    const b = dayBucket();
    const k = type + level;
    const cur = DL.ids(type, level);
    const extra = pickNew(type, level, n, cur);
    b[k] = cur.concat(extra);
    S.save();
    return extra;
  };
  DL.due = (type, level, limit = 30) => {
    const t = U.today();
    return db
      .pool(type, level)
      .filter((x) => R.isDue(x.id))
      .sort((a, b) => S.s.items[a.id].due.localeCompare(S.s.items[b.id].due))
      .slice(0, limit)
      .map((x) => x.id);
  };

  /* ------------------------------------------------------- activity / streak */
  App.log = (n = 1) => {
    const d = U.today();
    S.s.activity[d] = (S.s.activity[d] || 0) + n;
    S.save();
  };
  App.streak = () => {
    const a = S.s.activity;
    let d = U.today();
    if (!a[d]) d = U.addDays(d, -1);
    let n = 0;
    while (a[d]) { n++; d = U.addDays(d, -1); }
    return n;
  };
  App.stats = (type, level) => {
    const pool = level ? db.pool(type, level) : db[type];
    const seen = pool.filter((x) => R.isSeen(x.id)).length;
    const mastered = pool.filter((x) => R.isMastered(x.id)).length;
    return { total: pool.length, seen, mastered };
  };
  App.weakItems = () =>
    Object.keys(S.s.items)
      .filter((id) => S.s.items[id].weak && db.byId[id])
      .map((id) => db.byId[id]);

  /** Short human description of any item (used in review lists). */
  App.describe = (it) => {
    switch (it.type) {
      case 'kanji': return { title: it.char, sub: `${it.meaning} · ${it.on} / ${it.kun}` };
      case 'vocab': return { title: it.word, sub: `${it.reading} · ${it.meaning}` };
      case 'grammar': return { title: it.p, sub: it.m };
      case 'particle': return { title: it.s.replace('＿', it.a), sub: it.why };
      case 'verb': return { title: it.dict, sub: `${it.meaning} · group ${it.group}` };
      default: return { title: it.id, sub: '' };
    }
  };
})();
