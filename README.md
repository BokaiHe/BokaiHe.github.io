# BokaiHe.github.io

Personal site of Bokai He. Plain static HTML/CSS/JS, no build step.

- **Content:** edit `data.js` (profile, contact, projects, research, teaching, education, skills). Every text field is `{ en, zh }`.
- **Project media:** `assets/projects/` — a light poster (`poster`) and an optional animated preview (`anim`) that loads only on hover or tap.
- **Detail pages:** give a project an `id` and a `detail` object (`intro`, `steps`, `findings`, `figures`, `note`); its card then links to `project.html?id=<id>`.
- **Typography:** Inter + Noto Sans SC (Google Fonts). Use only the `--text-*`, `--weight-*` and `--leading-*` tokens at the top of `style.css`; don't add raw pixel sizes.
- **After editing CSS/JS:** bump the `?v=` number on the `<link>`/`<script>` tags in `index.html` and `project.html` so browsers fetch the new files.
- **CV download:** set `profile.cv` in `data.js` to a PDF path once a final CV is added.
- **Run locally:** `python -m http.server 8095` in this folder, then open http://localhost:8095.
