<script setup lang="ts">
const resumeData = {
  basics: {
    name: "Sajib Adhikary",
    headline: "Software Engineer",
    email: "tosajibadhi@gmail.com",
    profilePic: "https://storage.rxresu.me/clp9g04jwcp2k9hunw9ic54v9/pictures/clp9kq71300hxqo5qnzxexz40.jpg",
    socials: [
      { name: 'GitHub', url: 'https://github.com/sajibAdhi', icon: 'fab fa-github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sajibadhi/', icon: 'fab fa-linkedin' },
      { name: 'Website', url: 'https://hishabkitab.com/', icon: 'fas fa-globe' }
    ]
  },
  summary: "Software Engineer with 3+ years of experience in developing scalable ERP, accounting, and microfinance systems using Laravel and CodeIgniter. Specialized in building high-performance applications and optimizing database architectures.",
  experience: [
    { company: "Ambala IT", role: "Software Engineer", period: "Jul 2024 - Present" },
    { company: "Ranks ITT", role: "Software Engineer", period: "Dec 2023 - Jul 2024" },
    { company: "Adova Soft", role: "Software Engineer", period: "Dec 2022 - Nov 2023" }
  ],
  skills: [
    { category: 'Languages', items: ['PHP', 'JavaScript', 'TypeScript'] },
    { category: 'Frameworks', items: ['Laravel', 'CodeIgniter', 'Vue.js', 'jQuery'] },
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'Tailwind', 'Bootstrap'] },
    { category: 'Database', items: ['MySQL', 'MariaDB'] },
    { category: 'Tools', items: ['Docker', 'Git', 'Linux', 'VPS'] }
  ],
  projects: [
    { name: "HishabKitab ERP", desc: "Multi-company inventory and accounting system.", link: "https://hishabkitab.com/" },
    { name: "ZindaPark Banking", desc: "Online banking system with financial year closing." },
    { name: "Smart Invoice", desc: "Cloud-based invoicing system.", link: "https://smartinvoice.hishabkitab.com/" }
  ],
  volunteering: [
    { name: "OpenTelemetry.io (Bangla)", role: "Maintainer" },
    { name: "CNCF Glossary (Bangla)", role: "Contributor" },
    { name: "Kubernetes Website", role: "Contributor" }
  ]
}
</script>

