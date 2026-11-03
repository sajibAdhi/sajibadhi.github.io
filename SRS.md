# Software Requirements Specification

## 1. Introduction

### 1.1 Purpose

This specification describes the implemented behavior and operating requirements of
Sajib Adhikary's personal portfolio website. It is intended for the site owner,
maintainers, and developers working on the portfolio.

### 1.2 Scope

The product is a public, responsive, single-page portfolio. It presents professional
profile information, engineering skills, career history, selected projects, GitHub
activity, and links for contacting the owner or viewing a resume.

The application is a static frontend built with Vue 3, TypeScript, Vite, and Tailwind
CSS v4. It has no application backend, database, authentication, content management
system, or contact-form processing. Portfolio content is maintained in the repository
and deployed as static files.

### 1.3 Intended users

- **Visitor:** Views the portfolio, changes display preferences, and follows contact,
  resume, social, or project links.
- **Maintainer:** Updates portfolio content, translations, settings, assets, and
  deployment configuration.

### 1.4 Definitions

- **CTA:** A call-to-action link or button, such as Links or Resume.
- **Resolved theme:** The light or dark appearance currently applied after resolving
  the visitor's light, dark, or system preference.
- **Brand-assets submodule:** The `public/logos/` Git submodule connected to the public
  `sajibAdhi/logos` repository.

## 2. Product Description

### 2.1 Product perspective

The application mounts a Vue single-page interface from `src/main.ts`. The primary
portfolio UI and its interactions are implemented in `src/App.vue`; styling is in
`src/style.css`. There is no client-side route system: navigation uses in-page anchors.

### 2.2 Product functions

The website provides:

- A branded header and responsive section navigation.
- A profile hero with professional summary, portrait, contact details, and action links.
- A skills toolkit with category filters.
- A scrollable, chapter-based career story.
- Selected project summaries and available project links.
- A GitHub contribution-calendar image and profile link.
- English and Bangla interface/career-story content.
- Light, dark, and system theme preferences.

### 2.3 Operating environment

- Current evergreen desktop and mobile browsers with JavaScript enabled.
- Node.js 22 or newer and npm for local development and production builds.
- Static hosting compatible with the generated Vite `dist/` directory.
- Internet access is needed for externally hosted fonts, Font Awesome, and the GitHub
  contribution-calendar image. The primary portfolio content and assets are local.

### 2.4 Constraints and dependencies

- The application has no backend API or server-side rendering.
- The site depends on Vue 3, Vite, TypeScript, Tailwind CSS v4, and npm-managed packages.
- Theme-specific brand images and the shared SVG icon sprite are supplied by the
  `public/logos/` Git submodule.
- GitHub Actions must initialize submodules before building.
- Theme and language choices are stored in browser `localStorage`; they are not synced
  across devices.

## 3. Functional Requirements

### 3.1 Branding and navigation

- **FR-1:** The header shall display a logo variant matching the resolved theme.
- **FR-2:** The browser favicon shall use the dark-mark variant on a light theme and the
  light-mark variant on a dark theme.
- **FR-3:** The site shall provide desktop navigation to Home, Skills, Experience,
  Projects, and GitHub Activity.
- **FR-4:** The site shall provide a fixed bottom navigation on narrow/mobile layouts
  and a floating section navigation on wide/desktop layouts.
- **FR-5:** Navigation controls shall link to the corresponding in-page section.

### 3.2 Profile and contact

- **FR-6:** The hero shall display the owner's name, professional role, positioning,
  summary, portrait, and primary technologies.
- **FR-7:** The hero shall display Links, Resume, GitHub, and Contact actions. GitHub
  shall open the owner's GitHub profile; Contact shall use the configured email address.
- **FR-8:** The hero shall display the configured location, phone number, and email.
- **FR-9:** The Resume action shall open the PDF at
  `public/resume-of-sajib-adhikary.pdf`.
