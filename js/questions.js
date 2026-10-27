/* Question generators: turn any item into a multiple-choice question. */
(function () {
  'use strict';
  const { esc, cloze, shuffle, sample } = App.util;
  const db = App.db;

  const SECTION = {
    kanji: '文字・語彙 Vocabulary & Kanji',
    vocab: '文字・語彙 Vocabulary & Kanji',
    grammar: '文法 Grammar',
    particle: '助詞 Particles',
    verb: '活用 Verb forms'
  };

  /** distractor pool: same type & level, falling back to every level if too small */
  const distPool = (item) => {
    const p = db.pool(item.type, item.level);
    return p.length >= 10 ? p : db[item.type];
  };

  /** pick n distinct wrong answers, preferring ones of similar length to the correct one */
  function distractors(pool, correct, getter, n) {
    const seen = new Set([correct]);
    const vals = [];
    shuffle(pool).forEach((it) => {
      const v = getter(it);
      if (v && !seen.has(v)) { seen.add(v); vals.push(v); }
    });
    const len = String(correct).length;
    vals.sort((a, b) => Math.abs(String(a).length - len) - Math.abs(String(b).length - len));
    return shuffle(vals.slice(0, n * 3)).slice(0, n);
  }

  function build(item, prompt, sub, correct, wrongs, extra) {
    if (wrongs.length < 2) return null;
    const choices = shuffle([correct, ...wrongs]);
    return Object.assign(
      { id: item.id, type: item.type, item, prompt, sub, choices, answer: choices.indexOf(correct) },
      extra
    );
  }

  const big = (t, cls = '') => `<span class="jp-big ${cls}">${esc(t)}</span>`;

  /* ----------------------------------------------------------------- kanji */
  const kanjiExplain = (k) =>
    `<b>${esc(k.char)}</b> = ${esc(k.meaning)}. On: ${esc(k.on)} / Kun: ${esc(k.kun)}.<br>Example: ${esc(k.word)} (${esc(k.wordReading)}) = ${esc(k.wordMeaning)}`;

  const kanjiGens = [
    (k) => build(k, big(k.char), 'What does this kanji mean?', k.meaning, distractors(distPool(k), k.meaning, (x) => x.meaning, 3), { explain: kanjiExplain(k) }),
    (k) => build(k, big(k.word), 'How is this word read?', k.wordReading, distractors(distPool(k), k.wordReading, (x) => x.wordReading, 3), { explain: kanjiExplain(k) }),
    (k) => build(k, esc(k.meaning), 'Which kanji matches this meaning?', k.char, distractors(distPool(k), k.char, (x) => x.char, 3), { jpChoices: true, explain: kanjiExplain(k) })
  ];

  /* ----------------------------------------------------------------- vocab */
  const vocabExplain = (v) =>
    `<b>${esc(v.word)}</b> (${esc(v.reading)}) = ${esc(v.meaning)}<br>${esc(v.ex)}<br><span class="muted">${esc(v.exEn)}</span>`;

  const vocabGens = [
    (v) => build(v, big(v.word), 'What does this word mean?', v.meaning, distractors(distPool(v), v.meaning, (x) => x.meaning, 3), { explain: vocabExplain(v) }),
    (v) => build(v, esc(v.meaning), 'Which Japanese word matches?', v.word, distractors(distPool(v), v.word, (x) => x.word, 3), { jpChoices: true, explain: vocabExplain(v) }),
    (v) => {
      if (v.word === v.reading) return null;
      return build(v, big(v.word), 'How is this word read?', v.reading, distractors(distPool(v), v.reading, (x) => x.reading, 3), { explain: vocabExplain(v) });
    },
    (v) => {
      if (!v.ex.includes(v.word)) return null;
      return build(v, `<span class="jp-sentence">${cloze(v.ex.replace(v.word, '＿＿'))}</span>`, v.exEn, v.word, distractors(distPool(v), v.word, (x) => x.word, 3), { jpChoices: true, explain: vocabExplain(v) });
    }
  ];

  /* --------------------------------------------------------------- grammar */
  const grammarExplain = (g) =>
    `<b>${esc(g.p)}</b>: ${esc(g.m)}<br>${esc(g.q.s.replace(/＿+/, g.q.a))}<br><span class="muted">${esc(g.n)}</span>`;

  const grammarGens = [
    (g) => build(g, `<span class="jp-sentence">${cloze(g.q.s)}</span>`, g.q.t, g.q.a, g.q.w, { jpChoices: true, explain: grammarExplain(g) }),
    (g) => build(g, big(g.p, 'small'), 'Which meaning fits this grammar pattern?', g.m, distractors(distPool(g), g.m, (x) => x.m, 3), { explain: grammarExplain(g) }),
    (g) => build(g, `<span class="jp-sentence">${esc(g.ex[0][0])}</span>`, 'Which grammar pattern is used in this sentence?', g.p, distractors(distPool(g), g.p, (x) => x.p, 3), { jpChoices: true, explain: grammarExplain(g) })
  ];

  /* ------------------------------------------------------------- particles */
  const BASIC = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'も', 'の', 'から', 'まで', 'より'];
  const FINAL = ['か', 'ね', 'よ'];
  const COMPOUND = ['について', 'として', 'によって', 'にとって', 'に対して', 'によると', 'だけでなく'];

  function particleChoices(p) {
    const ok = new Set([p.a, ...p.alt]);
    const answers = db.upTo('particle', p.level).flatMap((x) => [x.a, ...x.alt]);
    let pool = [...new Set([...BASIC, ...answers])].filter((x) => !ok.has(x));
    const isFinal = FINAL.includes(p.a);
    const isCompound = COMPOUND.includes(p.a);
    if (isCompound) pool = pool.filter((x) => COMPOUND.includes(x));
    else if (isFinal) pool = pool.filter((x) => FINAL.includes(x) || BASIC.slice(0, 3).includes(x));
    else pool = pool.filter((x) => !COMPOUND.includes(x) && !FINAL.includes(x));
    return sample(pool, 5);
  }

  function particleGen(p) {
    const wrongs = particleChoices(p);
    const q = build(p, `<span class="jp-sentence">${cloze(p.s)}</span>`, p.t, p.a, wrongs, {
      jpChoices: true,
      grid: true,
      explain: `<b>${esc(p.s.replace('＿', p.a))}</b><br>${esc(p.why)}`
    });
    if (q && p.alt.length) q.altAnswers = p.alt;
    return q;
  }

  /* ----------------------------------------------------------------- verbs */
  const FORM = {
    masu: { key: 'masu', label: 'ます-form (polite)' },
    te: { key: 'te', label: 'て-form' },
    nai: { key: 'nai', label: 'ない-form (negative)' },
    ta: { key: 'ta', label: 'た-form (past)' }
  };
  const TE_ENDS = ['って', 'んで', 'いて', 'いで', 'して', 'て'];
  const TA_ENDS = ['った', 'んだ', 'いた', 'いだ', 'した', 'た'];

  function verbGen(form) {
    return (v) => {
      const f = FORM[form];
      const correct = v[f.key];
      let others = ['masu', 'te', 'nai', 'ta'].filter((k) => k !== f.key).map((k) => v[k]);
      if ((form === 'te' || form === 'ta') && v.group !== 3) {
        const stem = v.kana.slice(0, -1);
        const gen = (form === 'te' ? TE_ENDS : TA_ENDS).map((e) => stem + e);
        others = others.concat(gen);
      }
      const pool = [...new Set(others)].filter((x) => x !== correct);
      const wrongs = sample(pool, 3);
      const rule =
        v.group === 1 ? 'Group 1 (godan): change the final kana (う・つ・る→って, ぶ・む・ぬ→んで, く→いて, ぐ→いで, す→して).'
        : v.group === 2 ? 'Group 2 (ichidan): drop る and add the ending (食べる → 食べて).'
        : 'Group 3 (irregular): する → して / しない, くる → きて / こない.';
      return build(
        v,
        `${big(v.dict)} <span class="reading">${esc(v.kana)}</span>`,
        `${esc(v.meaning)} — what is the ${f.label}?`,
        correct,
        wrongs,
        {
          jpChoices: true,
          explain: `<b>${esc(v.dict)}</b>: ます ${esc(v.masu)} · て ${esc(v.te)} · ない ${esc(v.nai)} · た ${esc(v.ta)}<br><span class="muted">${esc(rule)}</span>`
        }
      );
    };
  }
  const verbGens = [verbGen('te'), verbGen('nai'), verbGen('ta'), verbGen('masu')];

  /* ------------------------------------------------------------------- API */
  const GENS = { kanji: kanjiGens, vocab: vocabGens, grammar: grammarGens, particle: [particleGen], verb: verbGens };

  const Q = (App.Q = {});

  /** Build one question for an item. `k` picks which question style to start trying from. */
  Q.make = (item, k = Math.floor(Math.random() * 99)) => {
    const gens = GENS[item.type];
    for (let i = 0; i < gens.length; i++) {
      const q = gens[(k + i) % gens.length](item);
      if (q) { q.section = SECTION[item.type]; return q; }
    }
    return null;
  };

  /** Build `n` questions from items, cycling through items and varying the question style. */
  Q.many = (items, n) => {
    if (!items.length) return [];
    const list = shuffle(items);
    const offsets = {};
    const out = [];
    for (let i = 0; i < n * 2 && out.length < n; i++) {
      const item = list[i % list.length];
      const round = Math.floor(i / list.length);
      offsets[item.id] = offsets[item.id] === undefined ? Math.floor(Math.random() * 99) : offsets[item.id];
      const q = Q.make(item, offsets[item.id] + round);
      if (q) out.push(q);
    }
    return out;
  };

  /** Pick n items of a type: this level first, topped up with easier levels if needed. */
  Q.pickItems = (type, level, n) => {
    const exact = shuffle(db.pool(type, level));
    if (exact.length >= n) return exact.slice(0, n);
    const easier = shuffle(db[type].filter((x) => x.level > level));
    return exact.concat(easier).slice(0, n);
  };

  /** Reshuffle choices of an existing question (used when retrying missed questions). */
  Q.reshuffle = (q) => {
    const correct = q.choices[q.answer];
    const choices = shuffle(q.choices);
    return Object.assign({}, q, { choices, answer: choices.indexOf(correct) });
  };

  Q.FORM = FORM;
})();
