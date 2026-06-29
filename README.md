# ritochabalala.github.io — Portfolio

Personal portfolio of **Rito Chabalala** — Junior AI / Software Engineer.

Built with **Next.js 16** (App Router), **Tailwind CSS**, **TypeScript**, statically exported and deployed to **GitHub Pages** (also runs on Vercel out of the box).

🌐 Live at **[ritochabalala.github.io](https://ritochabalala.github.io)**

---

## 🗂️ Repository layout

```
.
├── frontend/                ← Next.js 16 app (App Router, Tailwind, TS)
│   ├── src/                 ← components, app routes, data
│   ├── public/              ← static assets + icons + manifest
│   ├── scripts/             ← one-off scripts (icon generator)
│   ├── next.config.mjs
│   ├── tailwind.config.ts
│   └── package.json
├── profile/                 ← local-only source assets (gitignored portrait)
├── .github/workflows/       ← Pages deploy workflow (builds from frontend/)
├── LICENSE
└── README.md
```

A `backend/` (or `api/`, `infra/`, `mobile/`, …) folder can be added at the root later without touching `frontend/`.

---

## 🧰 Local development

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000.

## 🏗️ Build (static export)

```bash
cd frontend
npm run build
```

The static site is emitted to `frontend/out/`. Preview with any static server, e.g. `npx serve frontend/out`.

## 🚀 Deploy

### Option A — GitHub Pages (current setup)

The repo is named `ritochabalala.github.io`, matching the username, so it is a **user site** served at the root with **no `basePath` needed**.

1. Push to the `main` branch of `ritochabalala/ritochabalala.github.io` (via a PR — see [Branch protection](#-branch-protection)).
2. In **Settings → Pages → Build and deployment**, ensure **Source** is set to **GitHub Actions**.
3. The workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds inside `frontend/` and uploads `frontend/out` on every push to `main`.

> If you ever fork this repo under a name **other than** `<username>.github.io`, set `basePath` and `assetPrefix` in [frontend/next.config.mjs](frontend/next.config.mjs) to `/your-repo-name`.

### Option B — Vercel

1. Import the repo into Vercel.
2. Framework preset: **Next.js**. Set **Root Directory** to `frontend`.
3. Optional: remove `output: 'export'` from [frontend/next.config.mjs](frontend/next.config.mjs) if you want SSR/ISR features.

---

## 🔒 Branch protection

`main` is protected by a repository ruleset:

- **Deletion** of `main` is blocked.
- **Force-pushes** to `main` are blocked.
- Changes must go through a **pull request**.
- The **`build`** status check from [`deploy.yml`](.github/workflows/deploy.yml) must pass before merge.

Workflow:

```bash
git checkout -b feat/<thing>
# edit, commit
git push -u origin feat/<thing>
gh pr create --fill
# wait for `build` to go green
gh pr merge --rebase --delete-branch
# push to main → auto-deploys
```

---

## ✏️ Editing content

All content lives in plain TypeScript so updates don't require touching components:

- [frontend/src/data/site.ts](frontend/src/data/site.ts) — name, role, email, social links
- [frontend/src/data/skills.ts](frontend/src/data/skills.ts) — skill groups
- [frontend/src/data/experience.ts](frontend/src/data/experience.ts) — roles & bullets
- [frontend/src/data/projects.ts](frontend/src/data/projects.ts) — featured projects
- [frontend/src/data/education.ts](frontend/src/data/education.ts) — degrees, modules, research
- [frontend/src/data/credentials.ts](frontend/src/data/credentials.ts) — certifications & awards

Sections live in [frontend/src/components/](frontend/src/components/) and are composed in [frontend/src/app/page.tsx](frontend/src/app/page.tsx).

---

## 🖼️ Regenerating the favicon and OG image

Icons in `frontend/public/` (`favicon.ico`, `icon-32.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `og-image.png`) are produced from a source portrait by [frontend/scripts/generate-icons.mjs](frontend/scripts/generate-icons.mjs) using [`sharp`](https://sharp.pixelplumbing.com/).

1. Drop your portrait at `profile/source.jpg` (the file is git-ignored).
2. Run:

   ```bash
   cd frontend
   node scripts/generate-icons.mjs
   ```

3. Commit the updated files in `frontend/public/` via a PR.

---

## 📄 License

[MIT](./LICENSE) — feel free to use as a template, attribution appreciated.
