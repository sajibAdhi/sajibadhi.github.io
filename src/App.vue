<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import careerStory from './data/career-story.json'
import careerStoryBn from './data/career-story.bn.json'
import { messages, type Locale, type MessageKey } from './data/translations'
import { siteFeatures } from './config/site-features'

const readPreference = <T extends string>(
  storageKey: string,
  options: readonly { value: T }[],
  fallback: T
): T => {
  try {
    const savedValue = localStorage.getItem(storageKey)
    return options.find((option) => option.value === savedValue)?.value ?? fallback
  } catch (error) {
    console.warn(`Unable to load saved preference "${storageKey}".`, error)
    return fallback
  }
}

const localeOptions = siteFeatures.language.options
const themeOptions = siteFeatures.theme.options
const locale = ref<Locale>(
  siteFeatures.language.enabled
    ? readPreference(siteFeatures.language.storageKey, localeOptions, siteFeatures.language.default)
    : siteFeatures.language.default
)
const activeLocaleLabel = computed(() =>
  localeOptions.find((option) => option.value === locale.value)?.label ?? locale.value
)
const t = (key: MessageKey) => messages[locale.value][key]
const activeCareerStory = computed(() => locale.value === 'bn' ? careerStoryBn : careerStory)
const projects = [
  { name: 'Mobile EMI', descriptionKey: 'projectMobileEmi', link: '' },
  { name: 'Shikkha Plus', descriptionKey: 'projectShikkhaPlus', link: 'https://shikkhaplus.com/' },
  { name: 'HishabKitab (ERP)', descriptionKey: 'projectHishabKitab', link: 'https://hishabkitab.com/' },
  { name: 'E-Recruitment', descriptionKey: 'projectRecruitment', link: '' },
  { name: 'ZindaPark Banking', descriptionKey: 'projectZindaPark', link: '' }
] as const satisfies { name: string; descriptionKey: MessageKey; link: string }[]

const applyLocale = () => {
  document.documentElement.lang = locale.value
  document.title = locale.value === 'bn' ? 'সজীব অধিকারী | সফটওয়্যার ইঞ্জিনিয়ার' : 'Sajib Adhikary | Software Engineer'
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute(
    'content',
    locale.value === 'bn'
      ? 'সজীব অধিকারী—ব্যাকএন্ড আর্কিটেকচার, ERP প্ল্যাটফর্ম এবং নির্ভরযোগ্য আর্থিক সিস্টেমে অভিজ্ঞ সফটওয়্যার ইঞ্জিনিয়ার।'
      : 'Sajib Adhikary is a software engineer specializing in backend architecture, ERP platforms, and reliable financial systems.'
  )
}

applyLocale()

watch(locale, (preference) => {
  if (siteFeatures.language.enabled) {
    try {
      localStorage.setItem(siteFeatures.language.storageKey, preference)
    } catch (error) {
      console.warn('Unable to save the language preference.', error)
    }
  }
  applyLocale()
})

type ThemePreference = typeof siteFeatures.theme.options[number]['value']
const themePreference = ref<ThemePreference>(
  siteFeatures.theme.enabled
    ? readPreference(siteFeatures.theme.storageKey, themeOptions, siteFeatures.theme.default)
    : siteFeatures.theme.default
)
const activeThemeLabel = computed(() =>
  themeOptions.find((option) => option.value === themePreference.value)?.labels[locale.value] ?? ''
)
const resolvedTheme = ref<'light' | 'dark'>('dark')
const systemThemeQuery = window.matchMedia('(prefers-color-scheme: light)')
let systemThemeListener: (() => void) | undefined

const applyTheme = () => {
  const preference = siteFeatures.theme.enabled ? themePreference.value : siteFeatures.theme.default
  const isLight = preference === 'light' ||
    (preference === 'system' && systemThemeQuery.matches)

  resolvedTheme.value = isLight ? 'light' : 'dark'
  document.documentElement.dataset.theme = isLight ? 'light' : 'dark'
  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute(
    'content',
    isLight ? siteFeatures.theme.colors.light : siteFeatures.theme.colors.dark
  )
  document.querySelector<HTMLLinkElement>('#site-favicon')?.setAttribute(
    'href',
    `./logos/favicon-${isLight ? 'dark' : 'light'}.ico?v=1`
  )
}

applyTheme()

