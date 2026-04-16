<script setup lang="ts">
const resumeData = {
  basics: {
    name: "Sajib Adhikary",
    headline: "Software Engineer",
    email: "tosajibadhi@gmail.com",
    location: "Dhaka, Bangladesh",
    profilePic: "https://storage.rxresu.me/clp9g04jwcp2k9hunw9ic54v9/pictures/clp9kq71300hxqo5qnzxexz40.jpg",
    socials: [
      { name: 'GitHub', url: 'https://github.com/sajibAdhi', icon: 'fab fa-github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sajibadhi/', icon: 'fab fa-linkedin' },
      { name: 'Website', url: 'https://hishabkitab.com/', icon: 'fas fa-globe' }
    ]
  },
  summary: "Software Engineer with 3+ years of experience in developing scalable ERP, accounting, and microfinance systems using Laravel and CodeIgniter. Strong expertise in backend development, database design, and system architecture.",
  experience: [
    {
      company: "Ambala IT",
      role: "Software Engineer",
      period: "Jul 2024 - Present",
      points: [
        "Developed an Educational Institute Management System used by 500+ users",
        "Built a Pre-Recruitment System to streamline recruitment document processing",
        "Contributed to Microfinance System development",
        "Optimized backend systems for performance and scalability"
      ]
    },
    {
      company: "Ranks ITT",
      role: "Software Engineer",
      period: "Dec 2023 - Jul 2024",
      points: [
        "Developed a Vehicle Management Application",
        "Built a Bill Management Application for financial record handling",
        "Contributed to CRM system development"
      ]
    },
    {
      company: "Adova Soft",
      role: "Software Engineer",
      period: "Dec 2022 - Nov 2023",
      points: [
        "Developed an Institute Management System",
        "Built Accounting and Inventory Management Software",
        "Developed a POS application with sales tracking"
      ]
    }
  ],
  skills: [
    { category: 'Languages', items: ['PHP', 'JavaScript', 'TypeScript'] },
    { category: 'Frameworks', items: ['Laravel', 'CodeIgniter', 'Vue.js', 'jQuery'] },
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'Database', items: ['MySQL', 'MariaDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Composer', 'Linux', 'VPS'] }
  ],
  projects: [
    { 
      name: "HishabKitab (ERP System)", 
      desc: "Multi-company inventory and accounting system with ledger and balance sheets.",
      link: "https://hishabkitab.com/"
    },
    { 
      name: "ZindaPark Banking", 
      desc: "Online banking system with financial year closing and interest calculation.",
    },
    { 
      name: "Smart Invoice", 
      desc: "Cloud-based invoicing system for product and sales management.",
      link: "https://smartinvoice.hishabkitab.com/"
    }
  ],
  volunteering: [
    "Maintainer – OpenTelemetry.io (Bangla)",
    "Contributor – CNCF Glossary (Bangla)",
    "Contributor – Kubernetes Website (Bangla)"
  ]
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200">
    <!-- Hero Section -->
    <header class="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <span class="font-serif text-xl font-bold text-white">SA<span class="text-indigo-500">.</span></span>
        <div class="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" class="text-slate-400 hover:text-white transition">About</a>
          <a href="#experience" class="text-slate-400 hover:text-white transition">Experience</a>
          <a href="#projects" class="text-slate-400 hover:text-white transition">Projects</a>
          <a href="#skills" class="text-slate-400 hover:text-white transition">Skills</a>
        </div>
        <a :href="'mailto:' + resumeData.basics.email" class="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-500 transition shadow-lg shadow-indigo-900/20">
          Get in Touch
        </a>
      </nav>
    </header>

    <main>
      <!-- Hero -->
      <section class="container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-2/3 space-y-6 text-center lg:text-left">
          <h1 class="font-serif text-5xl lg:text-7xl font-bold tracking-tight text-white">
            Hi, I'm <span class="text-indigo-500">{{ resumeData.basics.name }}</span>
          </h1>
          <p class="text-xl lg:text-2xl text-slate-400 max-w-2xl">
            A <span class="font-semibold text-slate-200">{{ resumeData.basics.headline }}</span> building scalable ERP and financial ecosystems.
          </p>
          <div class="flex justify-center lg:justify-start gap-4 pt-4">
            <a v-for="social in resumeData.basics.socials" :key="social.name" :href="social.url" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all hover:-translate-y-1">
              <i :class="social.icon" class="text-xl"></i>
            </a>
          </div>
        </div>
        <div class="lg:w-1/3 flex justify-center">
          <div class="relative">
            <div class="absolute inset-0 bg-indigo-600 rounded-2xl rotate-6 -z-10 opacity-20 blur-xl"></div>
            <img :src="resumeData.basics.profilePic" alt="Profile" class="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-2xl border border-slate-800 grayscale hover:grayscale-0 transition duration-500">
          </div>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="bg-slate-900/50 py-20 border-y border-slate-900">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center space-y-6">
            <h2 class="font-serif text-3xl font-bold text-white">The Summary</h2>
            <p class="text-lg text-slate-400 leading-relaxed italic">
              "{{ resumeData.summary }}"
            </p>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="py-20">
        <div class="container mx-auto px-6">
          <h2 class="font-serif text-3xl font-bold mb-12 text-center text-white">Work History</h2>
          <div class="max-w-3xl mx-auto space-y-12">
            <div v-for="(exp, idx) in resumeData.experience" :key="idx" class="relative pl-8 border-l-2 border-slate-800 group">
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 group-hover:bg-indigo-500 transition-colors"></div>
              <div class="mb-2 flex flex-col md:flex-row md:justify-between items-baseline">
                <h3 class="text-xl font-bold text-slate-100">{{ exp.company }}</h3>
                <span class="text-sm font-semibold text-indigo-400 uppercase tracking-wider">{{ exp.period }}</span>
              </div>
              <p class="text-slate-400 font-medium mb-4">{{ exp.role }}</p>
              <ul class="space-y-3">
                <li v-for="point in exp.points" :key="point" class="text-slate-400 flex items-start gap-2">
                  <span class="text-indigo-500/50 mt-1.5">•</span>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="bg-black py-20">
        <div class="container mx-auto px-6">
          <h2 class="font-serif text-3xl font-bold mb-12 text-center text-white">Featured Projects</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="project in resumeData.projects" :key="project.name" class="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all group">
              <h3 class="text-xl font-bold mb-4 text-white">{{ project.name }}</h3>
              <p class="text-slate-400 text-sm mb-6 leading-relaxed">{{ project.desc }}</p>
              <a v-if="project.link" :href="project.link" target="_blank" class="inline-flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300 transition">
                Explore Project <i class="fas fa-arrow-right ml-2 text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="py-20 bg-slate-950">
        <div class="container mx-auto px-6">
          <h2 class="font-serif text-3xl font-bold mb-12 text-center text-white">Technical Stack</h2>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div v-for="skill in resumeData.skills" :key="skill.category">
              <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{{ skill.category }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="item in skill.items" :key="item" class="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-sm text-slate-300 font-medium">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Volunteering -->
      <section class="bg-indigo-950/20 py-20 border-y border-indigo-900/20">
        <div class="container mx-auto px-6 flex flex-col items-center">
          <h2 class="font-serif text-3xl font-bold mb-8 text-white">Open Source & Community</h2>
          <div class="flex flex-wrap justify-center gap-6">
            <div v-for="vol in resumeData.volunteering" :key="vol" class="px-6 py-3 bg-slate-900 rounded-full shadow-sm text-slate-300 font-medium border border-indigo-500/20">
              {{ vol }}
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-slate-950 border-t border-slate-900 py-12">
      <div class="container mx-auto px-6 text-center">
        <p class="text-slate-500 text-sm">© 2026 {{ resumeData.basics.name }}. Handcrafted with Vue.js & Tailwind.</p>
      </div>
    </footer>
  </div>
</template>

<style>
@import './style.css';
</style>