<template>
  <div class="min-h-screen hf-grid-bg flex flex-col items-center">
    
    <!-- Top Nav -->
    <header class="w-full max-w-6xl px-6 py-6 flex justify-between items-center z-50">
      <div class="font-mono text-xl font-bold flex items-center gap-2">
        <span class="text-hf-pink">&lt;</span>
        <span class="text-white tracking-tighter">SAJIB.DEV</span>
        <span class="text-hf-pink">/&gt;</span>
      </div>
      <div class="flex gap-4">
        <a :href="resumeData.basics.socials[0].url" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-hf-border hover:border-hf-pink transition"><i class="fab fa-github"></i></a>
        <a :href="'mailto:' + resumeData.basics.email" class="hf-button text-xs hidden sm:block">Open PR / Contact</a>
      </div>
    </header>

    <main class="w-full max-w-6xl px-6 py-12 space-y-24">
      
      <!-- Hero / Introduction -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <div class="hf-badge text-hf-cyan">#HACKTOBERFEST_2024_THEME</div>
          <h1 class="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
            Building the <br/>
            <span class="hf-gradient-text">Open Web Ecosystem</span>
          </h1>
          <p class="text-xl text-slate-400 max-w-2xl leading-relaxed">
            I'm <span class="text-white font-semibold">{{ resumeData.basics.name }}</span>, a {{ resumeData.basics.headline }} focused on scalable ERP systems and contributing to the global open-source community.
          </p>
          <div class="flex flex-wrap gap-4 pt-4">
            <span v-for="skill in ['Laravel', 'PHP', 'Vue.js', 'Docker', 'MySQL']" :key="skill" class="px-4 py-1.5 rounded-lg border border-hf-border bg-slate-900/50 text-xs font-mono text-hf-green">
              {{ skill }}
            </span>
          </div>
        </div>
        <div class="lg:col-span-5 flex justify-center relative">
          <div class="absolute inset-0 bg-hf-pink opacity-20 blur-[100px] hf-glow rounded-full animate-pulse"></div>
          <div class="relative group">
            <div class="absolute -inset-2 bg-gradient-to-tr from-hf-pink to-hf-indigo opacity-30 rounded-2xl group-hover:rotate-6 transition-all duration-500"></div>
            <img :src="resumeData.basics.profilePic" alt="Sajib" class="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover relative z-10 border-2 border-hf-border group-hover:grayscale-0 grayscale transition-all duration-500">
          </div>
        </div>
      </section>

      <!-- About / Pull Request Stats Style -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="hf-card p-8 md:col-span-2 flex flex-col justify-center">
          <h2 class="text-xs font-bold text-hf-pink uppercase tracking-widest mb-4">// CONTRIBUTOR_SUMMARY</h2>
          <p class="text-lg text-slate-300 leading-relaxed italic">
            "{{ resumeData.summary }}"
          </p>
        </div>
        <div class="hf-card p-8 bg-gradient-to-br from-hf-indigo/20 to-transparent flex flex-col items-center justify-center text-center">
          <div class="text-5xl font-bold text-white mb-2">3+</div>
          <div class="text-xs font-bold text-hf-indigo uppercase tracking-widest">Years of Code Execution</div>
          <div class="mt-6 flex gap-2">
            <div class="w-2 h-2 rounded-full bg-hf-green animate-pulse"></div>
            <span class="text-[10px] text-slate-500 font-mono">Status: Ready to Deploy</span>
          </div>
        </div>
      </section>

      <!-- Experience Timeline -->
      <section>
        <div class="hf-section-header">
          <h2 class="text-2xl font-bold text-white flex items-center gap-3">
            <i class="fas fa-history text-hf-pink"></i> Contribution History
          </h2>
          <div class="hf-line"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="exp in resumeData.experience" :key="exp.company" class="hf-card p-6 group">
            <div class="flex justify-between items-start mb-4">
              <span class="text-[10px] font-bold text-hf-green font-mono">{{ exp.period }}</span>
              <i class="fas fa-check-circle text-hf-indigo opacity-0 group-hover:opacity-100 transition"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">{{ exp.company }}</h3>
            <p class="text-xs text-hf-pink font-semibold uppercase tracking-wider mb-4">{{ exp.role }}</p>
            <div class="h-1 w-12 bg-hf-border rounded-full group-hover:w-full group-hover:bg-hf-pink transition-all duration-500"></div>
          </div>
        </div>
      </section>

      <!-- Project Matrix (Bento Style) -->
      <section>
        <div class="hf-section-header">
          <h2 class="text-2xl font-bold text-white flex items-center gap-3">
            <i class="fas fa-code-branch text-hf-cyan"></i> Merged Projects
          </h2>
          <div class="hf-line from-hf-cyan/50"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="proj in resumeData.projects" :key="proj.name" class="hf-card p-8 flex flex-col">
            <div class="w-10 h-10 rounded-lg bg-slate-900 border border-hf-border flex items-center justify-center text-hf-pink mb-6">
              <i class="fas fa-cube text-sm"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ proj.name }}</h3>
            <p class="text-sm text-slate-400 mb-8 leading-relaxed flex-grow">{{ proj.desc }}</p>
            <a v-if="proj.link" :href="proj.link" target="_blank" class="text-xs font-bold text-hf-indigo hover:text-hf-pink flex items-center gap-2 transition uppercase tracking-widest">
              View Deployment <i class="fas fa-external-link-alt"></i>
            </a>
            <span v-else class="text-[10px] font-bold text-slate-600 uppercase">Proprietary System</span>
          </div>
        </div>
      </section>

      <!-- Open Source / Volunteering -->
      <section class="hf-card p-12 bg-gradient-to-r from-hf-pink/10 via-transparent to-hf-indigo/10 border-hf-pink/20">
        <div class="text-center space-y-8">
          <h2 class="text-3xl font-bold text-white">Community Contributions</h2>
          <div class="flex flex-wrap justify-center gap-8">
            <div v-for="vol in resumeData.volunteering" :key="vol.name" class="flex flex-col items-center gap-2 group">
              <div class="w-2 h-2 rounded-full bg-hf-pink mb-2 group-hover:scale-150 transition"></div>
              <span class="text-sm font-bold text-white tracking-tight">{{ vol.name }}</span>
              <span class="text-[10px] font-mono text-slate-500 uppercase">{{ vol.role }}</span>
            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="w-full border-t border-hf-border py-12 mt-24">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="font-mono text-xs text-slate-600 uppercase tracking-widest">
          Build: 1d68e1f // sajib@adhikary.dev
        </div>
        <div class="flex gap-6">
          <a v-for="social in resumeData.basics.socials" :key="social.name" :href="social.url" target="_blank" class="text-slate-600 hover:text-hf-pink transition">
            <i :class="social.icon"></i>
          </a>
        </div>
        <div class="text-[10px] font-bold text-hf-indigo uppercase tracking-widest">
          © 2024 SAJIB_DEV // HACKTOBERFEST_THEME
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import './style.css';
</style>
