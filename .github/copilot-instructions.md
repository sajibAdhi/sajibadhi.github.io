# Copilot Instructions for AI Agents

## Project Overview

This is a personal portfolio site for Sajib Adhikary, built as a static single-page application using **Vue 3**, **Vite**, **TypeScript**, and **Tailwind CSS v4**. The site is deployed to GitHub Pages via GitHub Actions. All content is maintained in source files—there is no backend or CMS.

## Architecture & Structure

- **Main Entry:** `src/App.vue` contains nearly all portfolio content as structured data and UI logic. Update this file for changes to summary, experience, projects, education, etc.
- **Styling:** Custom theme tokens and utility classes are defined in `src/style.css` and extended in `tailwind.config.js`.
- **Assets:** Static files (logo, favicon, resume PDF) are in `public/`. The resume link in the UI points to `public/resume-of-sajib-adhikary.pdf`.
- **Navigation:** Desktop uses a floating right sidebar; mobile uses a fixed bottom nav. Both are implemented in `App.vue`.
- **No Backend:** All data is static and local. There are no API calls, authentication, or dynamic content loading.

## Developer Workflows

- **Install:** `npm install` (Node.js 22+ required)
- **Dev Server:** `npm run dev` (hot reload via Vite)
- **Build:** `npm run build` (outputs to `dist/`)
- **Preview:** `npm run preview` (serves production build locally)
- **Test:** `npm test` (runs Vitest)
- **Deploy:** On push to `main`, `.github/workflows/deploy.yml` runs CI, builds, and deploys to GitHub Pages.

## Project Conventions

- **Content Location:** All portfolio data is hardcoded in `src/App.vue` as a JS object. To update content, edit this object directly.
- **Resume Asset:** If replacing the resume, keep the filename or update the `resumeUrl` in `App.vue`.
- **Styling:** Use Tailwind utility classes and custom CSS variables. Avoid inline styles.
- **Testing:** Tests (if present) are in `src/` and use Vitest + Vue Test Utils. CI blocks deploys on test failure.
- **Accessibility:** The layout is responsive and keyboard-accessible, but there is no explicit a11y test coverage.

## Integration Points

- **External Links:** Social, project, and contact links are hardcoded in `App.vue`.
- **Fonts & Icons:** Google Fonts and Font Awesome are loaded via CDN in `index.html`.
- **CI/CD:** See `.github/workflows/deploy.yml` for the build and deploy pipeline.

## Examples

- **Update Experience:** Edit the `experience` array in `src/App.vue`.
- **Change Theme:** Adjust colors in `tailwind.config.js` and `src/style.css`.
- **Add a Project:** Add to the `projects` array in `src/App.vue`.

## Key Files

- `src/App.vue` — main content and UI logic
- `src/style.css` — theme and custom styles
- `tailwind.config.js` — Tailwind config and color tokens
- `public/` — static assets (logo, favicon, resume)
- `.github/workflows/deploy.yml` — CI/CD pipeline
- `README.md` — developer setup and workflow docs

---

For major changes, update both `src/App.vue` and related config or asset files. See `README.md` for setup and workflow details. For deployment, ensure all tests pass and the build succeeds.