watch(themePreference, (preference) => {
  if (siteFeatures.theme.enabled) {
    try {
      localStorage.setItem(siteFeatures.theme.storageKey, preference)
    } catch (error) {
      console.warn('Unable to save the theme preference.', error)
    }
  }
  applyTheme()
})

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
  skills: [
    { category: 'Languages', items: ['PHP', 'JavaScript'] },
    { category: 'Frameworks', items: ['Laravel', 'CodeIgniter', 'jQuery'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'Tailwind', 'Bootstrap'] },
    { category: 'Database', items: ['MySQL', 'MariaDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Composer', 'Npm', 'Pest'] },
    { category: 'AI & Automation', items: ['Agentic AI'] },
    { category: 'Cloud/DevOps', items: ['VPS', 'Linux', 'Hosting'] },
    { category: 'Concepts', items: ['MVC Architecture', 'REST APIs', 'Database Optimization', 'Authentication & Authorization'] },
    { category: 'Engineering', items: ['System Design', 'API Design', 'Performance Profiling', 'Caching & Queues', 'Code Review & Mentoring'] }
  ],
  languages: ["English (Professional)", "Bangla (Native)"]
}

const toolkitFilters = ['All', 'Backend', 'Frontend', 'DevOps'] as const
type ToolkitFilter = typeof toolkitFilters[number]
const toolkitFilterMessage: Record<ToolkitFilter, MessageKey> = {
  All: 'all',
  Backend: 'backend',
  Frontend: 'frontend',
  DevOps: 'devops'
}

const activeToolkitFilter = ref<ToolkitFilter>('All')
const skillGroups = [
  {
    category: 'frontendCategory',
    filter: 'Frontend',
    items: ['JavaScript', 'jQuery', 'HTML', 'CSS', 'Tailwind', 'Bootstrap']
  },
  {
    category: 'backendCategory',
    filter: 'Backend',
    items: ['PHP', 'Laravel', 'CodeIgniter', 'REST APIs', 'MVC Architecture', 'Authentication & Authorization']
  },
  {
    category: 'dataCategory',
    filter: 'Backend',
    items: ['MySQL', 'MariaDB', 'PostgreSQL', 'Database Optimization']
  },
  {
    category: 'devopsCategory',
    filter: 'DevOps',
    items: ['Git', 'Docker', 'Composer', 'Npm', 'Pest', 'VPS', 'Linux', 'Hosting']
  },
  {
    category: 'engineeringAiCategory',
    filter: 'Backend',
    items: ['System Design', 'API Design', 'Performance Profiling', 'Caching & Queues', 'Code Review & Mentoring', 'Agentic AI']
  }
] satisfies { category: MessageKey; filter: Exclude<ToolkitFilter, 'All'>; items: string[] }[]

const visibleSkillGroups = computed(() =>
  activeToolkitFilter.value === 'All'
    ? skillGroups
    : skillGroups.filter((group) => group.filter === activeToolkitFilter.value)
)

const navItems = computed(() => [
  { label: t('home'), icon: 'fas fa-home', link: '#home' },
  { label: t('skills'), icon: 'fas fa-layer-group', link: '#skills' },
  { label: t('experience'), icon: 'fas fa-history', link: '#exp' },
  { label: t('projects'), icon: 'fas fa-code-branch', link: '#projects' },
  { label: t('githubActivity'), icon: 'fab fa-github', link: '#github-activity' }
])

const resumeRoot = ref<HTMLElement | null>(null)
const activeStoryIndex = ref(0)
let revealObserver: IntersectionObserver | undefined
let storyObserver: IntersectionObserver | undefined

onMounted(() => {
  systemThemeListener = () => {
    if (siteFeatures.theme.enabled && themePreference.value === 'system') {
      applyTheme()
    }
  }
  systemThemeQuery.addEventListener('change', systemThemeListener)

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
  if (systemThemeQuery && systemThemeListener) {
    systemThemeQuery.removeEventListener('change', systemThemeListener)
  }
})
</script>

