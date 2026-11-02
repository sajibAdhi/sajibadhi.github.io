<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import careerStory from './data/career-story.json'

const resumeData = {
  basics: {
    name: "Sajib Adhikary",
    headline: "Software Engineer",
    email: "tosajibadhi@gmail.com",
    phone: "+8801400593322",
    location: "Shere Bangla Nagar, Agargaon, Dhaka",
    website: "https://hishabkitab.com/",
    profilePic: "/sajib-adhikary.jpg",
    resumeUrl: "/resume-of-sajib-adhikary.pdf",
    linktreeUrl: "https://linktr.ee/sajibAdhi",
    socials: [
      { name: 'GitHub', url: 'https://github.com/sajibAdhi', icon: 'fab fa-github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sajibadhi/', icon: 'fab fa-linkedin' }
    ]
  },
  summary: "Software Engineer with 6+ years of experience building scalable ERP, accounting, and microfinance systems using Laravel and CodeIgniter. Specializes in backend architecture, database design, and performance optimization for applications serving hundreds of users. Mentors 4 junior engineers, leads code reviews for a 5-person team, and promotes two-way knowledge-sharing to raise code quality and architectural standards.",
  education: [
    { school: "Sonargaon University", degree: "B.Sc in CSE", period: "2019 - 2023", result: "CGPA 3.19" },
    { school: "Bcic College", degree: "HSC Science", period: "2017 - 2018", result: "GPA 3.42" },
    { school: "Govt. Boys High School", degree: "SSC Science", period: "2014 - 2016", result: "GPA 4.72" }
  ],
  skills: [
    { category: 'Languages', items: ['PHP', 'JavaScript'] },
    { category: 'Frameworks', items: ['Laravel', 'CodeIgniter', 'jQuery'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'Tailwind', 'Bootstrap'] },
    { category: 'Database', items: ['MySQL', 'MariaDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Composer', 'Npm', 'Pest'] },
    { category: 'Cloud/DevOps', items: ['VPS', 'Linux', 'Hosting'] },
    { category: 'Concepts', items: ['MVC Architecture', 'REST APIs', 'Database Optimization', 'Authentication & Authorization'] },
    { category: 'Engineering', items: ['System Design', 'API Design', 'Performance Profiling', 'Caching & Queues', 'Code Review & Mentoring'] }
  ],
  projects: [
    { name: "Mobile EMI", desc: "Automated device lock/unlock and installment workflows serving 60,000+ customers and 300,000+ transactions. Optimized reporting from 4 minutes to 30 seconds.", link: "" },
    { name: "Shikkha Plus", desc: "Educational institute management system serving 3,000+ active users, with admissions, fees, attendance, exams, and results management.", link: "https://shikkhaplus.com/" },
    { name: "HishabKitab (ERP)", desc: "Accounting, inventory, and loan management across 15+ modules, including ledgers, balance sheets, and transaction logging.", link: "https://hishabkitab.com/" },
    { name: "E-Recruitment", desc: "Recruitment platform with applicant, admin, and verifier panels, dynamic job forms, and role-based access control.", link: "" },
    { name: "ZindaPark Banking", desc: "Online banking with year-end closing, interest calculations, low-bandwidth performance, and queue-based task scheduling.", link: "" }
  ],
  certifications: ["Python for Everybody (Coursera)", "Web App. for Everybody (Coursera)"],
  awards: [{ title: "Project Showcasing - 2nd Runner-up", provider: "Sonargaon University", desc: "Project Thesis Manager cloud system." }],
  volunteering: ["Maintainer – OpenTelemetry.io (Bangla)", "Contributor – CNCF Glossary (Bangla)", "Contributor – Kubernetes (Bangla)"],
  languages: ["English (Professional)", "Bangla (Native)"],
  references: [
    { name: "Bulbul Ahamed", pos: "Dept. Head, CSE, SU" },
    { name: "Subrata Mondol", pos: "MD, Adova Soft" }
  ]
}

const navItems = [
  { label: 'Home', icon: 'fas fa-home', link: '#home' },
  { label: 'Skills', icon: 'fas fa-layer-group', link: '#skills' },
  { label: 'Experience', icon: 'fas fa-history', link: '#exp' },
  { label: 'Projects', icon: 'fas fa-code-branch', link: '#projects' },
  { label: 'Education', icon: 'fas fa-graduation-cap', link: '#edu' },
  { label: 'Community', icon: 'fas fa-users', link: '#oss' }
]

