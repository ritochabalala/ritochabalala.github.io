# ritochabalala.github.io — Portfolio

Personal portfolio of **Rito Chabalala** — Junior AI / Software Engineer.

Built with **Next.js 16** (App Router), **Tailwind CSS**, **TypeScript**, statically exported and deployed to **GitHub Pages** (also runs on Vercel out of the box).

🌐 Live at **[ritochabalala.github.io](https://ritochabalala.github.io)**

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

The static site is emitted to `out/`. Preview with any static server, e.g. `npx serve out`.

## 🚀 Deploy

### Option A — GitHub Pages (current setup)

The repo is named `ritochabalala.github.io`, matching the username, so it is a **user site** served at the root with **no `basePath` needed**.

1. Push to the `main` branch of `ritochabalala/ritochabalala.github.io` (via a PR — see [Branch protection](#-branch-protection)).
2. In **Settings → Pages → Build and deployment**, ensure **Source** is set to **GitHub Actions**.
3. The workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) runs the `build` job on every PR and pushes to `main`, and the `deploy` job only on direct pushes to `main` (after merge).

> If you ever fork this repo under a name **other than** `<username>.github.io`, set `basePath` and `assetPrefix` in [next.config.mjs](next.config.mjs) to `/your-repo-name`.

### Option B — Vercel

1. Import the repo into Vercel.
2. Framework preset: **Next.js**. No env vars needed.
3. Optional: remove `output: 'export'` from [next.config.mjs](next.config.mjs) if you want SSR/ISR features.

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

- [src/data/site.ts](src/data/site.ts) — name, role, email, social links
- [src/data/skills.ts](src/data/skills.ts) — skill groups
- [src/data/experience.ts](src/data/experience.ts) — roles & bullets
- [src/data/projects.ts](src/data/projects.ts) — featured projects
- [src/data/education.ts](src/data/education.ts) — degrees, modules, research
- [src/data/credentials.ts](src/data/credentials.ts) — certifications & awards

Sections live in [src/components/](src/components/) and are composed in [src/app/page.tsx](src/app/page.tsx).

---

## 🖼️ Regenerating the favicon and OG image

Icons in `public/` (`favicon.ico`, `icon-32.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `og-image.png`) are produced from a source portrait by [scripts/generate-icons.mjs](scripts/generate-icons.mjs) using [`sharp`](https://sharp.pixelplumbing.com/).

1. Drop your portrait at `profile/source.jpg` (the file is git-ignored).
2. Run:

   ```bash
   node scripts/generate-icons.mjs profile/source.jpg
   ```

3. Commit the updated files in `public/` via a PR.

---

## 📄 License

[MIT](./LICENSE) — feel free to use as a template, attribution appreciated.
