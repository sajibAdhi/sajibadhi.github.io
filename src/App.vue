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
      name: "HishabKitab", 
      desc: "Multi-company ERP with inventory & accounting.",
      link: "https://hishabkitab.com/"
    },
    { 
      name: "ZindaPark", 
      desc: "Online banking with financial year closing.",
    },
    { 
      name: "Smart Invoice", 
      desc: "Cloud-based invoicing system.",
      link: "https://smartinvoice.hishabkitab.com/"
    }
  ],
  volunteering: [
    "Maintainer – OpenTelemetry.io",
    "Contributor – CNCF Glossary",
    "Contributor – Kubernetes Website"
  ]
}

const asciiArt = `
   _____         _ _ _           _     _ _ _                   
  / ____|       (_|_) |         | |   | | | |                  
 | (___   __ _ _ _ _| |__      / \ \  | | | |__   ___ ___ _ __ 
  \___ \ / _\` | | | | '_ \    / _ \ \ | | | '_ \ / __/ _ \ '__|
  ____) | (_| | | | | |_) |  / ___ \ \| | | | | | (_|  __/ |   
 |_____/ \__,_| |_| |_.__/  /_/   \_\_\_|_|_| |_|\___\___|_|   
             _/ | _/ |                                         
            |__/ |__/                                          
`;

</script>

<template>
  <div class="min-h-screen bg-[#050505] p-4 md:p-8 flex items-center justify-center font-mono">
    <div class="terminal-window w-full max-w-5xl">
      <!-- Window Chrome -->
      <div class="terminal-header">
        <div class="terminal-dots">
          <div class="dot dot-red"></div>
          <div class="dot dot-yellow"></div>
          <div class="dot dot-green"></div>
        </div>
        <div class="text-xs text-slate-500 font-bold uppercase tracking-widest">
          sajib@portfolio: ~ (bash)
        </div>
        <div class="w-12"></div>
      </div>

      <!-- Content -->
      <div class="p-6 h-[80vh] overflow-y-auto scrollbar-hide text-sm md:text-base leading-relaxed">
        
        <!-- Welcome Area -->
        <div class="mb-10 animate-fade-in">
          <pre class="text-indigo-500 hidden md:block leading-tight mb-4">
{{ asciiArt }}
          </pre>
          <div class="prompt-row">
            <span class="prompt">sajib@dev:~$</span>
            <span class="command-text">whoami</span>
          </div>
          <div class="mt-4 text-slate-300">
            <h1 class="text-2xl font-bold text-white mb-2">{{ resumeData.basics.name }}</h1>
            <p class="text-terminal-accent font-semibold mb-4 underline decoration-indigo-500 underline-offset-4">{{ resumeData.basics.headline }}</p>
            <p class="max-w-2xl text-slate-400 italic">"{{ resumeData.summary }}"</p>
          </div>
        </div>

        <!-- Experience -->
        <div class="mb-10">
          <div class="prompt-row">
            <span class="prompt">sajib@dev:~$</span>
            <span class="command-text">cat experience.md</span>
          </div>
          <div class="mt-4 space-y-8 pl-4 border-l border-slate-800">
            <div v-for="exp in resumeData.experience" :key="exp.company">
              <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <span class="text-white font-bold text-lg">[{{ exp.company }}]</span>
                <span class="text-terminal-secondary text-xs uppercase">{{ exp.period }}</span>
              </div>
              <p class="text-indigo-400 font-medium mb-3"># {{ exp.role }}</p>
              <ul class="space-y-2 text-slate-400">
                <li v-for="point in exp.points" :key="point" class="flex gap-2">
                  <span class="text-terminal-accent">√</span> {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="mb-10">
          <div class="prompt-row">
            <span class="prompt">sajib@dev:~$</span>
            <span class="command-text">ls -R skills/</span>
          </div>
          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-4">
            <div v-for="skill in resumeData.skills" :key="skill.category">
              <h3 class="text-terminal-secondary font-bold mb-2 uppercase text-xs tracking-tighter">{{ skill.category }}</h3>
              <div class="flex flex-wrap gap-x-4 gap-y-1">
                <span v-for="item in skill.items" :key="item" class="text-slate-300 hover:text-terminal-accent cursor-pointer transition">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects -->
        <div class="mb-10">
          <div class="prompt-row">
            <span class="prompt">sajib@dev:~$</span>
            <span class="command-text">./display_projects.sh</span>
          </div>
          <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 pl-4">
            <div v-for="proj in resumeData.projects" :key="proj.name" class="p-4 border border-slate-800 bg-[#0a0a0a] hover:border-indigo-500/50 transition">
              <h3 class="font-bold text-indigo-400 mb-2">{{ proj.name }}</h3>
              <p class="text-slate-400 text-xs mb-4">{{ proj.desc }}</p>
              <a v-if="proj.link" :href="proj.link" target="_blank" class="text-terminal-accent text-xs underline decoration-dotted">Live Demo</a>
            </div>
          </div>
        </div>

        <!-- Socials -->
        <div class="mb-10">
          <div class="prompt-row">
            <span class="prompt">sajib@dev:~$</span>
            <span class="command-text">links --all</span>
          </div>
          <div class="mt-4 flex flex-wrap gap-8 pl-4">
            <a v-for="social in resumeData.basics.socials" :key="social.name" :href="social.url" target="_blank" class="text-slate-400 hover:text-white flex items-center gap-2 transition group">
              <i :class="social.icon" class="group-hover:text-indigo-500"></i>
              <span>{{ social.name }}</span>
            </a>
          </div>
        </div>

        <!-- Final Prompt -->
        <div class="prompt-row">
          <span class="prompt">sajib@dev:~$</span>
          <span class="cursor"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import './style.css';

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

.prompt-row {
  @apply flex items-center mb-1;
}
</style>