const engineeringImpact = [
  { value: '60K+', label: 'customers served' },
  { value: '300K+', label: 'installments processed' },
  { value: '4m → 30s', label: 'report time optimized' }
]

const resumeRoot = ref<HTMLElement | null>(null)
const activeStoryIndex = ref(0)
let revealObserver: IntersectionObserver | undefined
let storyObserver: IntersectionObserver | undefined

onMounted(() => {
  const root = resumeRoot.value
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false

  if (!root || !('IntersectionObserver' in window)) {
    return
  }

  if (!reduceMotion) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -48px 0px', threshold: 0 })
    root.querySelectorAll('.resume-reveal').forEach((element) => revealObserver?.observe(element))
    root.classList.add('resume-motion-ready')
  }

  storyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeStoryIndex.value = Number((entry.target as HTMLElement).dataset.storyIndex)
      }
    })
  }, { rootMargin: '-35% 0px -45% 0px', threshold: 0 })
  root.querySelectorAll('.novel__page[data-story-index]').forEach((page) => storyObserver?.observe(page))
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  storyObserver?.disconnect()
})
</script>

<template>
  <div ref="resumeRoot" class="min-h-screen hf-grid-bg flex flex-col items-center selection:bg-hf-pink selection:text-white relative scroll-smooth pb-20 lg:pb-0">
    
    <!-- Floating Right Sidebar Navigation (Desktop) -->
    <nav class="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4">
      <div v-for="item in navItems" :key="item.label" class="group relative flex items-center justify-end">
        <!-- Tooltip -->
        <span class="absolute right-14 px-3 py-1 bg-hf-card border border-hf-border text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {{ item.label }}
        </span>
        <!-- Floating Button -->
        <a :href="item.link" class="w-12 h-12 flex items-center justify-center bg-hf-card border border-hf-border rounded-xl text-slate-400 hover:text-hf-pink hover:border-hf-pink transition-all hf-glow group-hover:scale-110">
          <i :class="item.icon" class="text-sm"></i>
        </a>
      </div>
    </nav>

    <!-- Mobile Bottom Navigation -->
    <nav class="mobile-bottom-nav fixed bottom-4 left-4 right-4 z-[100] lg:hidden">
      <div class="mobile-bottom-nav__links bg-hf-card/80 backdrop-blur-lg border border-hf-border rounded-2xl flex items-center justify-around p-2 shadow-2xl">
        <a v-for="item in navItems" :key="item.label" :href="item.link" :aria-label="item.label" class="mobile-bottom-nav__link flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-hf-pink transition-colors">
          <i :class="item.icon" class="text-lg"></i>
          <span class="mobile-bottom-nav__label text-[8px] font-bold uppercase tracking-tighter">{{ item.label }}</span>
        </a>
      </div>
    </nav>

    <!-- Top Nav (Minimalist) -->
    <header id="home" class="w-full max-w-6xl px-4 sm:px-6 py-4 sm:py-6 flex flex-row justify-between items-center gap-3 z-50">
      <div class="flex items-center gap-3 group cursor-pointer min-w-0">
        <img src="/logo.svg" alt="Sajib Logo" class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl shadow-2xl transition-transform group-hover:scale-110 duration-500 shrink-0">
        <div class="font-mono text-base sm:text-xl font-black flex items-center gap-1 sm:gap-1.5 tracking-tight sm:tracking-tighter min-w-0">
          <span class="text-hf-pink opacity-80">&lt;</span>
          <span class="text-white truncate">SAJIB.DEV</span>
          <span class="text-hf-pink opacity-80">/&gt;</span>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start sm:justify-end gap-3 w-full sm:w-auto">
        <a :href="resumeData.basics.socials[0].url" target="_blank" class="w-10 h-10 hidden sm:flex items-center justify-center rounded-lg bg-slate-900 border border-hf-border hover:border-hf-pink transition" title="GitHub"><i class="fab fa-github"></i></a>
        <a :href="'mailto:' + resumeData.basics.email" class="hf-cta hf-cta--ghost">
          <i class="fas fa-envelope text-[11px]"></i>
          <span>Contact</span>
        </a>
      </div>
    </header>

    <main class="w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-8 lg:py-12 space-y-12 sm:space-y-16 lg:space-y-24">
      
      <!-- Hero -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="resume-hero-copy lg:col-span-7 space-y-6 text-center lg:text-left">
          <p class="engineer-eyebrow"><span></span> BACKEND · ERP · FINANCIAL SYSTEMS</p>
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
            {{ resumeData.basics.name }}<br/>
            <span class="hf-gradient-text text-2xl sm:text-3xl lg:text-5xl block mt-4">Software Engineer</span>
          </h1>
          <p class="engineer-positioning">I build dependable software for real-world businesses.</p>
          <p class="text-base lg:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            {{ resumeData.summary }}
          </p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-3">
            <a :href="resumeData.basics.linktreeUrl" target="_blank" class="hf-cta hf-cta--accent">
              <i class="fas fa-link text-[11px]"></i>
              <span>Links</span>
            </a>
            <a :href="resumeData.basics.resumeUrl" target="_blank" class="hf-cta hf-cta--primary">
              <i class="fas fa-file-lines text-[11px]"></i>
              <span>CV</span>
            </a>
          </div>
          <div class="flex flex-wrap justify-center lg:justify-start gap-3 text-[10px] font-mono">
            <div class="flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
              <i class="fas fa-map-marker-alt text-hf-pink"></i> {{ resumeData.basics.location }}
            </div>
            <div class="flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
              <i class="fas fa-phone text-hf-green"></i> {{ resumeData.basics.phone }}
            </div>
            <div class="flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
              <i class="fas fa-envelope text-hf-cyan"></i> {{ resumeData.basics.email }}
            </div>
          </div>
        </div>
        <div class="resume-portrait lg:col-span-5 flex justify-center order-first lg:order-last">
          <div class="relative group">
            <div class="absolute -inset-4 bg-hf-cyan opacity-10 blur-2xl group-hover:opacity-20 transition animate-pulse"></div>
            <img :src="resumeData.basics.profilePic" alt="Portrait of Sajib Adhikary" class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl object-cover relative z-10 border-2 border-hf-border grayscale hover:grayscale-0 transition-all duration-700">
            <div class="engineer-stack" aria-label="Primary engineering technologies">
              <span v-for="technology in ['PHP', 'Laravel', 'MySQL', 'Docker']" :key="technology">{{ technology }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="engineering-impact" aria-label="Engineering impact">
        <div v-for="metric in engineeringImpact" :key="metric.label" class="engineering-impact__metric">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </div>
      </section>

      <!-- Engineering toolkit -->
      <section id="skills" class="resume-reveal">
        <div class="hf-section-header">
           <h2 class="text-xl lg:text-2xl font-bold text-white flex items-center gap-3">
             <i class="fas fa-screwdriver-wrench text-hf-cyan"></i> Engineering Toolkit
           </h2>
           <div class="hf-line"></div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
           <div v-for="skill in resumeData.skills" :key="skill.category" class="hf-card resume-card p-4 hover:bg-hf-pink/5 group">
             <h3 class="text-[9px] font-bold text-hf-pink uppercase mb-3">{{ skill.category }}</h3>
             <div class="space-y-1">
               <div v-for="item in skill.items" :key="item" class="text-xs text-slate-400 group-hover:text-white transition">{{ item }}</div>
             </div>
           </div>
        </div>
      </section>

      <!-- Career story -->
      <section
        id="exp"
        class="career-story"
        :style="{ '--story-progress': `${((activeStoryIndex + 1) / (careerStory.chapters.length + 1)) * 100}%` }"
      >
        <div class="hf-section-header">
          <h2 class="text-xl lg:text-2xl font-bold text-white flex items-center gap-3">
            <i class="fas fa-code-branch text-hf-cyan"></i> Engineering Experience
          </h2>
          <div class="hf-line from-hf-cyan/50"></div>
        </div>
        <div class="novel">
          <div class="novel__masthead">
            <span><i class="fas fa-code" aria-hidden="true"></i> CAREER / ENGINEERING.LOG</span>
            <span>NOW READING · {{ String(activeStoryIndex + 1).padStart(2, '0') }} / {{ String(careerStory.chapters.length + 1).padStart(2, '0') }}</span>
          </div>
          <div class="novel__progress" aria-hidden="true">
            <span></span>
          </div>
          <div class="novel__book novel__pages">
              <header class="novel__opening">
                <span class="novel__opening-kicker"><i class="fas fa-terminal" aria-hidden="true"></i> ENGINEERING / IN PRACTICE</span>
                <h3>From solving real problems<br>to building systems at scale.</h3>
                <p>{{ careerStory.introduction }}</p>
                <span class="novel__opening-scroll"><i class="fas fa-arrow-down" aria-hidden="true"></i> Scroll to begin</span>
              </header>
              <article
                v-for="(chapter, index) in careerStory.chapters"
                :id="`story-chapter-${index}`"
                :key="chapter.period"
                :data-story-index="index"
                class="novel__page"
                :class="{ 'is-active': activeStoryIndex === index }"
              >
                <div class="novel__scene" aria-hidden="true">
                  <span class="novel__scene-grid"></span>
                  <span class="novel__scene-number">{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="novel__scene-copy">
                    <span>{{ chapter.scene.label }}</span>
                    <span>{{ chapter.scene.caption }}</span>
                  </span>
                  <span class="novel__architecture">
                    <span v-for="(step, stepIndex) in chapter.scene.steps" :key="step" class="novel__architecture-node">
                      <i :class="['fas', stepIndex === 0 ? 'fa-diagram-project' : stepIndex === 1 ? 'fa-gears' : 'fa-database']"></i>
                      {{ step }}
                    </span>
                  </span>
                  <span class="novel__scene-scan"></span>
                </div>
                <div class="novel__page-heading">
                  <p class="novel__chapter-label">CHAPTER {{ String(index + 1).padStart(2, '0') }}</p>
                  <p class="novel__period">{{ chapter.period }}</p>
                </div>
                <p class="novel__byline">
                  {{ chapter.company }}
                  <span>·</span>
                  {{ chapter.role }}
                </p>
                <h3 class="novel__title">{{ chapter.title }}</h3>
                <p class="novel__narrative">{{ chapter.story }}</p>
                <div class="novel__details">
                  <p class="novel__section-label">ENGINEERING WORK & IMPACT</p>
                  <ul class="novel__highlights">
                    <li v-for="highlight in chapter.highlights" :key="highlight">
                      <i class="fas fa-arrow-right" aria-hidden="true"></i>
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>
                </div>
                <aside v-if="chapter.transitionToNext" class="novel__carry">
                  <p class="novel__section-label"><i class="fas fa-bookmark" aria-hidden="true"></i> WHAT I CARRIED FORWARD</p>
                  <h4>{{ chapter.transitionToNext.title }}</h4>
                  <p>{{ chapter.transitionToNext.story }}</p>
                  <ul class="novel__skills">
                    <li v-for="skill in chapter.transitionToNext.skills" :key="skill">
                      {{ skill }}
                    </li>
                  </ul>
                </aside>
              </article>
              <article
                :data-story-index="careerStory.chapters.length"
                class="novel__page novel__page--epilogue"
                :class="{ 'is-active': activeStoryIndex === careerStory.chapters.length }"
              >
                <div class="novel__scene" aria-hidden="true">
                  <span class="novel__scene-grid"></span>
                  <span class="novel__scene-number"><i class="fas fa-feather-pointed"></i></span>
                  <span class="novel__scene-copy">
                    <span>{{ careerStory.epilogueScene.label }}</span>
                    <span>{{ careerStory.epilogueScene.caption }}</span>
                  </span>
                  <span class="novel__architecture">
                    <span v-for="(step, stepIndex) in careerStory.epilogueScene.steps" :key="step" class="novel__architecture-node">
                      <i :class="['fas', stepIndex === 0 ? 'fa-diagram-project' : stepIndex === 1 ? 'fa-gears' : 'fa-database']"></i>
                      {{ step }}
                    </span>
                  </span>
                  <span class="novel__scene-scan"></span>
                </div>
                <p class="novel__chapter-label">EPILOGUE · THE STORY CONTINUES</p>
                <h3 class="novel__title">{{ careerStory.closing.title }}</h3>
                <p class="novel__narrative">{{ careerStory.closing.story }}</p>
                <a :href="'mailto:' + resumeData.basics.email" class="career-story__contact">
                  {{ careerStory.closing.callToAction }}
                  <i class="fas fa-arrow-right" aria-hidden="true"></i>
                </a>
              </article>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="resume-reveal">
        <div class="hf-section-header">
          <h2 class="text-xl lg:text-2xl font-bold text-white flex items-center gap-3">
            <i class="fas fa-cubes text-hf-cyan"></i> Selected Engineering Work
          </h2>
          <div class="hf-line from-hf-green/50"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="proj in resumeData.projects" :key="proj.name" class="hf-card resume-card resume-reveal p-6 lg:p-8 border-l-4 border-l-hf-indigo hover:border-l-hf-pink transition-all">
            <h3 class="text-lg lg:text-xl font-bold text-white mb-2">{{ proj.name }}</h3>
            <p class="text-sm text-slate-500 mb-6">{{ proj.desc }}</p>
            <a v-if="proj.link" :href="proj.link" target="_blank" class="text-[10px] font-bold text-hf-indigo uppercase tracking-[0.2em] hover:text-hf-pink transition">
              Establish Connection <i class="fas fa-external-link-alt ml-1"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- Education & Awards -->
      <section id="edu" class="resume-reveal grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
           <div class="hf-section-header mb-8">
             <h2 class="text-lg lg:text-xl font-bold text-white">Academic Path</h2>
             <div class="hf-line from-hf-indigo/50"></div>
           </div>
           <div class="space-y-4">
             <div v-for="edu in resumeData.education" :key="edu.school" class="resume-card resume-reveal p-4 lg:p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
               <div class="flex justify-between items-baseline mb-2">
                 <h4 class="font-bold text-white text-sm lg:text-base">{{ edu.degree }}</h4>
                 <span class="text-[10px] text-hf-pink font-mono">{{ edu.period }}</span>
               </div>
               <p class="text-xs text-slate-500 mb-1">{{ edu.school }}</p>
               <span class="text-[10px] font-bold text-hf-green">{{ edu.result }}</span>
             </div>
           </div>
        </div>
        <div>
           <div class="hf-section-header mb-8">
             <h2 class="text-lg lg:text-xl font-bold text-white">Achievements</h2>
             <div class="hf-line from-hf-green/50"></div>
           </div>
           <div class="space-y-6">
              <div v-for="award in resumeData.awards" :key="award.title" class="hf-card resume-card resume-reveal p-6 border-hf-green/20">
                <i class="fas fa-trophy text-hf-green mb-4 block"></i>
                <h4 class="font-bold text-white mb-2 text-sm lg:text-base">{{ award.title }}</h4>
                <p class="text-xs text-slate-500">{{ award.desc }}</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-for="cert in resumeData.certifications" :key="cert" class="resume-card resume-reveal p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-[10px] text-slate-400">
                  <i class="fas fa-certificate text-hf-indigo mr-2"></i> {{ cert }}
                </div>
              </div>
           </div>
        </div>
      </section>

      <!-- Extras & References -->
      <section id="oss" class="resume-reveal grid grid-cols-1 md:grid-cols-3 gap-12">
         <div class="md:col-span-2">
            <div class="hf-section-header mb-8">
              <h2 class="text-lg lg:text-xl font-bold text-white">Open Source Ecosystem</h2>
              <div class="hf-line"></div>
            </div>
            <div class="flex flex-wrap gap-4">
              <div v-for="vol in resumeData.volunteering" :key="vol" class="resume-card resume-reveal px-6 py-4 bg-hf-indigo/5 border border-hf-indigo/20 rounded-2xl flex flex-col gap-1 w-full sm:w-auto">
                <span class="text-xs font-bold text-white">{{ vol }}</span>
                <span class="text-[9px] text-slate-500 uppercase tracking-widest">Global Contributor</span>
              </div>
            </div>
         </div>
         <div>
            <div class="hf-section-header mb-8">
              <h2 class="text-lg lg:text-xl font-bold text-white">References</h2>
              <div class="hf-line"></div>
            </div>
            <div class="space-y-4">
               <div v-for="ref in resumeData.references" :key="ref.name" class="resume-card resume-reveal p-4 border-l-2 border-l-hf-pink bg-slate-900/20">
                 <h4 class="text-sm font-bold text-white">{{ ref.name }}</h4>
                 <p class="text-[10px] text-slate-500">{{ ref.pos }}</p>
               </div>
            </div>
         </div>
      </section>

      <!-- Declaration -->
      <footer class="text-center space-y-4 pt-12 border-t border-slate-900">
        <p class="text-[10px] text-slate-600 italic max-w-md mx-auto">
          "I hereby declare that all the information furnished above is correct to the best of my belief. I am responsible for the authenticity of all the information."
        </p>
        <div class="font-mono text-[10px] text-hf-pink">Build: v1.0.0-final // VERIFIED</div>
      </footer>

    </main>

    <footer class="site-footer w-full bg-slate-950 py-12 border-t border-slate-900 mt-12 lg:mt-24">
       <div class="max-w-6xl mx-auto px-6 text-center text-[8px] lg:text-[10px] text-slate-700 uppercase tracking-[0.2em] lg:tracking-[0.4em]">
          Handcrafted with Vue 3 & Tailwind // Sajib Adhikary
       </div>
    </footer>
  </div>
</template>

<style>
@import './style.css';

html {
  scroll-behavior: smooth;
}
</style>