<template>
  <div ref="resumeRoot" class="min-h-screen hf-grid-bg flex flex-col items-center selection:bg-hf-pink selection:text-white relative scroll-smooth pb-20 xl:pb-0">
    
    <!-- Floating Right Sidebar Navigation (Desktop) -->
    <nav class="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-4">
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
    <nav class="mobile-bottom-nav fixed bottom-4 left-4 right-4 z-[100] xl:hidden">
      <div class="mobile-bottom-nav__links bg-hf-card/80 backdrop-blur-lg border border-hf-border rounded-2xl flex items-center justify-around p-2 shadow-2xl">
        <a v-for="item in navItems" :key="item.label" :href="item.link" :aria-label="item.label" class="mobile-bottom-nav__link flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-hf-pink transition-colors">
          <i :class="item.icon" class="text-lg"></i>
          <span class="mobile-bottom-nav__label text-[8px] font-bold uppercase tracking-tighter">{{ item.label }}</span>
        </a>
      </div>
    </nav>

    <!-- Top Nav (Minimalist) -->
    <header id="home" class="w-full max-w-6xl px-4 sm:px-6 py-4 sm:py-6 flex flex-row flex-wrap justify-between items-center gap-3 z-50">
      <a href="#home" class="site-logo-link group shrink-0" :aria-label="`${resumeData.basics.name} ${t('home')}`">
        <img
          :src="resolvedTheme === 'light' ? '/logos/icon-64-dark.png' : '/logos/icon-64-light.png'"
          :alt="t('logoAlt')"
          class="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
        >
      </a>
      <div class="flex flex-wrap items-center justify-end gap-2 min-w-0 max-w-full">
        <label v-if="siteFeatures.language.enabled" class="theme-control flex items-center gap-2 rounded-lg border border-hf-border bg-slate-900 px-3 py-2 text-slate-300">
          <span class="theme-control__value" aria-hidden="true">{{ activeLocaleLabel }}</span>
          <select v-model="locale" :aria-label="t('language')" class="theme-control__select">
            <option v-for="option in localeOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
        </label>
        <label v-if="siteFeatures.theme.enabled" class="theme-control flex items-center gap-2 rounded-lg border border-hf-border bg-slate-900 px-3 py-2 text-slate-300">
          <i
            :class="themePreference === 'system' ? 'fas fa-circle-half-stroke' : themePreference === 'light' ? 'fas fa-sun' : 'fas fa-moon'"
            class="text-xs text-hf-cyan"
            aria-hidden="true"
          ></i>
          <span class="theme-control__value" aria-hidden="true">{{ activeThemeLabel }}</span>
          <select v-model="themePreference" :aria-label="t('theme')" class="theme-control__select">
            <option v-for="option in themeOptions" :key="option.value" :value="option.value">{{ option.labels[locale] }}</option>
          </select>
        </label>
      </div>
    </header>

    <main class="w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-8 lg:py-12 space-y-12 sm:space-y-16 lg:space-y-24">
      
      <!-- Hero -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="resume-hero-copy lg:col-span-7 space-y-6 text-center lg:text-left">
          <p class="engineer-eyebrow"><span></span> {{ t('heroEyebrow') }}</p>
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
            {{ resumeData.basics.name }}<br/>
            <span class="hf-gradient-text text-2xl sm:text-3xl lg:text-5xl block mt-4">{{ t('role') }}</span>
          </h1>
          <p class="engineer-positioning">{{ t('positioning') }}</p>
          <p class="text-base lg:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            {{ t('summary') }}
          </p>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a :href="resumeData.basics.linktreeUrl" target="_blank" class="hf-cta">
              <i class="fas fa-link text-[11px]"></i>
              <span>{{ t('links') }}</span>
            </a>
            <a :href="resumeData.basics.resumeUrl" target="_blank" class="hf-cta">
              <i class="fas fa-file-lines text-[11px]"></i>
              <span>{{ t('resume') }}</span>
            </a>
            <a
              :href="resumeData.basics.socials[0].url"
              target="_blank"
              rel="noopener noreferrer"
              class="hf-cta hero-icon-link"
              aria-label="GitHub"
              title="GitHub"
            >
              <i class="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              :href="'mailto:' + resumeData.basics.email"
              class="hf-cta hero-icon-link"
              :aria-label="t('contact')"
              :title="t('contact')"
            >
              <i class="fas fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
          <div class="flex flex-wrap justify-center lg:justify-start gap-3 text-[10px] font-mono">
            <div class="flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
              <i class="fas fa-map-marker-alt text-hf-pink"></i> {{ t('location') }}
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
            <img :src="resumeData.basics.profilePic" :alt="t('portraitAlt')" class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl object-cover relative z-10 border-2 border-hf-border grayscale hover:grayscale-0 transition-all duration-700">
            <div class="engineer-stack" :aria-label="t('primaryTechnologies')">
              <span v-for="technology in ['PHP', 'Laravel', 'MySQL', 'Docker']" :key="technology">{{ technology }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Engineering toolkit -->
      <section id="skills" class="resume-reveal">
        <div class="hf-section-header flex-wrap">
          <h2 class="text-xl lg:text-2xl font-bold text-white flex items-center gap-3">
            <i class="fas fa-screwdriver-wrench text-hf-cyan"></i> {{ t('toolkit') }}
          </h2>
          <div class="hf-line hidden sm:block"></div>
          <div class="flex items-center gap-1 rounded-xl border border-hf-border bg-slate-950/70 p-1" role="group" :aria-label="t('filterToolkit')">
            <button
              v-for="filter in toolkitFilters"
              :key="filter"
              type="button"
              :aria-pressed="activeToolkitFilter === filter"
              @click="activeToolkitFilter = filter"
              class="rounded-lg px-3 py-2 text-[10px] font-bold transition-colors"
              :class="activeToolkitFilter === filter ? 'bg-hf-cyan text-slate-950' : 'text-slate-400 hover:text-white'"
            >
              {{ t(toolkitFilterMessage[filter]) }}
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <article class="relative overflow-hidden rounded-2xl border border-hf-cyan/40 bg-gradient-to-br from-hf-cyan/10 via-hf-card to-slate-950 p-6 sm:p-8 lg:col-span-5">
            <div class="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-hf-cyan/10 blur-3xl" aria-hidden="true"></div>
            <div class="relative">
              <div class="flex items-center justify-between gap-3">
                <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-hf-cyan">{{ t('coreStack') }}</p>
                <span class="flex items-center gap-2 text-[10px] text-slate-400">
                  <span class="h-1.5 w-1.5 rounded-full bg-hf-cyan"></span>
                  {{ t('primaryStack') }}
                </span>
              </div>
              <h3 class="mt-5 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white">
                PHP <span class="text-hf-cyan">·</span> Laravel<br>
                <span class="text-hf-cyan">·</span> MySQL
              </h3>
              <p class="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
                {{ t('coreStackDescription') }}
              </p>
              <div class="mt-6 flex flex-wrap gap-2">
                <span v-for="technology in ['PHP', 'Laravel', 'MySQL']" :key="technology" class="rounded-full border border-hf-cyan/40 bg-hf-cyan/10 px-3 py-1 text-[11px] font-semibold text-hf-cyan">
                  {{ technology }}
                </span>
              </div>
            </div>
          </article>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:col-span-7">
            <article v-for="group in visibleSkillGroups" :key="group.category" class="resume-card rounded-2xl border border-hf-border bg-hf-card/80 p-4 sm:p-5 transition-colors hover:border-hf-cyan/40">
              <div class="mb-4 flex items-center justify-between gap-2">
                <h3 class="text-[10px] font-bold uppercase tracking-[0.16em] text-hf-cyan">{{ t(group.category) }}</h3>
                <span class="text-[10px] text-slate-500">{{ group.items.length }} {{ t('skillsCount') }}</span>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="item in group.items"
                  :key="item"
                  class="rounded-full border px-2.5 py-1 text-[10px] transition-colors"
                  :class="['PHP', 'Laravel', 'MySQL'].includes(item) ? 'border-hf-cyan/50 bg-hf-cyan/10 text-hf-cyan' : 'border-slate-700 bg-slate-900/60 text-slate-300'"
                >
                  {{ item }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Career story -->
      <section
        id="exp"
        class="career-story"
        :style="{ '--story-progress': `${((activeStoryIndex + 1) / (activeCareerStory.chapters.length + 1)) * 100}%` }"
      >
        <div class="hf-section-header">
          <h2 class="text-xl lg:text-2xl font-bold text-white flex items-center gap-3">
            <i class="fas fa-code-branch text-hf-cyan"></i> {{ t('engineeringExperience') }}
          </h2>
          <div class="hf-line from-hf-cyan/50"></div>
        </div>
        <div class="novel">
          <div class="novel__masthead">
            <span><i class="fas fa-code" aria-hidden="true"></i> {{ t('careerLog') }}</span>
            <span>{{ t('nowReading') }} · {{ String(activeStoryIndex + 1).padStart(2, '0') }} / {{ String(activeCareerStory.chapters.length + 1).padStart(2, '0') }}</span>
          </div>
          <div class="novel__progress" aria-hidden="true">
            <span></span>
          </div>
          <div class="novel__book novel__pages">
              <header class="novel__opening">
                <span class="novel__opening-kicker"><i class="fas fa-terminal" aria-hidden="true"></i> {{ t('engineeringInPractice') }}</span>
                <h3>{{ t('openingStoryTitle') }}</h3>
                <p>{{ activeCareerStory.introduction }}</p>
                <span class="novel__opening-scroll"><i class="fas fa-arrow-down" aria-hidden="true"></i> {{ t('scrollToBegin') }}</span>
              </header>
              <article
                v-for="(chapter, index) in activeCareerStory.chapters"
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
                  <p class="novel__chapter-label">{{ t('chapter') }} {{ String(index + 1).padStart(2, '0') }}</p>
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
                  <p class="novel__section-label">{{ t('engineeringWorkImpact') }}</p>
                  <ul class="novel__highlights">
                    <li v-for="highlight in chapter.highlights" :key="highlight">
                      <i class="fas fa-arrow-right" aria-hidden="true"></i>
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>
                </div>
                <aside v-if="chapter.transitionToNext" class="novel__carry">
                  <p class="novel__section-label"><i class="fas fa-bookmark" aria-hidden="true"></i> {{ t('carriedForward') }}</p>
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
                :data-story-index="activeCareerStory.chapters.length"
                class="novel__page novel__page--epilogue"
                :class="{ 'is-active': activeStoryIndex === activeCareerStory.chapters.length }"
              >
                <div class="novel__scene" aria-hidden="true">
                  <span class="novel__scene-grid"></span>
                  <span class="novel__scene-number"><i class="fas fa-feather-pointed"></i></span>
                  <span class="novel__scene-copy">
                    <span>{{ activeCareerStory.epilogueScene.label }}</span>
                    <span>{{ activeCareerStory.epilogueScene.caption }}</span>
                  </span>
                  <span class="novel__architecture">
                    <span v-for="(step, stepIndex) in activeCareerStory.epilogueScene.steps" :key="step" class="novel__architecture-node">
                      <i :class="['fas', stepIndex === 0 ? 'fa-diagram-project' : stepIndex === 1 ? 'fa-gears' : 'fa-database']"></i>
                      {{ step }}
                    </span>
                  </span>
                  <span class="novel__scene-scan"></span>
                </div>
                <p class="novel__chapter-label">{{ t('epilogue') }}</p>
                <h3 class="novel__title">{{ activeCareerStory.closing.title }}</h3>
                <p class="novel__narrative">{{ activeCareerStory.closing.story }}</p>
                <a :href="'mailto:' + resumeData.basics.email" class="career-story__contact">
                  {{ activeCareerStory.closing.callToAction }}
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
            <i class="fas fa-cubes text-hf-cyan"></i> {{ t('selectedWork') }}
          </h2>
          <div class="hf-line from-hf-green/50"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="proj in projects" :key="proj.name" class="hf-card resume-card resume-reveal p-6 lg:p-8 border-l-4 border-l-hf-indigo hover:border-l-hf-pink transition-all">
            <h3 class="text-lg lg:text-xl font-bold text-white mb-2">{{ proj.name }}</h3>
            <p class="text-sm text-slate-500 mb-6">{{ t(proj.descriptionKey) }}</p>
            <a v-if="proj.link" :href="proj.link" target="_blank" rel="noopener noreferrer" class="text-[10px] font-bold text-hf-indigo uppercase tracking-[0.2em] hover:text-hf-pink transition">
              {{ t('viewProject') }} <i class="fas fa-external-link-alt ml-1"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- GitHub Activity -->
      <section id="github-activity" class="resume-reveal">
        <div class="hf-section-header">
          <h2 class="text-xl lg:text-2xl font-bold text-white flex items-center gap-3">
            <i class="fab fa-github text-hf-cyan" aria-hidden="true"></i> {{ t('githubActivity') }}
          </h2>
          <div class="hf-line from-hf-cyan/50"></div>
        </div>
        <div class="hf-card p-4 sm:p-6 lg:p-8">
          <p class="text-sm text-slate-500 mb-5">{{ t('githubSnapshot') }}</p>
          <div class="overflow-x-auto" role="region" :aria-label="t('contributionCalendar')" tabindex="0">
            <img
              src="https://ghchart.rshah.org/38bdf8/sajibAdhi"
              :alt="t('githubAlt')"
              class="min-w-[700px] w-full"
              loading="lazy"
            >
          </div>
          <a
            :href="resumeData.basics.socials[0].url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-5 text-xs font-bold text-hf-indigo hover:text-hf-pink transition"
          >
            {{ t('viewGithub') }} <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      </section>

    </main>

    <footer class="site-footer w-full bg-slate-950 py-12 border-t border-slate-900 mt-12 lg:mt-24">
       <div class="max-w-6xl mx-auto px-6 text-center text-[8px] lg:text-[10px] text-slate-700 uppercase tracking-[0.2em] lg:tracking-[0.4em]">
          {{ t('craftedWith') }}
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
