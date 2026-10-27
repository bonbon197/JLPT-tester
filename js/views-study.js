/* Views: Home, Kanji / Vocab flashcards, Grammar lessons, Quiz hub. */
(function () {
  'use strict';
  const { esc, $, $$, shuffle, sample, today } = App.util;
  const { store, db, srs, daily: DL, Q } = App;
  const V = App.views;
  const L = () => store.s.level;

  const TYPE_META = {
    kanji: { jp: '漢字', name: 'Kanji', href: '#/kanji', blurb: 'Flip through kanji with readings and example words.' },
    vocab: { jp: '語彙', name: 'Vocabulary', href: '#/vocab', blurb: 'Learn useful words with example sentences.' },
    grammar: { jp: '文法', name: 'Grammar', href: '#/grammar', blurb: 'Short lessons with patterns, notes and examples.' }
  };

  const speakBtn = (text) => `<button class="icon-btn speak" data-say="${esc(text)}" title="Listen" aria-label="Listen">🔊</button>`;
  function bindSpeak(root) {
    root.addEventListener('click', (e) => {
      const b = e.target.closest('[data-say]');
      if (b) { e.stopPropagation(); App.util.speak(b.dataset.say); }
    });
  }
  const tabsHtml = (tabs, active) =>
    `<div class="tabs">${tabs.map(([k, l]) => `<button class="tab ${k === active ? 'active' : ''}" data-tab="${k}">${l}</button>`).join('')}</div>`;
  const statusOf = (id) => (srs.isMastered(id) ? 'known' : srs.isSeen(id) ? 'learning' : 'new');

  /* ================================================================== HOME */
  V.home = (root) => {
    const level = L();
    const cards = ['kanji', 'vocab', 'grammar']
      .map((t) => {
        const m = TYPE_META[t];
        const ids = DL.ids(t, level);
        const done = ids.filter(srs.isSeen).length;
        const due = DL.due(t, level, 999).length;
        const complete = ids.length > 0 && done === ids.length;
        const none = ids.length === 0;
        return `
        <a class="card daily ${complete ? 'complete' : ''}" href="${m.href}">
          <div class="daily-jp">${m.jp}</div>
          <h3>Daily ${m.name}</h3>
          <p class="muted">${none ? `You've covered every N${level} ${m.name.toLowerCase()} item! 🎉` : m.blurb}</p>
          <div class="daily-meta">
            ${none ? '<span class="badge ok">All learned</span>' : `<span class="badge ${complete ? 'ok' : ''}">${done} / ${ids.length} today</span>`}
            ${due ? `<span class="badge warn">${due} to review</span>` : ''}
          </div>
        </a>`;
      })
      .join('');

    const quizDone = store.s.history.some((h) => h.d === today() && h.kind === 'daily' && h.level === level);
    const weak = App.weakItems().length;
    const learned = ['kanji', 'vocab', 'grammar'].reduce((n, t) => n + App.stats(t, level).seen, 0);
    const total = ['kanji', 'vocab', 'grammar'].reduce((n, t) => n + App.stats(t, level).total, 0);

    root.innerHTML = `
      <section class="hero">
        <div>
          <h1>Today's plan <span class="level-pill">N${level}</span></h1>
          <p class="muted">${App.LEVEL_INFO[level]} level · three short study blocks, then a quiz to lock it in.</p>
        </div>
        <div class="stats">
          <div class="stat"><b>${App.streak()}</b><span>day streak 🔥</span></div>
          <div class="stat"><b>${learned}<small>/${total}</small></b><span>N${level} items learned</span></div>
          <div class="stat"><b>${weak}</b><span>weak items</span></div>
        </div>
      </section>

      <div class="grid4">${cards}
        <a class="card daily ${quizDone ? 'complete' : ''}" href="#/quiz">
          <div class="daily-jp">確認</div>
          <h3>Daily Quiz</h3>
          <p class="muted">A short test covering exactly what you studied today.</p>
          <div class="daily-meta"><span class="badge ${quizDone ? 'ok' : ''}">${quizDone ? 'Done today' : 'Not taken yet'}</span></div>
        </a>
      </div>

      <h2>Practice tools</h2>
      <div class="grid3 tools">
        <a class="card tool" href="#/particles"><h3>助詞 Particle Tester</h3><p class="muted">Fill in は・が・を・に・で… with instant explanations.</p></a>
        <a class="card tool" href="#/verbs"><h3>活用 Verb Forms</h3><p class="muted">Drill て・ない・た・ます forms for every verb group.</p></a>
        <a class="card tool" href="#/kana"><h3>かな Kana Drill</h3><p class="muted">Hiragana &amp; katakana typing practice with charts.</p></a>
        <a class="card tool" href="#/exam"><h3>模擬試験 Mock Exam</h3><p class="muted">Timed, mixed-section exam with pass/fail guidance.</p></a>
        <a class="card tool" href="#/review"><h3>復習 Review Weak Items</h3><p class="muted">${weak ? `${weak} item(s) need extra attention.` : 'Missed questions collect here.'}</p></a>
        <a class="card tool" href="#/progress"><h3>進捗 Progress</h3><p class="muted">Mastery, accuracy, activity and quiz history.</p></a>
      </div>`;
  };

  /* ====================================================== FLASHCARD HELPERS */
  function cardFront(it, reverse) {
    if (it.type === 'kanji') {
      return reverse
        ? `<div class="fc-meaning">${esc(it.meaning)}</div><div class="hint">Which kanji? How is it read?</div>`
        : `<div class="fc-char">${esc(it.char)}</div><div class="hint">Meaning? Readings?</div>`;
    }
    return reverse
      ? `<div class="fc-meaning">${esc(it.meaning)}</div><div class="hint">How do you say this in Japanese?</div>`
      : `<div class="fc-word">${esc(it.word)}</div><div class="hint">Reading? Meaning?</div>`;
  }
  function cardBack(it) {
    if (it.type === 'kanji') {
      return `
        <div class="fc-char sm">${esc(it.char)}</div>
        <div class="fc-meaning">${esc(it.meaning)}</div>
        <dl class="readings"><dt>音 on</dt><dd>${esc(it.on)}</dd><dt>訓 kun</dt><dd>${esc(it.kun)}</dd></dl>
        <div class="fc-example"><span class="jp">${esc(it.word)}</span> <span class="reading">${esc(it.wordReading)}</span> — ${esc(it.wordMeaning)} ${speakBtn(it.wordReading)}</div>`;
    }
    return `
      <div class="fc-word sm">${esc(it.word)} ${speakBtn(it.reading)}</div>
      <div class="reading big">${esc(it.reading)}</div>
      <div class="fc-meaning">${esc(it.meaning)}</div>
      <div class="fc-example"><span class="jp">${esc(it.ex)}</span> ${speakBtn(it.ex)}<div class="muted small">${esc(it.exEn)}</div></div>`;
  }

  function flashSession(root, type, ids, o) {
    const queue = ids.slice();
    const total = ids.length;
    const missed = new Set();
    const items = ids.map((id) => db.byId[id]);
    let done = 0, flipped = false, reverse = false, again = 0;
    const rerender = () => draw();

    function onKey(e) {
      if (e.target.tagName === 'INPUT') return;
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!flipped) flip(); else grade(true); }
      else if (e.key === '1' || e.key === 'ArrowLeft') { if (flipped) grade(false); }
      else if (e.key === '2' || e.key === 'ArrowRight') { if (flipped) grade(true); }
    }
    document.addEventListener('keydown', onKey);
    App.onLeave(() => document.removeEventListener('keydown', onKey));

    const actions = () =>
      flipped
        ? `<button class="btn bad" id="again">✗ Again <kbd>1</kbd></button><button class="btn good" id="good">✓ Got it <kbd>2</kbd></button>`
        : `<button class="btn primary wide" id="show">Show answer <kbd>Space</kbd></button>`;

    function bindActions() {
      const s = $('#show', root), a = $('#again', root), g = $('#good', root);
      if (s) s.addEventListener('click', flip);
      if (a) a.addEventListener('click', () => grade(false));
      if (g) g.addEventListener('click', () => grade(true));
    }

    function flip() {
      flipped = true;
      $('#card', root).classList.add('is-flipped');
      $('#actions', root).innerHTML = actions();
      bindActions();
    }

    function grade(good) {
      const id = queue[0];
      queue.shift();
      if (good) {
        srs.flash(id, true, missed.has(id));
        done++;
      } else {
        srs.flash(id, false);
        missed.add(id);
        again++;
        queue.splice(Math.min(3, queue.length), 0, id);
      }
      flipped = false;
      draw();
    }

    function summary() {
      document.removeEventListener('keydown', onKey);
      const n = items.length;
      root.innerHTML = `
        <div class="card center result">
          <div class="big-emoji">🎉</div>
          <h2>Session complete</h2>
          <p class="muted">${n} card${n === 1 ? '' : 's'} · ${again} “again” press${again === 1 ? '' : 'es'} · ${missed.size} needed another look</p>
          <div class="actions">
            <button class="btn primary" id="quiz">Quick quiz on these</button>
            <a class="btn" href="${o.back}">Done</a>
          </div>
        </div>`;
      $('#quiz', root).addEventListener('click', () =>
        App.runner.start(root, {
          questions: Q.many(items, Math.max(5, Math.min(20, items.length))),
          title: `Quick quiz — ${TYPE_META[type].name}`,
          kind: 'session', level: L(), back: o.back, backLabel: 'Back'
        }));
    }

    function draw() {
      if (!queue.length) return summary();
      const it = db.byId[queue[0]];
      root.innerHTML = `
        <section class="flash">
          <div class="runner-top">
            <a class="btn ghost small" href="${o.back}">✕ Exit</a>
            <div class="runner-title">${esc(o.title)}</div>
            <label class="switch small"><input type="checkbox" id="rev" ${reverse ? 'checked' : ''}> Meaning first</label>
          </div>
          <div class="bar"><div style="width:${(done / total) * 100}%"></div></div>
          <div class="flip ${flipped ? 'is-flipped' : ''}" id="card">
            <div class="flip-inner">
              <div class="face front">${cardFront(it, reverse)}</div>
              <div class="face back">${cardBack(it)}</div>
            </div>
          </div>
          <div class="flash-actions" id="actions">${actions()}</div>
          <p class="muted small center">${queue.length} card${queue.length === 1 ? '' : 's'} left · ${done} / ${total} done</p>
        </section>`;
      $('#card', root).addEventListener('click', () => { if (!flipped) flip(); });
      $('#rev', root).addEventListener('change', (e) => { reverse = e.target.checked; rerender(); });
      bindActions();
    }
    draw();
  }

  /* ================================================ KANJI & VOCAB FLASHCARDS */
  function flashPage(type) {
    return (root) => {
      const m = TYPE_META[type];
      bindSpeak(root);
      let tab = 'study';
      const back = m.href;

      function study() {
        const level = L();
        const ids = DL.ids(type, level);
        const done = ids.filter(srs.isSeen).length;
        const due = DL.due(type, level, 40);
        const allDone = ids.length > 0 && done === ids.length;
        root.innerHTML = `
          <h1>${m.jp} Daily ${m.name} <span class="level-pill">N${level}</span></h1>
          ${tabsHtml([['study', 'Study'], ['browse', 'Browse all']], tab)}
          <div class="grid2">
            <div class="card">
              <h3>Today's new ${m.name.toLowerCase()}</h3>
              ${ids.length
                ? `<p class="muted">${done} of ${ids.length} studied today.</p>
                   <div class="chips">${ids.map((id) => { const it = db.byId[id]; return `<span class="chip ${statusOf(id)}">${esc(type === 'kanji' ? it.char : it.word)}</span>`; }).join('')}</div>
                   <div class="actions">
                     <button class="btn primary" id="go">${allDone ? 'Practice again' : done ? 'Continue' : 'Start flashcards'}</button>
                     <button class="btn" id="more">+ ${store.s.perDay[type]} more</button>
                   </div>`
                : `<p>You've studied every N${level} ${m.name.toLowerCase()} item. Switch level at the top, or review below.</p>`}
            </div>
            <div class="card">
              <h3>Due for review</h3>
              <p class="muted">${due.length ? `${due.length} item${due.length === 1 ? '' : 's'} scheduled for today.` : 'Nothing due — come back tomorrow!'}</p>
              <p class="small muted">Spaced repetition: cards you know come back after 1, 3, 7, 14 and 30 days. Ones you miss come back sooner.</p>
              <div class="actions"><button class="btn ${due.length ? 'primary' : ''}" id="rev" ${due.length ? '' : 'disabled'}>Review now</button></div>
            </div>
          </div>`;
        bind();
        const go = $('#go', root);
        if (go) go.addEventListener('click', () => flashSession(root, type, ids, { title: `Today's ${m.name}`, back }));
        const more = $('#more', root);
        if (more) more.addEventListener('click', () => {
          const extra = DL.more(type, level, store.s.perDay[type]);
          App.util.toast(extra.length ? `Added ${extra.length} more` : 'No more new items at this level');
          study();
        });
        const rev = $('#rev', root);
        if (rev) rev.addEventListener('click', () => flashSession(root, type, due, { title: `${m.name} review`, back }));
      }

      function browse(filter = '') {
        const level = L();
        const f = filter.trim().toLowerCase();
        const matches = db.pool(type, level).filter((it) => !f || JSON.stringify(Object.values(it)).toLowerCase().includes(f));
        const CAP = 150;
        const items = matches.slice(0, CAP);
        root.innerHTML = `
          <h1>${m.jp} ${m.name} <span class="level-pill">N${level}</span></h1>
          ${tabsHtml([['study', 'Study'], ['browse', 'Browse all']], tab)}
          <input class="search" id="q" placeholder="Search meaning, reading, character…" value="${esc(filter)}">
          <p class="muted small">${matches.length} item${matches.length === 1 ? '' : 's'}${matches.length > CAP ? ` (showing the first ${CAP} — search to narrow down)` : ''} · <span class="dot new"></span>new <span class="dot learning"></span>learning <span class="dot known"></span>mastered</p>
          <div class="browse">
            ${items.map((it) => type === 'kanji'
              ? `<div class="b-item"><div class="b-main">${esc(it.char)}</div><div class="b-body"><b>${esc(it.meaning)}</b><div class="small">音 ${esc(it.on)} · 訓 ${esc(it.kun)}</div><div class="small muted">${esc(it.word)} (${esc(it.wordReading)}) ${esc(it.wordMeaning)}</div></div><span class="dot ${statusOf(it.id)}"></span></div>`
              : `<div class="b-item"><div class="b-main sm">${esc(it.word)}</div><div class="b-body"><b>${esc(it.meaning)}</b> <span class="reading">${esc(it.reading)}</span> ${speakBtn(it.reading)}<div class="small muted">${esc(it.ex)} — ${esc(it.exEn)}</div></div><span class="dot ${statusOf(it.id)}"></span></div>`).join('')}
          </div>`;
        bind();
        const q = $('#q', root);
        q.addEventListener('input', () => {
          const pos = q.selectionStart;
          browse(q.value);
          const n = $('#q', root); n.focus(); n.setSelectionRange(pos, pos);
        });
      }

      function bind() {
        $$('.tab', root).forEach((b) => b.addEventListener('click', () => { tab = b.dataset.tab; tab === 'study' ? study() : browse(); }));
      }
      study();
    };
  }
  V.kanji = flashPage('kanji');
  V.vocab = flashPage('vocab');

  /* ================================================================ GRAMMAR */
  function grammarCard(g, opts = {}) {
    return `
      <article class="card g-card" data-id="${esc(g.id)}">
        <header>
          <h3>${esc(g.p)}</h3>
          <span class="level-pill">N${g.level}</span>
        </header>
        <div class="g-meaning">${esc(g.m)}</div>
        <div class="g-struct"><span>Structure</span> ${esc(g.s)}</div>
        <p class="g-note">${esc(g.n)}</p>
        <ul class="g-ex">
          ${g.ex.map(([jp, en]) => `<li><div class="jp">${esc(jp)} ${speakBtn(jp)}</div><div class="muted small">${esc(en)}</div></li>`).join('')}
        </ul>
        ${opts.review ? `<div class="actions"><button class="btn good" data-act="ok">✓ I remember this</button><button class="btn bad" data-act="no">✗ Still shaky</button></div>` : ''}
      </article>`;
  }

  V.grammar = (root) => {
    bindSpeak(root);
    let tab = 'today';

    function today_() {
      const level = L();
      const ids = DL.ids('grammar', level);
      const items = ids.map((id) => db.byId[id]);
      const due = DL.due('grammar', level, 20).filter((id) => !ids.includes(id)).map((id) => db.byId[id]);
      const allSeen = ids.length > 0 && ids.every(srs.isSeen);
      root.innerHTML = `
        <h1>文法 Daily Grammar <span class="level-pill">N${level}</span></h1>
        ${tabsHtml([['today', 'Today'], ['browse', 'Browse all']], tab)}
        ${items.length
          ? `<div class="notice ${allSeen ? 'ok' : ''}">${allSeen ? '✓ You marked today\'s grammar as studied.' : `Read the ${items.length} lesson${items.length === 1 ? '' : 's'} below, then mark them as studied.`}</div>
             <div class="stack">${items.map((g) => grammarCard(g)).join('')}</div>
             <div class="actions sticky-actions">
               <button class="btn primary" id="mark" ${allSeen ? 'disabled' : ''}>${allSeen ? 'Studied ✓' : 'Mark all as studied'}</button>
               <button class="btn" id="quiz">Quiz me on these</button>
               <button class="btn" id="more">+ ${store.s.perDay.grammar} more lessons</button>
             </div>`
          : `<div class="card center"><p>You've covered all N${level} grammar patterns. Review them below or switch level.</p></div>`}
        ${due.length ? `<h2>Due for review (${due.length})</h2><div class="stack">${due.map((g) => grammarCard(g, { review: true })).join('')}</div>` : ''}`;
      bind();
      const mark = $('#mark', root);
      if (mark) mark.addEventListener('click', () => { ids.forEach(srs.study); App.util.toast('Nice! Marked as studied.'); today_(); });
      const quiz = $('#quiz', root);
      if (quiz) quiz.addEventListener('click', () =>
        App.runner.start(root, { questions: Q.many(items, Math.max(4, items.length * 2)), title: 'Grammar quick quiz', kind: 'session', level, back: '#/grammar', backLabel: 'Back' }));
      const more = $('#more', root);
      if (more) more.addEventListener('click', () => { DL.more('grammar', level, store.s.perDay.grammar); today_(); });
      $$('[data-act]', root).forEach((b) => b.addEventListener('click', () => {
        const id = b.closest('.g-card').dataset.id;
        srs.flash(id, b.dataset.act === 'ok', false);
        today_();
      }));
    }

    function browse(filter = '') {
      const level = L();
      const f = filter.trim().toLowerCase();
      const items = db.pool('grammar', level).filter((g) => !f || JSON.stringify(g).toLowerCase().includes(f));
      root.innerHTML = `
        <h1>文法 Grammar <span class="level-pill">N${level}</span></h1>
        ${tabsHtml([['today', 'Today'], ['browse', 'Browse all']], tab)}
        <input class="search" id="q" placeholder="Search patterns, meanings, examples…" value="${esc(filter)}">
        <p class="muted small">${items.length} pattern${items.length === 1 ? '' : 's'}</p>
        <div class="stack">${items.map((g) => grammarCard(g)).join('')}</div>`;
      bind();
      const q = $('#q', root);
      q.addEventListener('input', () => { const pos = q.selectionStart; browse(q.value); const n = $('#q', root); n.focus(); n.setSelectionRange(pos, pos); });
    }
    function bind() {
      $$('.tab', root).forEach((b) => b.addEventListener('click', () => { tab = b.dataset.tab; tab === 'today' ? today_() : browse(); }));
    }
    today_();
  };

  /* ============================================================== QUIZ HUB */
  function dailyItems(level) {
    const ids = ['kanji', 'vocab', 'grammar'].flatMap((t) => DL.ids(t, level));
    let items = ids.map((id) => db.byId[id]);
    if (items.length < 8) {
      const have = new Set(ids);
      const extra = ['kanji', 'vocab', 'grammar']
        .flatMap((t) => db.pool(t, level))
        .filter((x) => srs.isSeen(x.id) && !have.has(x.id));
      items = items.concat(sample(extra, 8 - items.length));
    }
    return items;
  }

  V.quiz = (root) => {
    const level = L();
    const items = dailyItems(level);
    const studied = items.filter((i) => srs.isSeen(i.id)).length;
    const doneToday = store.s.history.filter((h) => h.d === today() && h.kind === 'daily' && h.level === level);
    const best = doneToday.length ? Math.max(...doneToday.map((h) => Math.round((h.score / h.total) * 100))) : null;

    root.innerHTML = `
      <h1>確認 Quizzes <span class="level-pill">N${level}</span></h1>
      <div class="card daily-quiz">
        <div>
          <h2>Daily Quiz</h2>
          <p class="muted">${items.length} question${items.length === 1 ? '' : 's'} on today's kanji, vocabulary and grammar${studied < items.length ? ' (study the flashcards first for best results)' : ''}.</p>
          ${best !== null ? `<p class="badge ok">Best today: ${best}%</p>` : ''}
        </div>
        <div class="daily-start">
          <div class="field"><label for="dcount">Questions</label>
            <select id="dcount">
              ${[10, 20, 30].filter((n) => n < items.length).map((n) => `<option value="${n}" ${n === 20 ? 'selected' : ''}>${n}</option>`).join('')}
              <option value="${items.length}" ${items.length <= 20 ? 'selected' : ''}>All ${items.length}</option>
            </select></div>
          <button class="btn primary big" id="daily" ${items.length ? '' : 'disabled'}>Start daily quiz</button>
        </div>
      </div>

      <h2>Custom quiz</h2>
      <div class="card form">
        <div class="field"><label for="ctype">Topic</label>
          <select id="ctype">
            <option value="mix">Mixed (kanji + vocab + grammar)</option>
            <option value="kanji">Kanji</option>
            <option value="vocab">Vocabulary</option>
            <option value="grammar">Grammar</option>
          </select></div>
        <div class="field"><label for="cscope">Draw from</label>
          <select id="cscope">
            <option value="studied">Items I've studied</option>
            <option value="today">Today's items only</option>
            <option value="level">Everything at N${level}</option>
          </select></div>
        <div class="field"><label for="ccount">Questions</label>
          <select id="ccount"><option>5</option><option selected>10</option><option>20</option><option>30</option><option>50</option></select></div>
        <button class="btn primary" id="custom">Start</button>
      </div>
      <p class="muted small">Looking for particles? Try the <a href="#/particles">Particle Tester</a>. For a full timed test, use the <a href="#/exam">Mock Exam</a>.</p>`;

    $('#daily', root).addEventListener('click', () => {
      const n = Math.min(+$('#dcount', root).value, items.length);
      // spread the questions across kanji / vocab / grammar rather than taking one type only
      const picked = n >= items.length ? items : sample(items, n);
      App.runner.start(root, {
        questions: Q.many(picked, picked.length), title: 'Daily quiz', kind: 'daily', level, back: '#/quiz', backLabel: 'Back to quizzes'
      });
    });

    $('#custom', root).addEventListener('click', () => {
      const type = $('#ctype', root).value, scope = $('#cscope', root).value, n = +$('#ccount', root).value;
      const types = type === 'mix' ? ['kanji', 'vocab', 'grammar'] : [type];
      let pool = [];
      types.forEach((t) => {
        if (scope === 'today') pool = pool.concat(DL.ids(t, level).map((id) => db.byId[id]));
        else if (scope === 'studied') pool = pool.concat(db[t].filter((x) => srs.isSeen(x.id)));
        else pool = pool.concat(db.pool(t, level));
      });
      if (!pool.length) {
        App.util.toast(scope === 'studied' ? 'Nothing studied yet — do some flashcards first!' : 'No items found for that selection');
        return;
      }
      App.runner.start(root, {
        questions: Q.many(pool, n), title: 'Custom quiz', kind: 'custom', level, back: '#/quiz', backLabel: 'Back to quizzes'
      });
    });
  };
})();
