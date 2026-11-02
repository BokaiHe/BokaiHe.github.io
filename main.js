// Renders the page from window.SITE (data.js). UI labels live here; content lives in data.js.
const SITE = window.SITE;
const GH = 'https://github.com/BokaiHe/';

const I18N = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Research & Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'about.interests': 'Research interests',
    'about.education': 'Education',
    'projects.note': 'Most projects run in the browser — open the live demo, or preview the animation on the card.',
    'exp.research': 'Research',
    'exp.teaching': 'Teaching',
    'exp.course': 'Other academic projects',
    'exp.pubs': 'Patent',
    'exp.honors': 'Honors',
    'exp.skills': 'Skills',
    cv: 'CV (PDF)',
    demo: 'Demo',
    code: 'Code',
    play: '▶ Preview',
    pause: '❚❚ Pause',
    keywords: 'Keywords',
    steps: 'Approach',
    more: 'Details',
    back: 'All projects',
    figures: 'Figures',
    notFound: 'Project not found.',
    findings: 'Key findings',
    langBtn: '中文',
  },
  zh: {
    'nav.about': '关于我',
    'nav.projects': '研究与项目',
    'nav.experience': '经历',
    'nav.contact': '联系',
    'about.interests': '研究兴趣',
    'about.education': '教育背景',
    'projects.note': '多数项目可直接在浏览器中运行——打开在线演示，或在卡片上预览动画。',
    'exp.research': '研究经历',
    'exp.teaching': '教学经历',
    'exp.course': '其他学术项目',
    'exp.pubs': '专利',
    'exp.honors': '荣誉',
    'exp.skills': '技能',
    cv: '简历 (PDF)',
    demo: '在线演示',
    code: '源码',
    play: '▶ 预览',
    pause: '❚❚ 暂停',
    keywords: '关键词',
    steps: '研究步骤',
    more: '详情',
    back: '全部项目',
    figures: '图表',
    notFound: '未找到该项目。',
    findings: '主要结论',
    langBtn: 'EN',
  },
};

const root = document.documentElement;
let lang = root.lang === 'zh' ? 'zh' : (root.lang === 'en' ? 'en' : (navigator.language || '').startsWith('zh') ? 'zh' : 'en');

function store(key, value) {
  try { localStorage.setItem(key, value); } catch (e) {}
}

// Pick the current language from a { en, zh } field; plain strings pass through.
const tr = (v) => (v && typeof v === 'object' ? v[lang] : v);

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'text') node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) if (c) node.append(c);
  return node;
}

function fill(id, nodes) {
  document.getElementById(id).replaceChildren(...nodes);
}

function renderProfile(t) {
  const p = SITE.profile;
  document.getElementById('name').textContent = tr(p.name);
  document.getElementById('photo').alt = tr(p.name);
  document.title = tr(p.name);
  document.getElementById('position').textContent = tr(p.position);
  document.getElementById('lede').textContent = tr(p.lede);
  if (p.photo) document.getElementById('photo').src = p.photo;
  fill('hero-links', [
    ...p.contact.map((c) => el('a', { href: c.href, text: c.kind })),
    p.cv ? el('a', { href: p.cv, text: t.cv }) : null,
  ].filter(Boolean));
  fill('interests', p.interests.map((x) => el('li', { text: tr(x) })));
  fill('contact-list', p.contact.map((c) =>
    el('li', {}, [el('span', { class: 'kind', text: c.kind }), el('a', { href: c.href, text: c.label })])));
}

function timeline(items) {
  return items.map((x) => el('li', {}, [
    el('div', { class: 'tl-head' }, [
      el('strong', { text: tr(x.title) }),
      el('span', { class: 'date', text: tr(x.date) }),
    ]),
    x.role ? el('div', { class: 'meta', text: tr(x.role) }) : null,
    x.text ? el('p', { text: tr(x.text) }) : null,
  ]));
}

function renderCV() {
  fill('education', timeline(SITE.education));
  fill('research', timeline(SITE.research));
  fill('teaching', timeline(SITE.teaching));
  fill('course-projects', SITE.courseProjects.map((x) =>
    el('li', {}, [tr(x.title), el('span', { class: 'date', text: ' · ' + x.date })])));
  fill('patent-list', SITE.patents.map((x) => {
    const names = x.inventors[lang];
    const authors = el('div', { class: 'authors' }, names.flatMap((n, i) => [
      i ? ', ' : null,
      i === x.inventors.self ? el('strong', { text: n }) : n,
    ]).filter(Boolean));
    return el('article', { class: 'entry' }, [
      el('div', { class: 'media contain' }, el('a', { href: x.links[0].href, tabindex: '-1', 'aria-hidden': 'true' },
        el('img', { src: 'assets/projects/' + x.image, alt: tr(x.title), loading: 'lazy', style: 'object-fit:contain' }))),
      el('div', { class: 'body' }, [
        el('h3', { text: tr(x.title) }),
        authors,
        el('div', { class: 'meta', text: tr(x.meta) }),
        el('p', { text: tr(x.desc) }),
        el('div', { class: 'links' }, x.links.map((l) => el('a', { href: l.href, text: tr(l.label) }))),
      ]),
    ]);
  }));
  fill('honors', SITE.honors.map((x) => el('li', { text: tr(x) })));
  fill('skills', SITE.skills.flatMap((s) => [el('dt', { text: tr(s.label) }), el('dd', { text: tr(s.items) })]));
}