- **FR-10:** The career-story ending shall provide a contact-by-email action.

### 3.3 Engineering toolkit

- **FR-11:** The Skills section shall show the core technology stack and grouped skills.
- **FR-12:** Visitors shall be able to filter skill groups by All, Backend, Frontend, or
  DevOps.
- **FR-13:** The active toolkit filter shall be exposed through the selected button's
  pressed state.

### 3.4 Career story and selected projects

- **FR-14:** The Experience section shall present the career story as an introduction,
  ordered chapters, engineering highlights, transitions, and closing content.
- **FR-15:** The active career chapter shall update as the visitor scrolls through the
  story when `IntersectionObserver` is supported.
- **FR-16:** The story shall use the selected language's career data.
- **FR-17:** The Projects section shall show project names and localized summaries.
- **FR-18:** A project link shall be shown only when a URL is configured for that project.

### 3.5 GitHub activity

- **FR-19:** The GitHub Activity section shall display the contribution-calendar image
  for the configured GitHub profile.
- **FR-20:** The section shall provide an accessible, horizontally scrollable region for
  the calendar and a link to the GitHub profile.

### 3.6 Language and theme preferences

- **FR-21:** The visitor shall be able to choose English or Bangla.
- **FR-22:** Changing language shall update translated interface copy, career-story
  content, document language, page title, and meta description.
- **FR-23:** The visitor shall be able to choose System, Light, or Dark theme.
- **FR-24:** System theme shall follow the browser/operating-system color preference and
  react to preference changes while selected.
- **FR-25:** The selected language and theme shall be saved in `localStorage` using the
  keys and defaults declared in `src/config/site-features.ts`.
- **FR-26:** If a saved preference is missing or is not supported, the configured
  default shall be used.
- **FR-27:** Language and theme controls shall be operable using native select controls
  and have accessible labels.

### 3.7 Motion and responsive behavior

- **FR-28:** The layout shall adapt to small, medium, and wide viewports without
  requiring horizontal scrolling for the page as a whole.
- **FR-29:** Scroll-reveal and career-story observer behavior shall degrade gracefully
  when `IntersectionObserver` is unavailable.
- **FR-30:** Nonessential animation shall be disabled or reduced when the visitor
  requests reduced motion.

## 4. Data and Asset Requirements

### 4.1 Content sources

- Profile information, project definitions, skills, navigation, and UI logic are
  maintained in `src/App.vue`.
- English and Bangla UI strings are maintained in `src/data/translations.ts`.
- Career-story content is maintained in `src/data/career-story.json` and
  `src/data/career-story.bn.json`.
- Theme/language defaults, options, enabled flags, storage keys, and theme colors are
  maintained in `src/config/site-features.ts`.

### 4.2 Static assets

- The resume PDF and portrait are stored in `public/`.
- Logos, theme-specific favicon/icon variants, and the shared icon sprite are
  stored in the `public/logos/` submodule.
- Standard logo/icon assets use the `-original` suffix, for example
  `icon-32-original.png` and `logo-horizontal-original.png`. Themed filenames use
  `-dark` or `-light` suffixes after the type and size, for example `icon-32-dark.png`,
  `icon-32-light.png`, `favicon-dark.ico`, and `favicon-light.ico`.
- A fresh checkout shall initialize submodules with
  `git clone --recurse-submodules`; an existing checkout shall use
  `git submodule update --init --recursive`.

## 5. Non-Functional Requirements

### 5.1 Performance

- **NFR-1:** Core portfolio content shall be available from the generated static site
  without a backend request.
- **NFR-2:** The GitHub contribution image shall be lazy-loaded.
- **NFR-3:** Production files shall be generated in `dist/` and be suitable for static
  hosting.

### 5.2 Accessibility and usability

- **NFR-4:** Interactive controls and links shall use semantic HTML and accessible names.
- **NFR-5:** Keyboard users shall be able to focus and operate navigation, preference
  controls, filters, and links.
