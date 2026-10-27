/* Views: Particle tester, Verb forms, Kana drill, Mock exam, Review, Progress, Settings. */
(function () {
  'use strict';
  const { esc, $, $$, shuffle, sample, today, addDays, fmtTime } = App.util;
  const { store, db, srs, Q } = App;
  const V = App.views;
  const L = () => store.s.level;

  const tabsHtml = (tabs, active) =>
    `<div class="tabs">${tabs.map(([k, l]) => `<button class="tab ${k === active ? 'active' : ''}" data-tab="${k}">${l}</button>`).join('')}</div>`;
  const options = (list, selected) =>
    list.map(([v, l]) => `<option value="${v}" ${String(v) === String(selected) ? 'selected' : ''}>${l}</option>`).join('');

  /* ================================================================ PARTICLES */
  V.particles = (root) => {
    let tab = 'practice';
    const render = () => (tab === 'practice' ? practice() : guide());

    function bindTabs() {
      $$('.tab', root).forEach((b) => b.addEventListener('click', () => { tab = b.dataset.tab; render(); }));
    }

    function practice() {
      const level = L();
      const items = db.upTo('particle', level);
      const here = db.pool('particle', level);
      const recs = items.map((i) => srs.rec(i.id)).filter(Boolean);
      const c = recs.reduce((n, r) => n + r.c, 0), w = recs.reduce((n, r) => n + r.w, 0);
      const acc = c + w ? Math.round((c / (c + w)) * 100) : null;
      root.innerHTML = `
        <h1>助詞 Particle Tester <span class="level-pill">N${level}</span></h1>
        ${tabsHtml([['practice', 'Practice'], ['guide', 'Particle guide']], tab)}
        <div class="card form">
          <div class="field"><label for="scope">Sentences</label>
            <select id="scope">
              <option value="up">N${level} and easier (${items.length})</option>
              <option value="only">N${level} only (${here.length})</option>
            </select></div>
          <div class="field"><label for="count">Questions</label>
            <select id="count"><option>10</option><option>20</option><option>30</option></select></div>
          <button class="btn primary" id="go">Start</button>
        </div>
        <div class="grid3">
          <div class="card stat-card"><b>${items.length}</b><span>sentences available</span></div>
          <div class="card stat-card"><b>${acc === null ? '—' : acc + '%'}</b><span>lifetime accuracy</span></div>
          <div class="card stat-card"><b>${items.filter((i) => srs.rec(i.id) && srs.rec(i.id).weak).length}</b><span>weak sentences</span></div>
        </div>
        <p class="muted">Each question hides one particle. Tap the right one — you'll see a short explanation after each answer. Wrong answers are saved to <a href="#/review">Review</a>.</p>`;
      bindTabs();
      $('#go', root).addEventListener('click', () => {
        const pool = $('#scope', root).value === 'only' ? here : items;
        const n = Math.min(+$('#count', root).value, pool.length);
        App.runner.start(root, { questions: Q.many(pool, n), title: 'Particle tester', kind: 'particles', level, back: '#/particles', backLabel: 'Back' });
      });
    }

    function guide(filter = '') {
      const f = filter.trim().toLowerCase();
      const list = DATA.particleGuide.filter((g) => !f || JSON.stringify(g).toLowerCase().includes(f));
      root.innerHTML = `
        <h1>助詞 Particle Guide</h1>
        ${tabsHtml([['practice', 'Practice'], ['guide', 'Particle guide']], tab)}
        <input class="search" id="q" placeholder="Search particles, e.g. で or “because”…" value="${esc(filter)}">
        <div class="guide">
          ${list.map((g) => `
            <article class="card guide-card">
              <header><div class="particle">${esc(g.p)}</div><div><h3>${esc(g.name)}</h3><span class="level-pill">N${g.lv}</span></div></header>
              <ul>${g.uses.map(([u, jp, en]) => `<li><b>${esc(u)}</b><div class="jp">${esc(jp)}</div><div class="muted small">${esc(en)}</div></li>`).join('')}</ul>
            </article>`).join('')}
        </div>`;
      bindTabs();
      const q = $('#q', root);
      q.addEventListener('input', () => { const pos = q.selectionStart; guide(q.value); const n = $('#q', root); n.focus(); n.setSelectionRange(pos, pos); });
    }
    render();
  };

  /* ===================================================================== VERBS */
  V.verbs = (root) => {
    const level = L();
    const items = db.upTo('verb', level);
    root.innerHTML = `
      <h1>活用 Verb Forms <span class="level-pill">N${level}</span></h1>
      <div class="card form">
        <div class="field"><label>Forms to drill</label>
          <div class="checks">
            <label><input type="checkbox" value="te" checked> て-form</label>
            <label><input type="checkbox" value="nai" checked> ない-form</label>
            <label><input type="checkbox" value="ta" checked> た-form</label>
            <label><input type="checkbox" value="masu"> ます-form</label>
          </div></div>
        <div class="field"><label for="count">Questions</label>
          <select id="count"><option>10</option><option>20</option><option>30</option></select></div>
        <button class="btn primary" id="go">Start (${items.length} verbs)</button>
      </div>

      <h2>Cheat sheet</h2>
      <div class="grid2">
        <div class="card">
          <h3>Group 1 · godan (五段)</h3>
          <table class="table compact"><thead><tr><th>Ending</th><th>て-form</th><th>Example</th></tr></thead><tbody>
            <tr><td>う・つ・る</td><td>って</td><td>買う → 買って</td></tr>
            <tr><td>ぶ・む・ぬ</td><td>んで</td><td>読む → 読んで</td></tr>
            <tr><td>く</td><td>いて</td><td>書く → 書いて <span class="muted">(行く → 行って!)</span></td></tr>
            <tr><td>ぐ</td><td>いで</td><td>泳ぐ → 泳いで</td></tr>
            <tr><td>す</td><td>して</td><td>話す → 話して</td></tr>
          </tbody></table>
          <p class="small muted">た-form follows the same pattern (って→った, んで→んだ, いて→いた, いで→いだ, して→した). ない-form: change the last kana to the あ-row (書く → 書かない; 買う → 買わない).</p>
        </div>
        <div class="card">
          <h3>Group 2 · ichidan (一段)</h3>
          <p>Verbs ending in <b>-iru / -eru</b> (mostly). Drop <b>る</b>:</p>
          <p class="jp">食べる → 食べます・食べて・食べない・食べた</p>
          <h3>Group 3 · irregular</h3>
          <p class="jp">する → します・して・しない・した</p>
          <p class="jp">来る → きます・きて・こない・きた</p>
          <p class="small muted">Beware of look-alikes: 帰る, 入る, 切る, 知る are Group 1 even though they end in -iru/-eru.</p>
        </div>
      </div>`;
    $('#go', root).addEventListener('click', () => {
      const forms = $$('.checks input:checked', root).map((c) => c.value);
      if (!forms.length) return App.util.toast('Pick at least one form');
      const IDX = { te: 0, nai: 1, ta: 2, masu: 3 };
      const n = +$('#count', root).value;
      const list = shuffle(items);
      const qs = [];
      for (let i = 0; i < n; i++) {
        const q = Q.make(list[i % list.length], IDX[sample(forms, 1)[0]]);
        if (q) qs.push(q);
      }
      App.runner.start(root, { questions: qs, title: 'Verb forms', kind: 'verbs', level, back: '#/verbs', backLabel: 'Back' });
    });
  };

  /* ===================================================================== KANA */
  const toKata = (s) => [...s].map((ch) => String.fromCharCode(ch.charCodeAt(0) + 0x60)).join('');

  V.kana = (root) => {
    const cfg = { script: 'hira', basic: true, dakuten: false, yoon: false };

    function deckFrom() {
      const scripts = cfg.script === 'both' ? ['hira', 'kata'] : [cfg.script];
      const deck = [];
      ['basic', 'dakuten', 'yoon'].filter((s) => cfg[s]).forEach((set) =>
        DATA.kana[set].forEach(([h, r]) => scripts.forEach((sc) => deck.push({ k: sc === 'hira' ? h : toKata(h), r: r.split('/') }))));
      return deck;
    }

    function chartHtml(script) {
      const cell = ([h, r]) => `<div class="kcell"><b>${script === 'kata' ? toKata(h) : h}</b><span>${r.split('/')[0]}</span></div>`;
      return ['basic', 'dakuten', 'yoon'].map((s) => `<div class="kgrid ${s}">${DATA.kana[s].map(cell).join('')}</div>`).join('');
    }

    function config() {
      root.innerHTML = `
        <h1>かな Kana Drill</h1>
        <div class="card form">
          <div class="field"><label for="script">Script</label>
            <select id="script">${options([['hira', 'Hiragana ひらがな'], ['kata', 'Katakana カタカナ'], ['both', 'Both']], cfg.script)}</select></div>
          <div class="field"><label>Include</label>
            <div class="checks">
              <label><input type="checkbox" data-set="basic" ${cfg.basic ? 'checked' : ''}> Basic (46)</label>
              <label><input type="checkbox" data-set="dakuten" ${cfg.dakuten ? 'checked' : ''}> Dakuten / handakuten (が, ぱ…)</label>
              <label><input type="checkbox" data-set="yoon" ${cfg.yoon ? 'checked' : ''}> Combos (きゃ, しゅ…)</label>
            </div></div>
          <button class="btn primary" id="go">Start typing drill</button>
        </div>
        <p class="muted">Type the romaji for each kana and press <kbd>Enter</kbd>. Alternative spellings like <i>si</i> / <i>shi</i> are both accepted.</p>
        <details class="card"><summary><b>Hiragana chart</b></summary>${chartHtml('hira')}</details>
        <details class="card"><summary><b>Katakana chart</b></summary>${chartHtml('kata')}</details>`;
      $('#script', root).addEventListener('change', (e) => { cfg.script = e.target.value; });
      $$('[data-set]', root).forEach((c) => c.addEventListener('change', () => { cfg[c.dataset.set] = c.checked; }));
      $('#go', root).addEventListener('click', () => {
        const deck = deckFrom();
        if (!deck.length) return App.util.toast('Select at least one set');
        drill(deck);
      });
    }

    function drill(deck) {
      const queue = shuffle(deck);
      const total = deck.length;
      const firstTry = new Set(deck.map((d) => d.k));
      const missed = new Set();
      let done = 0, feedback = false, t0 = Date.now();

      function draw() {
        if (!queue.length) return finish();
        const cur = queue[0];
        root.innerHTML = `
          <section class="runner">
            <div class="runner-top">
              <button class="btn ghost small" id="quit">✕ Quit</button>
              <div class="runner-title">Kana drill</div>
              <div class="muted small">${done} / ${total}</div>
            </div>
            <div class="bar"><div style="width:${(done / total) * 100}%"></div></div>
            <div class="card kana-card center">
              <div class="kana-big">${esc(cur.k)}</div>
              <form id="f" autocomplete="off">
                <input id="ans" class="kana-input" placeholder="romaji" autocapitalize="off" autocomplete="off" spellcheck="false" ${feedback ? 'readonly' : ''}>
              </form>
              <div id="fb" class="feedback"></div>
            </div>
          </section>`;
        const input = $('#ans', root);
        input.focus();
        $('#quit', root).addEventListener('click', () => { location.hash = '#/kana'; config(); });
        $('#f', root).addEventListener('submit', (e) => {
          e.preventDefault();
          if (feedback) { feedback = false; draw(); return; }
          const v = input.value.trim().toLowerCase();
          if (!v) return;
          if (cur.r.includes(v)) {
            queue.shift();
            done++;
            App.log(1);
            input.classList.add('ok');
            setTimeout(draw, 250);
          } else {
            missed.add(cur.k);
            firstTry.delete(cur.k);
            queue.shift();
            queue.splice(Math.min(3, queue.length), 0, cur);
            feedback = true;
            input.classList.add('bad');
            $('#fb', root).innerHTML = `<div class="fb bad">✗ <b>${esc(cur.k)}</b> = <b>${esc(cur.r[0])}</b> <span class="muted small">(press Enter)</span></div>`;
          }
        });
      }

      function finish() {
        const secs = Math.round((Date.now() - t0) / 1000);
        const score = firstTry.size;
        store.s.history.push({ d: today(), t: Date.now(), kind: 'kana', level: L(), score, total, secs });
        store.save();
        root.innerHTML = `
          <div class="card center result">
            <div class="big-emoji">✨</div>
            <h2>${score} / ${total} right on the first try</h2>
            <p class="muted">${fmtTime(secs)}${missed.size ? ' · Needs more practice: ' : ' · Perfect!'}</p>
            ${missed.size ? `<div class="chips">${[...missed].map((k) => `<span class="chip learning big">${esc(k)}</span>`).join('')}</div>` : ''}
            <div class="actions"><button class="btn primary" id="again">Drill again</button><button class="btn" id="cfg">Change settings</button></div>
          </div>`;
        $('#again', root).addEventListener('click', () => drill(deck));
        $('#cfg', root).addEventListener('click', config);
      }
      draw();
    }
    config();
  };

  /* ===================================================================== EXAM */
  const EXAM = {
    20: { minutes: 15, label: 'Short · 20 questions · 15 min' },
    30: { minutes: 22, label: 'Standard · 30 questions · 22 min' },
    40: { minutes: 30, label: 'Full · 40 questions · 30 min' },
    60: { minutes: 45, label: 'Marathon · 60 questions · 45 min' }
  };
  const PASS = { 5: 0.44, 4: 0.5, 3: 0.53 };

  function buildExam(level, n) {
    const nA = Math.round(n * 0.4), nB = Math.round(n * 0.4), nC = n - nA - nB;
    const nV = Math.ceil(nA / 2), nK = nA - nV;
    const A = shuffle([...Q.many(Q.pickItems('vocab', level, nV), nV), ...Q.many(Q.pickItems('kanji', level, nK), nK)]);
    const B = Q.many(Q.pickItems('grammar', level, nB), nB);
    const C = Q.many(Q.pickItems('particle', level, nC), nC);
    return [...A, ...B, ...C];
  }

  V.exam = (root) => {
    const level = L();
    root.innerHTML = `
      <h1>模擬試験 Mock Exam</h1>
      <div class="card form">
        <div class="field"><label for="lvl">Level</label>
          <select id="lvl">${options([[5, 'N5 · Beginner'], [4, 'N4 · Elementary'], [3, 'N3 · Intermediate']], level)}</select></div>
        <div class="field"><label for="len">Length</label>
          <select id="len">${options(Object.entries(EXAM).map(([k, v]) => [k, v.label]), 30)}</select></div>
        <button class="btn primary big" id="go">Begin exam</button>
      </div>
      <div class="card">
        <h3>How it works</h3>
        <ul class="bullets">
          <li>Three sections, like the real paper: <b>文字・語彙</b> (vocabulary &amp; kanji), <b>文法</b> (grammar) and <b>助詞</b> (particles).</li>
          <li>Timed. No feedback until you submit; you can jump between questions with the number pills or ← → keys.</li>
          <li>Pick answers with <kbd>1</kbd>–<kbd>4</kbd> (or <kbd>1</kbd>–<kbd>6</kbd> for particles).</li>
          <li>The pass guide is modelled on the real thresholds (N5 ≈ 44%, N4 ≈ 50%, N3 ≈ 53% overall, with a minimum per section). The real JLPT also includes reading and listening, which this app can't simulate.</li>
        </ul>
      </div>`;
    $('#go', root).addEventListener('click', () => {
      const lv = +$('#lvl', root).value, n = +$('#len', root).value;
      const questions = buildExam(lv, n);
      App.runner.start(root, {
        questions, mode: 'exam', timeLimit: EXAM[n].minutes * 60, title: `N${lv} Mock Exam`,
        kind: 'exam', level: lv, passRatio: PASS[lv], back: '#/exam', backLabel: 'Back to exam menu'
      });
    });
  };

  /* =================================================================== REVIEW */
  V.review = (root) => {
    const weak = App.weakItems();
    const level = L();
    const due = ['kanji', 'vocab', 'grammar'].flatMap((t) => App.daily.due(t, level, 999).map((id) => db.byId[id]));
    const groups = ['kanji', 'vocab', 'grammar', 'particle', 'verb'];
    root.innerHTML = `
      <h1>復習 Review</h1>
      <div class="grid2">
        <div class="card">
          <h3>Weak items <span class="badge ${weak.length ? 'warn' : 'ok'}">${weak.length}</span></h3>
          <p class="muted">Anything you got wrong in a quiz stays here until you answer it correctly twice in a row.</p>
          <div class="actions"><button class="btn primary" id="weak" ${weak.length ? '' : 'disabled'}>Practice weak items</button></div>
        </div>
        <div class="card">
          <h3>Due for review (N${level}) <span class="badge ${due.length ? 'warn' : 'ok'}">${due.length}</span></h3>
          <p class="muted">Spaced-repetition items scheduled for today or overdue.</p>
          <div class="actions"><button class="btn" id="due" ${due.length ? '' : 'disabled'}>Quiz me on due items</button></div>
        </div>
      </div>
      ${weak.length
        ? groups.map((t) => {
            const list = weak.filter((w) => w.type === t);
            if (!list.length) return '';
            return `<h2>${App.TYPE_LABEL[t]} (${list.length})</h2>
              <div class="card list">${list.map((it) => {
                const d = App.describe(it), r = srs.rec(it.id);
                return `<div class="row"><div class="row-main jp">${esc(d.title)}</div><div class="muted small">${esc(d.sub)}</div><div class="small">✓${r.c} ✗${r.w}</div></div>`;
              }).join('')}</div>`;
          }).join('')
        : '<div class="card center"><p>🎉 No weak items right now. Take a few quizzes and the ones you miss will collect here.</p></div>'}`;
    const run = (items, title, kind) => App.runner.start(root, {
      questions: Q.many(items, Math.min(20, Math.max(5, items.length))), title, kind, level, back: '#/review', backLabel: 'Back to review'
    });
    const w = $('#weak', root), d = $('#due', root);
    if (w) w.addEventListener('click', () => run(weak, 'Weak items', 'weak'));
    if (d) d.addEventListener('click', () => run(due, 'Due items', 'due'));
  };

  /* ================================================================= PROGRESS */
  V.progress = (root) => {
    const bar = (pct, cls = '') => `<div class="mini-bar ${cls}"><div style="width:${pct}%"></div></div>`;
    const rows = [5, 4, 3].map((lv) => {
      const cells = ['kanji', 'vocab', 'grammar', 'particle'].map((t) => {
        const s = App.stats(t, lv);
        const pct = s.total ? Math.round((s.seen / s.total) * 100) : 0;
        const mp = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
        return `<td><div class="cell-top"><b>${s.seen}</b> / ${s.total}</div>${bar(pct)}<div class="muted small">${mp}% mastered</div></td>`;
      }).join('');
      return `<tr><th>N${lv}</th>${cells}</tr>`;
    }).join('');

    const recs = Object.values(store.s.items);
    const c = recs.reduce((n, r) => n + r.c, 0), w = recs.reduce((n, r) => n + r.w, 0);
    const acc = c + w ? Math.round((c / (c + w)) * 100) : null;

    const days = Array.from({ length: 14 }, (_, i) => addDays(today(), i - 13));
    const max = Math.max(1, ...days.map((d) => store.s.activity[d] || 0));
    const chart = days.map((d) => {
      const v = store.s.activity[d] || 0;
      return `<div class="col" title="${d}: ${v} actions"><div class="colbar" style="height:${(v / max) * 100}%"></div><span>${d.slice(8)}</span></div>`;
    }).join('');

    const hist = store.s.history.slice(-12).reverse();
    const KIND = { daily: 'Daily quiz', custom: 'Custom quiz', exam: 'Mock exam', particles: 'Particles', verbs: 'Verb forms', kana: 'Kana drill', session: 'Quick quiz', weak: 'Weak items', due: 'Due items', quiz: 'Quiz' };

    root.innerHTML = `
      <h1>進捗 Progress</h1>
      <div class="grid3">
        <div class="card stat-card"><b>${App.streak()}</b><span>day streak 🔥</span></div>
        <div class="card stat-card"><b>${acc === null ? '—' : acc + '%'}</b><span>overall accuracy</span></div>
        <div class="card stat-card"><b>${recs.filter((r) => r.box >= 1).length}</b><span>items studied</span></div>
      </div>
      <h2>Coverage by level</h2>
      <div class="card scroll"><table class="table progress-table"><thead><tr><th></th><th>Kanji</th><th>Vocab</th><th>Grammar</th><th>Particles</th></tr></thead><tbody>${rows}</tbody></table></div>
      <h2>Last 14 days</h2>
      <div class="card"><div class="chart">${chart}</div></div>
      <h2>Recent results</h2>
      <div class="card scroll">${hist.length
        ? `<table class="table"><thead><tr><th>Date</th><th>Type</th><th>Level</th><th>Score</th><th>Time</th></tr></thead><tbody>
            ${hist.map((h) => `<tr><td>${h.d}</td><td>${esc(KIND[h.kind] || h.kind)}</td><td>${h.level ? 'N' + h.level : '—'}</td><td>${h.score}/${h.total} <span class="muted">(${Math.round((h.score / h.total) * 100)}%)</span></td><td>${fmtTime(h.secs || 0)}</td></tr>`).join('')}
          </tbody></table>`
        : '<p class="muted">No quizzes yet — your results will show up here.</p>'}</div>`;
  };

  /* ================================================================= SETTINGS */
  V.settings = (root) => {
    const s = store.s;
    root.innerHTML = `
      <h1>設定 Settings</h1>
      <div class="card form vertical">
        <h3>Daily amounts</h3>
        ${['kanji', 'vocab', 'grammar'].map((t) => `
          <div class="field row"><label for="pd-${t}">New ${App.TYPE_LABEL[t].toLowerCase()} per day</label>
            <input type="range" id="pd-${t}" min="1" max="${t === 'grammar' ? 15 : 40}" value="${s.perDay[t]}"><output>${s.perDay[t]}</output></div>`).join('')}
        <p class="muted small">Changes apply from tomorrow (today's set is locked in). Use “+ more” on a study page to add items today.</p>
        <h3>Appearance</h3>
        <div class="field"><label for="theme">Theme</label>
          <select id="theme">${options([['auto', 'Match system'], ['light', 'Light'], ['dark', 'Dark']], s.theme)}</select></div>
      </div>
      <div class="card">
        <h3>Your data</h3>
        <p class="muted">Everything is stored locally in your browser. Export a backup before clearing browser data or switching devices.</p>
        <div class="actions">
          <button class="btn" id="export">Export backup</button>
          <label class="btn">Import backup<input type="file" id="import" accept="application/json" hidden></label>
          <button class="btn bad" id="reset">Reset all progress</button>
        </div>
      </div>`;
    ['kanji', 'vocab', 'grammar'].forEach((t) => {
      const el = $(`#pd-${t}`, root);
      el.addEventListener('input', () => { el.nextElementSibling.textContent = el.value; s.perDay[t] = +el.value; store.save(); });
    });
    $('#theme', root).addEventListener('change', (e) => { s.theme = e.target.value; store.save(); App.applyTheme(); });
    $('#export', root).addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([store.exportJSON()], { type: 'application/json' }));
      a.download = `jlpt-dojo-backup-${today()}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    });
    $('#import', root).addEventListener('change', (e) => {
      const f = e.target.files[0];
      if (!f) return;
      f.text().then((t) => { store.importJSON(t); App.util.toast('Backup imported'); App.applyTheme(); App.renderShell(); App.route(); })
        .catch((err) => alert('Import failed: ' + err.message));
    });
    $('#reset', root).addEventListener('click', () => {
      if (confirm('Erase ALL progress, streaks and history? This cannot be undone.')) {
        store.reset(); App.applyTheme(); App.renderShell(); App.route(); App.util.toast('Progress reset');
      }
    });
  };
})();