function renderProjects(t) {
  const cards = SITE.projects.map((p) => {
    // Projects with an `id` and `detail` get their own page; others link to the demo or repo.
    const repoUrl = p.repo ? GH + p.repo : null;
    const detailUrl = p.detail ? 'project.html?id=' + p.id : null;
    const href = detailUrl || p.demo || repoUrl;
    const linkTo = (child, attrs = {}) => (href ? el('a', { href, ...attrs }, child) : child);
    let media;
    if (p.poster) {
      const img = el('img', {
        src: 'assets/projects/' + p.poster,
        alt: tr(p.title),
        loading: 'lazy',
        decoding: 'async',
      });
      if (p.contain) img.style.objectFit = 'contain';
      media = el('div', { class: 'media' + (p.contain ? ' contain' : '') }, [linkTo(img, { tabindex: '-1', 'aria-hidden': 'true' })]);
      if (p.anim) attachPreview(media, img, p, t);
    } else {
      media = el(href ? 'a' : 'div', { class: 'media text', ...(href && { href, tabindex: '-1', 'aria-hidden': 'true' }), text: tr(p.title) });
    }
    const links = projectLinks(p, t, detailUrl);
    const body = el('div', { class: 'body' }, [
      p.kicker ? el('div', { class: 'kicker', text: tr(p.kicker) }) : null,
      el('h3', {}, href ? el('a', { href, text: tr(p.title), class: 'title-link' }) : tr(p.title)),
      p.meta ? el('div', { class: 'meta', text: tr(p.meta) }) : null,
      el('p', { text: tr(p.desc) }),
      el('div', { class: 'keywords', text: t.keywords + ': ' + p.tags.join(' · ') }),
      links.childElementCount ? links : null,
    ]);
    return el('article', { class: 'entry' }, [media, body]);
  });
  fill('project-grid', cards);
}

function projectLinks(p, t, detailUrl) {
  return el('div', { class: 'links' }, [
    detailUrl ? el('a', { href: detailUrl, text: t.more }) : null,
    p.demo ? el('a', { href: p.demo, text: p.demoLabel ? tr(p.demoLabel) : t.demo }) : null,
    ...(p.extraLinks || []).map((x) => el('a', { href: x.href, text: tr(x.label) })),
    p.repo ? el('a', { href: GH + p.repo, text: t.code }) : null,
  ]);
}

// project.html?id=… — the full write-up for one project.
function renderDetail(t) {
  const id = new URLSearchParams(location.search).get('id');
  const p = SITE.projects.find((x) => x.id === id && x.detail);
  const main = document.getElementById('detail');
  if (!p) {
    main.replaceChildren(el('p', { text: t.notFound }), el('a', { href: './#projects', text: '← ' + t.back }));
    return;
  }
  document.title = tr(p.title) + ' · ' + tr(SITE.profile.name);
  const d = p.detail;
  const section = (label, list) => el('section', { class: 'detail-section' }, [el('h2', { text: label }), list]);
  const links = projectLinks(p, t, null);
  main.replaceChildren(
    el('a', { class: 'back', href: './#projects', text: '← ' + t.back }),
    p.kicker ? el('div', { class: 'kicker', text: tr(p.kicker) }) : null,
    el('h1', { text: tr(p.title) }),
    p.meta ? el('div', { class: 'meta', text: tr(p.meta) }) : null,
    el('p', { class: 'lede', text: tr(d.intro || p.desc) }),
    p.poster ? el('figure', { class: 'figure' }, el('img', { src: 'assets/projects/' + p.poster, alt: tr(p.title) })) : null,
    d.steps ? section(t.steps, el('ol', { class: 'steps' }, d.steps.map((x) => el('li', { text: tr(x) })))) : null,
    d.findings ? section(t.findings, el('ul', { class: 'steps' }, d.findings.map((x) => el('li', { text: tr(x) })))) : null,
    d.figures ? section(t.figures, el('div', {}, d.figures.map((g) => el('figure', { class: 'figure' }, [
      el('a', { href: 'assets/projects/' + g.src }, el('img', { src: 'assets/projects/' + g.src, alt: tr(g.caption), loading: 'lazy' })),
      el('figcaption', { text: tr(g.caption) }),
    ])))) : null,
    el('div', { class: 'keywords', text: t.keywords + ': ' + p.tags.join(' · ') }),
    d.note ? el('p', { class: 'meta note', text: tr(d.note) }) : null,
    links.childElementCount ? links : null,
  );
}

// Posters are light; the animated demos (2–4 MB) load only when asked for.
function attachPreview(media, img, p, t) {
  const poster = img.src;
  const anim = 'assets/projects/' + p.anim;
  const btn = el('button', { class: 'play', type: 'button', text: t.play });
  let playing = false;
  const set = (on) => {
    playing = on;
    img.src = on ? anim : poster;
    btn.textContent = on ? t.pause : t.play;
  };
  btn.addEventListener('click', () => set(!playing));
  if (matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) {
    media.addEventListener('mouseenter', () => set(true));
    media.addEventListener('mouseleave', () => set(false));
  }
  media.append(btn);
}

function render() {
  root.lang = lang;
  const t = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach((n) => {
    const v = t[n.dataset.i18n];
    if (v) n.textContent = v;
  });
  document.getElementById('lang-toggle').textContent = t.langBtn;
  document.querySelectorAll('[data-name]').forEach((n) => { n.textContent = tr(SITE.profile.name); });
  if (document.getElementById('detail')) {
    renderDetail(t);
    return;
  }
  renderProfile(t);
  renderProjects(t);
  renderCV();
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  lang = lang === 'en' ? 'zh' : 'en';
  store('lang', lang);
  render();
});

document.getElementById('theme-toggle').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  store('theme', root.dataset.theme);
});

document.getElementById('year').textContent = new Date().getFullYear();
render();
