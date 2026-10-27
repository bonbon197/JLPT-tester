/* App shell: navigation, level switcher, theme, hash router. */
(function () {
  'use strict';
  const { $, $$ } = App.util;

  const ROUTES = [
    ['/', 'home', 'Home', '🏠'],
    ['/kanji', 'kanji', 'Kanji', '漢'],
    ['/vocab', 'vocab', 'Vocab', '語'],
    ['/grammar', 'grammar', 'Grammar', '文'],
    ['/quiz', 'quiz', 'Quiz', '✔'],
    ['/particles', 'particles', 'Particles', 'は'],
    ['/verbs', 'verbs', 'Verbs', '動'],
    ['/kana', 'kana', 'Kana', 'あ'],
    ['/exam', 'exam', 'Mock Exam', '試'],
    ['/review', 'review', 'Review', '↺'],
    ['/progress', 'progress', 'Progress', '📈'],
    ['/settings', 'settings', 'Settings', '⚙']
  ];

  App.applyTheme = () => {
    const t = App.store.s.theme;
    const dark = t === 'dark' || (t === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  };

  App.renderShell = () => {
    const level = App.store.s.level;
    $('#levelSwitch').innerHTML = [5, 4, 3]
      .map((l) => `<button class="lvl ${l === level ? 'active' : ''}" data-l="${l}" title="${App.LEVEL_INFO[l]}">N${l}</button>`)
      .join('');
    $('#nav').innerHTML = ROUTES.map(([path, , label, icon]) =>
      `<a href="#${path}" data-path="${path}"><span class="ico">${icon}</span><span>${label}</span></a>`).join('');
    highlight();
  };

  function highlight() {
    const path = currentPath();
    $$('#nav a').forEach((a) => a.classList.toggle('active', a.dataset.path === path));
  }

  function currentPath() {
    const p = (location.hash.slice(1) || '/').split('?')[0];
    return ROUTES.some((r) => r[0] === p) ? p : '/';
  }

  App.route = () => {
    App.runLeave();
    const path = currentPath();
    const entry = ROUTES.find((r) => r[0] === path);
    const root = $('#app');
    root.innerHTML = '';
    root.dataset.view = entry[1];
    highlight();
    try {
      App.views[entry[1]](root);
    } catch (err) {
      console.error(err);
      root.innerHTML = `<div class="card"><h2>Something went wrong</h2><pre>${App.util.esc(err.stack || err)}</pre></div>`;
    }
    window.scrollTo(0, 0);
  };

  function init() {
    App.store.load();
    App.applyTheme();
    App.renderShell();

    $('#levelSwitch').addEventListener('click', (e) => {
      const b = e.target.closest('[data-l]');
      if (!b) return;
      App.store.s.level = +b.dataset.l;
      App.store.save();
      App.renderShell();
      App.route();
    });
    $('#themeBtn').addEventListener('click', () => {
      const s = App.store.s;
      const dark = document.documentElement.dataset.theme === 'dark';
      s.theme = dark ? 'light' : 'dark';
      App.store.save();
      App.applyTheme();
    });
    if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', App.applyTheme);
    window.addEventListener('hashchange', App.route);
    App.route();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
