# Sajib Adhikary Portfolio

Personal portfolio site built with Vue 3, Vite, TypeScript, and Tailwind CSS v4. The site presents professional summary, experience, projects, education, open source activity, and links to contact and resume assets.

## Stack

- Vue 3
- Vite
- TypeScript
- Tailwind CSS v4
- Vitest
- Vue Test Utils

## Features

- Responsive portfolio layout for desktop and mobile
- Custom cyber/dev themed branding and favicon
- Local resume PDF served from `public/`
- Hero CTA actions for `Links`, `CV`, and `Contact`
- GitHub Pages deployment via GitHub Actions
- Basic component smoke tests

## Project Structure

```text
.
|-- .github/workflows/deploy.yml
|-- public/
|   |-- favicon.svg
|   |-- logo.svg
|   `-- resume-of-sajib-adhikary.pdf
|-- src/
|   |-- App.vue
|   |-- App.test.ts
|   |-- main.ts
|   `-- style.css
|-- package.json
`-- vitest.config.ts
```

## Getting Started

Requirements:

- Node.js 22 or newer
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Testing

Run tests once:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Current tests cover:

- App render smoke check
- Presence of primary CTA actions
- Local resume link wiring

## Resume Asset

The `CV` button points to a local PDF:

```text
public/resume-of-sajib-adhikary.pdf
```

If you replace the resume file, keep the same filename or update `resumeUrl` in `src/App.vue`.

## Deployment

Deployment is handled by GitHub Actions in `.github/workflows/deploy.yml`.

On every push to `main`, the workflow:

1. Installs dependencies with `npm ci`
2. Runs tests with `npm test`
3. Builds the site with `npm run build`
4. Deploys `dist/` to GitHub Pages

## Customization

Main content lives in `src/App.vue`, including:

- personal summary
- experience
- education
- projects
- certifications
- volunteering
- references
- external links

Theme styling and reusable visual tokens live in `src/style.css`.

## License

This project is for personal portfolio use.
