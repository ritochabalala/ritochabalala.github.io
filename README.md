# ritochababala.github.io — Portfolio

Personal portfolio of **Rito Chabalala** — AI / Software Engineer.

Built with **Next.js 15**, **Tailwind CSS**, **TypeScript**, statically exported and deployed to **GitHub Pages** (also works on Vercel out of the box).

---

## 🧰 Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 🏗️ Build (static export)

```bash
npm run build
```

The static site is emitted to `out/`. You can preview it locally with any static server, e.g. `npx serve out`.

## 🚀 Deploy

### Option A — GitHub Pages (current setup)

The repo is named `ritochababala.github.io`, which is a **user site** (no `basePath` needed).

1. Push to the `main` branch of `ritochabalala/ritochababala.github.io`.
2. In the repo settings, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. The workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and deploys on every push to `main`.

Site will be live at: **https://ritochababala.github.io**

> If you later rename the repo to anything other than `<username>.github.io`, set `basePath` and `assetPrefix` in [next.config.mjs](next.config.mjs) to `/your-repo-name`.

### Option B — Vercel

1. Import the repo into Vercel.
2. Framework preset: **Next.js**. No env vars needed.
3. Optional: remove `output: 'export'` from [next.config.mjs](next.config.mjs) if you want SSR/ISR features.

---

## ✏️ Editing content

All content lives in plain TypeScript so updates don't require touching components:

- [src/data/site.ts](src/data/site.ts) — name, role, email, social links
- [src/data/skills.ts](src/data/skills.ts) — skill groups
- [src/data/experience.ts](src/data/experience.ts) — roles & bullets
- [src/data/projects.ts](src/data/projects.ts) — featured projects

Sections live in [src/components/](src/components/) and are composed in [src/app/page.tsx](src/app/page.tsx).

---

## 📝 GitHub profile README

The README for your `ritochabalala/ritochabalala` profile repo is in [profile/README.md](profile/README.md). Copy it into that repo's root to update your GitHub profile card.

---

## 📄 License

MIT — feel free to use as a template, with attribution appreciated.
