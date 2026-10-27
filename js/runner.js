/* Quiz runner: practice mode (instant feedback) and exam mode (timed, graded at the end). */
(function () {
  'use strict';
  const { esc, $, $$, fmtTime } = App.util;
  const store = App.store;

  /**
   * opts: {
   *   questions, title, mode: 'practice' | 'exam', timeLimit (secs, exam only),
   *   kind (history tag), level, record (default true),
   *   back (hash to return to), backLabel, passRatio (exam)
   * }
   */
  function start(root, opts) {
    const exam = opts.mode === 'exam';
    const qs = opts.questions;
    if (!qs.length) {
      root.innerHTML = `<div class="card center"><p>No questions could be created for this selection yet.</p><a class="btn" href="${opts.back || '#/'}">Back</a></div>`;
      return;
    }
    const st = { i: 0, ans: qs.map(() => null), finished: false, t0: Date.now(), left: opts.timeLimit || 0 };
    let timer = null;

    const stopTimer = () => { if (timer) { clearInterval(timer); timer = null; } };
    App.onLeave(() => { stopTimer(); document.removeEventListener('keydown', onKey); });

    /* ------------------------------------------------------------ render */
    function render() {
      const q = qs[st.i];
      const answered = st.ans[st.i] !== null;
      const pct = Math.round(((st.i + (answered && !exam ? 1 : 0)) / qs.length) * 100);
      root.innerHTML = `
        <section class="runner">
          <div class="runner-top">
            <button class="btn ghost small" id="quit">✕ Quit</button>
            <div class="runner-title">${esc(opts.title || 'Quiz')}</div>
            ${exam ? `<div class="timer" id="timer">${fmtTime(st.left)}</div>` : `<div class="muted small">${st.i + 1} / ${qs.length}</div>`}
          </div>
          <div class="bar"><div style="width:${pct}%"></div></div>
          ${exam ? navPills() : ''}
          <div class="card q-card">
            <div class="q-label">${exam ? `Question ${st.i + 1} / ${qs.length} · ` : ''}${esc(q.section || '')}</div>
            <div class="q-prompt">${q.prompt}</div>
            <div class="q-sub">${esc(q.sub || '')}</div>
            <div class="choices ${q.grid ? 'grid' : ''} ${q.jpChoices ? 'jp' : ''}">
              ${q.choices.map((c, i) => `<button class="choice" data-i="${i}"><span class="key">${i + 1}</span><span class="txt">${esc(c)}</span></button>`).join('')}
            </div>
            <div class="feedback" id="feedback"></div>
          </div>
          <div class="runner-actions">
            ${exam ? `<button class="btn" id="prev" ${st.i === 0 ? 'disabled' : ''}>← Prev</button>` : '<span></span>'}
            ${exam
              ? (st.i < qs.length - 1 ? '<button class="btn primary" id="next">Next →</button>' : '<button class="btn primary" id="submit">Submit exam</button>')
              : `<button class="btn primary" id="next" ${answered ? '' : 'disabled'}>${st.i < qs.length - 1 ? 'Next →' : 'Finish'}</button>`}
            ${exam && st.i < qs.length - 1 ? '<button class="btn" id="submit">Submit</button>' : ''}
          </div>
        </section>`;

      $$('.choice', root).forEach((b) => b.addEventListener('click', () => choose(+b.dataset.i)));
      $('#quit', root).addEventListener('click', quit);
      const next = $('#next', root);
      if (next) next.addEventListener('click', goNext);
      const prev = $('#prev', root);
      if (prev) prev.addEventListener('click', () => { st.i--; render(); });
      const sub = $('#submit', root);
      if (sub) sub.addEventListener('click', () => submit(false));
      $$('.pill', root).forEach((p) => p.addEventListener('click', () => { st.i = +p.dataset.i; render(); }));

      if (answered) paint(q);
    }

    function navPills() {
      return `<div class="pills">${qs
        .map((_, i) => `<button class="pill ${st.ans[i] !== null ? 'done' : ''} ${i === st.i ? 'cur' : ''}" data-i="${i}">${i + 1}</button>`)
        .join('')}</div>`;
    }

    /** mark selected / correct / wrong choices in the current view */
    function paint(q) {
      const sel = st.ans[st.i];
      const btns = $$('.choice', root);
      if (exam) {
        btns.forEach((b, i) => b.classList.toggle('selected', i === sel));
        return;
      }
      btns.forEach((b, i) => {
        b.disabled = true;
        if (i === q.answer) b.classList.add('correct');
        else if (i === sel) b.classList.add('wrong');
      });
      const ok = sel === q.answer;
      $('#feedback', root).innerHTML = `<div class="fb ${ok ? 'ok' : 'bad'}"><strong>${ok ? '✓ Correct!' : '✗ Not quite.'}</strong><div>${q.explain || ''}</div></div>`;
    }

    /* ------------------------------------------------------------ actions */
    function choose(i) {
      const q = qs[st.i];
      if (!exam && st.ans[st.i] !== null) return;
      st.ans[st.i] = i;
      if (!exam) {
        App.srs.answer(q.id, i === q.answer);
        App.log(1);
        $('#next', root).disabled = false;
      } else {
        const pill = $$('.pill', root)[st.i];
        if (pill) pill.classList.add('done');
      }
      paint(q);
    }

    function goNext() {
      if (st.i < qs.length - 1) { st.i++; render(); }
      else if (!exam) finish();
    }

    function quit() {
      if (st.ans.some((a) => a !== null) && !st.finished && !confirm('Quit this session? Progress on answered questions is kept, but the result will not be saved.')) return;
      stopTimer();
      location.hash = opts.back || '#/';
    }

    function submit(auto) {
      const blank = st.ans.filter((a) => a === null).length;
      if (!auto && blank && !confirm(`${blank} question(s) unanswered. Submit anyway?`)) return;
      if (exam) {
        qs.forEach((q, i) => { if (st.ans[i] !== null) App.srs.answer(q.id, st.ans[i] === q.answer); });
        App.log(qs.length);
      }
      finish();
    }

    function finish() {
      stopTimer();
      st.finished = true;
      const secs = Math.round((Date.now() - st.t0) / 1000);
      const score = qs.filter((q, i) => st.ans[i] === q.answer).length;
      if (opts.record !== false) {
        store.s.history.push({ d: App.util.today(), t: Date.now(), kind: opts.kind || 'quiz', level: opts.level, score, total: qs.length, secs });
        if (store.s.history.length > 200) store.s.history.splice(0, store.s.history.length - 200);
        store.save();
      }
      result(score, secs);
    }

    /* ------------------------------------------------------------- results */
    function result(score, secs) {
      const total = qs.length;
      const pct = Math.round((score / total) * 100);
      const missed = qs.filter((q, i) => st.ans[i] !== q.answer);
      let examBlock = '';
      if (exam) {
        const sections = {};
        qs.forEach((q, i) => {
          const s = (sections[q.section] = sections[q.section] || { c: 0, t: 0 });
          s.t++;
          if (st.ans[i] === q.answer) s.c++;
        });
        const pass = opts.passRatio || 0.5;
        const minSec = 0.32;
        const secOk = Object.values(sections).every((s) => s.c / s.t >= minSec);
        const passed = score / total >= pass && secOk;
        examBlock = `
          <div class="verdict ${passed ? 'pass' : 'fail'}">${passed ? '合格 — On track to pass!' : '不合格 — Keep practicing'}</div>
          <p class="muted small">Guide only: this mock needs ≥ ${Math.round(pass * 100)}% overall and ≥ ${Math.round(minSec * 100)}% in every section (modelled on the real N${opts.level} pass marks; the real test uses scaled scores and adds listening).</p>
          <table class="table"><thead><tr><th>Section</th><th>Score</th><th></th></tr></thead><tbody>
          ${Object.entries(sections).map(([n, s]) => `<tr><td>${esc(n)}</td><td>${s.c} / ${s.t}</td><td><div class="mini-bar"><div style="width:${(s.c / s.t) * 100}%"></div></div></td></tr>`).join('')}
          </tbody></table>`;
      }
      const msg = pct >= 90 ? 'Excellent! 🎉' : pct >= 70 ? 'Nice work!' : pct >= 50 ? 'Getting there — review the misses below.' : 'Keep going — repetition is the key.';
      root.innerHTML = `
        <section class="runner">
          <div class="card result center">
            <div class="score-ring" style="--p:${pct}"><span>${pct}%</span></div>
            <h2>${score} / ${total} correct</h2>
            <p class="muted">${msg} · ${fmtTime(secs)}</p>
            ${examBlock}
            <div class="actions">
              ${missed.length ? `<button class="btn primary" id="retry">Retry ${missed.length} missed</button>` : ''}
              <a class="btn" href="${opts.back || '#/'}">${esc(opts.backLabel || 'Done')}</a>
            </div>
          </div>
          <h3>Review</h3>
          <div class="review">
            ${qs.map((q, i) => reviewItem(q, i)).join('')}
          </div>
        </section>`;
      const retry = $('#retry', root);
      if (retry) {
        retry.addEventListener('click', () =>
          start(root, Object.assign({}, opts, { mode: 'practice', timeLimit: 0, record: false, title: 'Retry: missed questions', questions: missed.map(App.Q.reshuffle) })));
      }
    }

    function reviewItem(q, i) {
      const a = st.ans[i];
      const ok = a === q.answer;
      return `<details class="card review-item ${ok ? 'ok' : 'bad'}" ${ok ? '' : 'open'}>
        <summary><span class="mark">${ok ? '✓' : '✗'}</span> Q${i + 1} <span class="muted small">${esc(q.sub || '')}</span></summary>
        <div class="q-prompt small">${q.prompt}</div>
        <div class="muted small">Your answer: <b>${a === null ? '—' : esc(q.choices[a])}</b> · Correct: <b>${esc(q.choices[q.answer])}</b></div>
        <div class="explain">${q.explain || ''}</div>
      </details>`;
    }

    /* ----------------------------------------------------------- keyboard */
    function onKey(e) {
      if (st.finished || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const q = qs[st.i];
      if (/^[1-9]$/.test(e.key)) {
        const i = +e.key - 1;
        if (i < q.choices.length) choose(i);
      } else if (e.key === 'Enter' || (!exam && e.key === ' ')) {
        const next = $('#next', root);
        if (next && !next.disabled) { e.preventDefault(); goNext(); }
      } else if (exam && e.key === 'ArrowRight' && st.i < qs.length - 1) { st.i++; render(); }
      else if (exam && e.key === 'ArrowLeft' && st.i > 0) { st.i--; render(); }
    }
    document.addEventListener('keydown', onKey);

    if (exam && st.left) {
      timer = setInterval(() => {
        st.left--;
        const t = $('#timer', root);
        if (t) { t.textContent = fmtTime(st.left); t.classList.toggle('low', st.left < 60); }
        if (st.left <= 0) { submit(true); }
      }, 1000);
    }

    render();
  }

  App.runner = { start };
})();
