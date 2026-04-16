# AI-Generated Portfolio: The Process

This portfolio was autonomously generated and refined through an interactive session with **Gemini CLI**, an advanced AI engineering agent. The entire lifecycle—from raw data to a fully automated IDE-themed web application—was handled via natural language directives.

## 🧠 The AI Workflow

### 1. Data Ingestion
The process began with a raw JSON resume (`resume-of-sajib-adhikary.json`). The AI parsed this data to extract:
- **Core Basics:** Name, Headline, and Social Links.
- **Experience Timeline:** Detailed roles at Ambala IT, Ranks ITT, and Adova Soft.
- **Project Catalog:** ERP, Banking, and Invoicing systems.
- **Technical Stack:** A comprehensive list of languages, frameworks, and tools.

### 2. Prototype Generation (Vue + Tailwind)
The AI scaffolded a modern **Vue 3** project using **Vite** and **TypeScript**. 
- **Styling:** Integrated **Tailwind CSS v4** for a utility-first, performant design.
- **Components:** Built a reactive `App.vue` that maps the JSON data into interactive UI elements.

### 3. Iterative Theming
The design evolved through three major phases directed by the user:
- **Initial Phase:** A professional, responsive Slate/Indigo light theme.
- **Second Phase:** A "Hacktoberfest" inspired Terminal/Shell interface.
- **Final Phase:** A high-fidelity **IDE (VS Code)** theme, specifically designed to "define technical skills" by organizing the profile as a development workspace.

### 4. Technical Refinement & Automation
The AI performed complex engineering tasks to ensure production readiness:
- **Dependency Management:** Resolved version conflicts between Tailwind v4 and PostCSS.
- **CI/CD Configuration:** Wrote a custom **GitHub Actions** workflow (`deploy.yml`) for zero-touch deployment to GitHub Pages.
- **Optimization:** Configured Vite's `base` path and TypeScript module resolution for correct asset loading on production.

## 🛠 Tools Used by the AI
- **Vite:** For ultra-fast development and optimized production builds.
- **npm:** For robust dependency management.
- **PostCSS:** For cross-browser styling compatibility.
- **GitHub Actions:** For automated build and deployment pipelines.

## 🏁 Result
A unique, developer-centric portfolio that not only presents Sajib's career but also reflects his technical identity through its very interface.
