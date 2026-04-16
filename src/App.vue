<script setup lang="ts">
const resumeData = {
  basics: {
    name: "Sajib Adhikary",
    headline: "Software Engineer",
    email: "tosajibadhi@gmail.com",
    phone: "+8801400593322",
    location: "Agargaon, Dhaka",
    website: "https://hishabkitab.com/",
    profilePic: "https://storage.rxresu.me/clp9g04jwcp2k9hunw9ic54v9/pictures/clp9kq71300hxqo5qnzxexz40.jpg",
    resumeUrl: "https://rxresu.me/sajibadhi/resume-of-sajib-adhikary",
    linktreeUrl: "https://linktr.ee/sajibAdhi",
    socials: [
      { name: 'GitHub', url: 'https://github.com/sajibAdhi', icon: 'fab fa-github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sajibadhi/', icon: 'fab fa-linkedin' }
    ]
  },
  summary: "Software Engineer with 3+ years of experience in developing scalable ERP, accounting, and microfinance systems using Laravel and CodeIgniter. Strong expertise in backend development, database design, and system architecture. Experienced in building high-performance applications, optimizing database queries, and delivering solutions used by hundreds of users in real-world environments.",
  experience: [
    { 
      company: "Ambala IT", 
      role: "Software Engineer", 
      period: "Jul 2024 - Present",
      desc: "Developed Educational Institute Management System (500+ users), Pre-Recruitment System, Microfinance workflows, and Mobile Money EMI System."
    },
    { 
      company: "Ranks ITT", 
      role: "Software Engineer", 
      period: "Dec 2023 - Jul 2024",
      desc: "Developed Vehicle Management and Bill Management applications, contributed to CRM and internal data management solutions."
    },
    { 
      company: "Adova Soft", 
      role: "Software Engineer", 
      period: "Dec 2022 - Nov 2023",
      desc: "Developed an Institute Management System for administrative automation. Built Accounting and Inventory Management Software, and a POS application."
    },
    { 
      company: "Adova Soft", 
      role: "Web Developer", 
      period: "Jul 2020 - Nov 2022",
      desc: "Contributed to the E-Recruitment System with multi-role access. Worked on Co-operative Microfinance Management and Smart Prescription systems."
    },
    { 
      company: "Adova Soft", 
      role: "Programmer", 
      period: "Oct 2019 - Jun 2020",
      desc: "Developed a Shop Management Application with inventory and sales features."
    }
  ],
  education: [
    { school: "Sonargaon University", degree: "B.Sc in CSE", period: "2019 - 2023", result: "CGPA 3.19" },
    { school: "Bcic College", degree: "HSC Science", period: "2017 - 2018", result: "GPA 3.42" },
    { school: "Govt. Boys High School", degree: "SSC Science", period: "2014 - 2016", result: "GPA 4.72" }
  ],
  skills: [
    { category: 'Languages', items: ['PHP', 'JavaScript'] },
    { category: 'Frameworks', items: ['Laravel', 'CodeIgniter', 'jQuery'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'Tailwind', 'Bootstrap'] },
    { category: 'Database', items: ['MySQL', 'MariaDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Composer', 'Npm'] },
    { category: 'Cloud/DevOps', items: ['VPS', 'Linux', 'Hosting'] },
    { category: 'Concepts', items: ['MVC', 'REST API', 'DB Optimization'] }
  ],
  projects: [
    { name: "HishabKitab (ERP)", desc: "Inventory & accounting for multi-company operations.", link: "https://hishabkitab.com/" },
    { name: "ZindaPark Banking", desc: "Online banking with financial year closing & interest calculation.", link: "" },
    { name: "E-Recruitment", desc: "Platform with dynamic form generation & RBAC.", link: "" },
    { name: "Smart Prescription", desc: "Appointment & patient management platform.", link: "https://smartprescription.hishabkitab.com/" },
    { name: "Smart Invoice", desc: "Cloud-based invoicing with product & customer management.", link: "https://smartinvoice.hishabkitab.com/" }
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
</script>

<template>
  <div class="min-h-screen hf-grid-bg flex flex-col items-center selection:bg-hf-pink selection:text-white relative scroll-smooth pb-20 lg:pb-0">
    
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
    <nav class="fixed bottom-4 left-4 right-4 z-[100] lg:hidden">
      <div class="bg-hf-card/80 backdrop-blur-lg border border-hf-border rounded-2xl flex items-center justify-around p-2 shadow-2xl">
        <a v-for="item in navItems" :key="item.label" :href="item.link" class="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-hf-pink transition-colors">
          <i :class="item.icon" class="text-lg"></i>
          <span class="text-[8px] font-bold uppercase tracking-tighter">{{ item.label }}</span>
        </a>
      </div>
    </nav>

    <!-- Top Nav (Minimalist) -->
    <header id="home" class="w-full max-w-6xl px-6 py-6 flex justify-between items-center z-50">
      <div class="flex items-center gap-3 group cursor-pointer">
        <img src="/logo.svg" alt="Sajib Logo" class="w-10 h-10 rounded-xl shadow-2xl transition-transform group-hover:scale-110 duration-500">
        <div class="font-mono text-xl font-black flex items-center gap-1.5 tracking-tighter">
          <span class="text-hf-pink opacity-80">&lt;</span>
          <span class="text-white">SAJIB.DEV</span>
          <span class="text-hf-pink opacity-80">/&gt;</span>
        </div>
      </div>
      <div class="flex items-center gap-2 sm:gap-4">
        <a :href="resumeData.basics.socials[0].url" target="_blank" class="w-10 h-10 hidden sm:flex items-center justify-center rounded-lg bg-slate-900 border border-hf-border hover:border-hf-pink transition" title="GitHub"><i class="fab fa-github"></i></a>
        <a :href="resumeData.basics.linktreeUrl" target="_blank" class="hf-button text-[10px] sm:text-xs px-3 sm:px-4 py-2 !bg-hf-green !border-green-800">Links</a>
        <a :href="resumeData.basics.resumeUrl" target="_blank" class="hf-button text-[10px] sm:text-xs px-3 sm:px-4 py-2 !bg-hf-pink !border-pink-800">CV</a>
        <a :href="'mailto:' + resumeData.basics.email" class="hf-button text-[10px] sm:text-xs px-3 sm:px-4 py-2">Contact</a>
      </div>
    </header>

    <main class="w-full max-w-6xl px-6 py-8 lg:py-12 space-y-16 lg:space-y-24">
      
      <!-- Hero -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
            {{ resumeData.basics.name }}<br/>
            <span class="hf-gradient-text text-2xl sm:text-3xl lg:text-5xl block mt-4">{{ resumeData.basics.headline }}</span>
          </h1>
          <p class="text-base lg:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            {{ resumeData.summary }}
          </p>
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
        <div class="lg:col-span-5 flex justify-center order-first lg:order-last">
          <div class="relative group">
            <div class="absolute -inset-4 bg-hf-pink opacity-10 blur-2xl group-hover:opacity-20 transition animate-pulse"></div>
            <img :src="resumeData.basics.profilePic" class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl object-cover relative z-10 border-2 border-hf-border grayscale hover:grayscale-0 transition-all duration-700">
          </div>
        </div>
      </section>

      <!-- Skills Matrix -->
      <section id="skills">
        <div class="hf-section-header">
           <h2 class="text-xl lg:text-2xl font-bold text-white flex items-center gap-3">
             <i class="fas fa-layer-group text-hf-pink"></i> Tech Matrix
           </h2>
           <div class="hf-line"></div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
           <div v-for="skill in resumeData.skills" :key="skill.category" class="hf-card p-4 hover:bg-hf-pink/5 group">
             <h3 class="text-[9px] font-bold text-hf-pink uppercase mb-3">{{ skill.category }}</h3>
             <div class="space-y-1">
               <div v-for="item in skill.items" :key="item" class="text-xs text-slate-400 group-hover:text-white transition">{{ item }}</div>
             </div>
           </div>
        </div>
      </section>

      <!-- Experience Timeline -->
      <section id="exp">
        <div class="hf-section-header">
          <h2 class="text-xl lg:text-2xl font-bold text-white flex items-center gap-3">
            <i class="fas fa-code-branch text-hf-cyan"></i> Deployment History
          </h2>
          <div class="hf-line from-hf-cyan/50"></div>
        </div>
        <div class="space-y-6">
          <div v-for="exp in resumeData.experience" :key="exp.company" class="hf-card p-6 lg:p-8 group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-hf-pink/5 -mr-16 -mt-16 rounded-full blur-2xl group-hover:bg-hf-pink/10 transition"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 relative z-10">
               <div>
                 <h3 class="text-lg lg:text-xl font-bold text-white">{{ exp.company }}</h3>
                 <p class="text-xs lg:text-sm text-hf-cyan font-mono">{{ exp.role }}</p>
               </div>
               <span class="hf-badge text-hf-pink w-fit">{{ exp.period }}</span>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed max-w-4xl relative z-10">{{ exp.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects">
        <div class="hf-section-header">
          <h2 class="text-xl lg:text-2xl font-bold text-white flex items-center gap-3">
            <i class="fas fa-terminal text-hf-green"></i> System Protocols
          </h2>
          <div class="hf-line from-hf-green/50"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="proj in resumeData.projects" :key="proj.name" class="hf-card p-6 lg:p-8 border-l-4 border-l-hf-indigo hover:border-l-hf-pink transition-all">
            <h3 class="text-lg lg:text-xl font-bold text-white mb-2">{{ proj.name }}</h3>
            <p class="text-sm text-slate-500 mb-6">{{ proj.desc }}</p>
            <a v-if="proj.link" :href="proj.link" target="_blank" class="text-[10px] font-bold text-hf-indigo uppercase tracking-[0.2em] hover:text-hf-pink transition">
              Establish Connection <i class="fas fa-external-link-alt ml-1"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- Education & Awards -->
      <section id="edu" class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
           <div class="hf-section-header mb-8">
             <h2 class="text-lg lg:text-xl font-bold text-white">Academic Path</h2>
             <div class="hf-line from-hf-indigo/50"></div>
           </div>
           <div class="space-y-4">
             <div v-for="edu in resumeData.education" :key="edu.school" class="p-4 lg:p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
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
              <div v-for="award in resumeData.awards" :key="award.title" class="hf-card p-6 border-hf-green/20">
                <i class="fas fa-trophy text-hf-green mb-4 block"></i>
                <h4 class="font-bold text-white mb-2 text-sm lg:text-base">{{ award.title }}</h4>
                <p class="text-xs text-slate-500">{{ award.desc }}</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-for="cert in resumeData.certifications" :key="cert" class="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-[10px] text-slate-400">
                  <i class="fas fa-certificate text-hf-indigo mr-2"></i> {{ cert }}
                </div>
              </div>
           </div>
        </div>
      </section>

      <!-- Extras & References -->
      <section id="oss" class="grid grid-cols-1 md:grid-cols-3 gap-12">
         <div class="md:col-span-2">
            <div class="hf-section-header mb-8">
              <h2 class="text-lg lg:text-xl font-bold text-white">Open Source Ecosystem</h2>
              <div class="hf-line"></div>
            </div>
            <div class="flex flex-wrap gap-4">
              <div v-for="vol in resumeData.volunteering" :key="vol" class="px-6 py-4 bg-hf-indigo/5 border border-hf-indigo/20 rounded-2xl flex flex-col gap-1 w-full sm:w-auto">
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
               <div v-for="ref in resumeData.references" :key="ref.name" class="p-4 border-l-2 border-l-hf-pink bg-slate-900/20">
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

    <footer class="w-full bg-slate-950 py-12 border-t border-slate-900 mt-12 lg:mt-24">
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