- **NFR-6:** Images that convey content shall provide suitable alternative text;
  decorative icons shall be hidden from assistive technology where appropriate.
- **NFR-7:** The interface shall remain readable and usable across supported viewport
  sizes and both resolved themes.
- **NFR-8:** Motion shall respect `prefers-reduced-motion`.

### 5.3 Maintainability

- **NFR-9:** Source code, static content, feature configuration, and deployment
  workflows shall remain version-controlled.
- **NFR-10:** Brand assets shall be managed in the dedicated logos repository and
  consumed through the submodule rather than duplicated in the portfolio repository.
- **NFR-11:** Developer setup, asset-submodule setup, and deployment configuration
  shall be documented in `README.md`.

### 5.4 Compatibility and resilience

- **NFR-12:** The site shall work in current evergreen browsers with JavaScript enabled.
- **NFR-13:** If external fonts or the GitHub contribution service are unavailable, the
  locally rendered portfolio content shall remain available.
- **NFR-14:** If browser storage is unavailable, the site shall still use configured
  defaults for language and theme.

## 6. External Interface Requirements

### 6.1 User interface

The single-page interface shall include:

1. Header with theme-appropriate logo and language/theme controls.
2. Hero with profile, professional summary, contact details, and action links.
3. Filterable Engineering Toolkit.
4. Chapter-based Engineering Experience.
5. Selected Engineering Work.
6. GitHub Activity.
7. Footer attribution.

### 6.2 External services and links

- Email actions use `mailto:`.
- Resume is served as a local PDF.
- GitHub contribution activity is loaded from `ghchart.rshah.org`.
- Google Fonts and Font Awesome are loaded from their configured external CDNs.
- GitHub profile, Linktree, LinkedIn, and configured project destinations are outbound
  links.

## 7. Build, Deployment, and Acceptance

### 7.1 Build

- **BD-1:** `npm ci` shall install the locked dependencies.
- **BD-2:** `npm run build` shall run Vue/TypeScript project checks and generate the
  production site in `dist/`.
- **BD-3:** A build from a clean checkout shall include the initialized logos submodule
  assets.

### 7.2 Deployment

- **BD-4:** `.github/workflows/deploy.yml` shall build and deploy pushes to `dev` to
  GitHub Pages.
- **BD-5:** The `github-pages` GitHub environment shall permit the `dev` branch under
  its deployment protection rules.
- **BD-6:** `.github/workflows/deploy-sajib.adovasoft.com.yml` shall build and upload
  pushes to `main` to the configured cPanel FTP document root.
- **BD-7:** Both deployment workflows shall check out submodules before building.
- **BD-8:** cPanel deployment shall use the configured `FTP_SERVER`, `FTP_USERNAME`,
  and `FTP_PASSWORD` GitHub Actions secrets.

### 7.3 Acceptance checks

The implementation is acceptable when:

- `npm run build` completes successfully.
- A clean checkout with submodules initialized produces a build containing the logo,
  favicon, and icon-sprite assets.
- The main page displays the profile, toolkit, career story, project list, GitHub
  activity, and footer.
- Language changes update visible English/Bangla content and persist after reload.
- Light, dark, and system theme changes update page styling, logo, and favicon and
  persist after reload.
- Hero links point to the configured Linktree, resume, GitHub, and email destinations.
- Desktop and mobile navigation link to the correct page sections.
- Reduced-motion preferences do not leave content hidden.

The current package scripts expose `dev`, `build`, and `preview`. No `npm test` script
is currently defined; automated test coverage is not a deployment acceptance gate.

## 8. Out of Scope

- Backend APIs, database storage, user accounts, and authentication.
- A CMS or browser-based content editor.
- Server-side rendering.
- A contact form or server-side email delivery.
- Synchronizing preferences across devices.
- Guaranteed availability of external fonts, icons, or contribution-calendar services.
