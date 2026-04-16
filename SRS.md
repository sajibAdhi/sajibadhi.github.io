# Software Requirements Specification

## 1. Introduction

### 1.1 Purpose

This document defines the software requirements for the personal portfolio website of Sajib Adhikary. The system is intended to present professional information, highlight projects and experience, and provide contact and resume access through a responsive web interface.

### 1.2 Scope

The application is a static frontend portfolio built with Vue 3, Vite, TypeScript, and Tailwind CSS. It is deployed to GitHub Pages. The system does not include a backend, database, authentication flow, or content management panel. All content is currently maintained in source code and static assets.

### 1.3 Intended Audience

- Project owner
- Maintainers and contributors
- Developers extending the portfolio
- Reviewers validating scope and behavior

### 1.4 Definitions

- `CTA`: Call to action button such as `Links`, `CV`, or `Contact`
- `Portfolio`: The public-facing personal website
- `Static asset`: File served directly from `public/`, such as logo or resume PDF

## 2. Overall Description

### 2.1 Product Perspective

The system is a standalone single-page application. It is structured as a static site with a single main Vue component and supporting assets. Deployment is automated using GitHub Actions and GitHub Pages.

### 2.2 Product Functions

The system shall:

- Display personal profile and professional summary
- Display experience, education, skills, projects, achievements, and references
- Provide navigation to page sections
- Provide outbound links to social and professional resources
- Provide access to a locally hosted resume PDF
- Present a responsive layout optimized for desktop and mobile devices
- Use themed branding assets consistent with the site design

### 2.3 User Classes

- `Visitor`: Any person viewing the public portfolio site
- `Maintainer`: A developer or owner updating content, styling, assets, or deployment configuration

### 2.4 Operating Environment

- Modern desktop and mobile browsers
- Static hosting via GitHub Pages
- Development environment with Node.js 22+ and npm

### 2.5 Constraints

- No backend services
- No server-side rendering
- All content is source-controlled
- Deployment target is GitHub Pages
- Build and test flow must run in GitHub Actions

### 2.6 Assumptions and Dependencies

- Users have internet access to load external resources such as Google Fonts and Font Awesome CDN
- Static assets placed in `public/` are available at runtime
- The portfolio content remains maintained directly inside `src/App.vue` unless future refactoring changes content storage

## 3. Functional Requirements

### 3.1 Header and Branding

- `FR-1`: The system shall display a branded header containing the logo and site name.
- `FR-2`: The system shall display a `Contact` CTA in the header.
- `FR-3`: The header layout shall adapt to mobile view without overlap between branding and action controls.

### 3.2 Navigation

- `FR-4`: The system shall provide desktop section navigation through a floating right sidebar.
- `FR-5`: The system shall provide mobile section navigation through a fixed bottom navigation bar.
- `FR-6`: Navigation items shall link to in-page anchors for major sections.

### 3.3 Hero Section

- `FR-7`: The system shall display the portfolio owner name, headline, and summary in the hero section.
- `FR-8`: The system shall provide hero CTA buttons for `Links` and `CV`.
- `FR-9`: The `CV` CTA shall link to a local resume file hosted from `public/`.
- `FR-10`: The hero section shall display location, phone, and email summary items.

### 3.4 Portfolio Content

- `FR-11`: The system shall display categorized skills.
- `FR-12`: The system shall display work experience entries.
- `FR-13`: The system shall display project entries with external links where available.
- `FR-14`: The system shall display education and achievements.
- `FR-15`: The system shall display open source/community involvement and references.

### 3.5 Assets

- `FR-16`: The system shall use a custom logo asset in the site header.
- `FR-17`: The system shall use a favicon asset for browser tabs.
- `FR-18`: The resume asset shall be replaceable by updating the PDF in `public/` or adjusting the local asset path in code.

### 3.6 Testing and CI

- `FR-19`: The project shall include automated tests for basic rendering and critical links.
- `FR-20`: The GitHub Actions workflow shall run tests before building and deploying.

## 4. Non-Functional Requirements

### 4.1 Performance

- `NFR-1`: The portfolio shall load as a static site without requiring backend requests for core content.
- `NFR-2`: The build output shall be suitable for static hosting.

### 4.2 Usability

- `NFR-3`: The interface shall be readable and navigable on both mobile and desktop.
- `NFR-4`: Primary actions shall be visually consistent with the site theme.
- `NFR-5`: Contact and resume actions shall be easy to discover in the first viewport.

### 4.3 Maintainability

- `NFR-6`: Content and presentation shall remain easy to modify through source files.
- `NFR-7`: Project setup, testing, and deployment steps shall be documented in `README.md`.

### 4.4 Reliability

- `NFR-8`: Deployment shall be blocked when automated tests fail.

### 4.5 Compatibility

- `NFR-9`: The site shall function in current evergreen browsers.

## 5. External Interface Requirements

### 5.1 User Interface

The user interface shall include:

- Header with logo, title, and contact action
- Hero section with profile image, summary, and CTA buttons
- Skills, experience, projects, education, achievements, community, and references sections
- Desktop floating navigation
- Mobile bottom navigation
- Footer with portfolio attribution

### 5.2 Software Interfaces

- Vue 3 runtime
- Vite build tool
- Tailwind CSS styling
- Vitest and Vue Test Utils for testing
- GitHub Actions for CI
- GitHub Pages for hosting

### 5.3 Communication Interfaces

- Email via `mailto:` link
- External links to GitHub, LinkedIn, Linktree, and project URLs

## 6. Data Requirements

The system currently stores portfolio content directly in `src/App.vue` as structured frontend data, including:

- basic profile data
- social links
- summary
- experience
- education
- skills
- projects
- certifications
- awards
- volunteering
- languages
- references

Static assets are stored in `public/`, including:

- `logo.svg`
- `favicon.svg`
- `resume-of-sajib-adhikary.pdf`

## 7. Validation Criteria

The system shall be considered acceptable when:

- the site builds successfully with `npm run build`
- tests pass with `npm test`
- the deploy workflow runs tests before deployment
- the portfolio renders core content correctly
- the `CV` button opens the local resume asset
- the header remains usable on mobile

## 8. Future Considerations

Possible future enhancements:

- move portfolio content into structured JSON or CMS-managed data
- add downloadable vCard or direct social CTA grouping
- add accessibility review and explicit WCAG targets
- add analytics or contact form integration
- add richer test coverage for navigation and responsive behavior
