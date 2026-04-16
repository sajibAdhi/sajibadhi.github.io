<script setup lang="ts">
import { ref } from 'vue'

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
    { category: 'Languages', items: ['PHP', 'JavaScript', 'TypeScript'], ext: '.php' },
    { category: 'Frameworks', items: ['Laravel', 'CodeIgniter', 'Vue.js', 'jQuery'], ext: '.ts' },
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'Tailwind', 'Bootstrap'], ext: '.css' },
    { category: 'Database', items: ['MySQL', 'MariaDB'], ext: '.sql' },
    { category: 'DevOps', items: ['Docker', 'Git', 'Linux', 'VPS'], ext: '.yaml' }
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

const activeFile = ref('About.vue')
const openFiles = ref(['About.vue', 'Experience.ts', 'Projects.json'])

const setFile = (file: string) => {
  activeFile.value = file
  if (!openFiles.value.includes(file)) {
    openFiles.value.push(file)
  }
}

const closeFile = (file: string) => {
  openFiles.value = openFiles.value.filter(f => f !== file)
  if (activeFile.value === file) {
    activeFile.value = openFiles.value[openFiles.value.length - 1] || 'About.vue'
  }
}
</script>

<template>
  <div class="h-screen flex flex-col font-sans">
    <div class="ide-window flex-grow">
      
      <!-- IDE Header -->
      <div class="bg-ide-activity px-4 py-2 flex items-center justify-between border-b border-ide-border text-xs text-slate-400">
        <div class="flex items-center gap-4">
          <span class="font-bold text-white">SAJIB_IDE</span>
          <div class="flex gap-4">
            <span class="hover:text-white cursor-default">File</span>
            <span class="hover:text-white cursor-default">Edit</span>
            <span class="hover:text-white cursor-default">Selection</span>
            <span class="hover:text-white cursor-default">Go</span>
            <span class="hover:text-white cursor-default">Run</span>
            <span class="hover:text-white cursor-default">Terminal</span>
            <span class="hover:text-white cursor-default">Help</span>
          </div>
        </div>
        <div>{{ resumeData.basics.name }} - Portfolio</div>
      </div>

      <div class="flex flex-grow overflow-hidden">
        <!-- Activity Bar -->
        <div class="activity-bar">
          <div class="text-white text-xl cursor-pointer hover:text-indigo-500 transition"><i class="fas fa-copy"></i></div>
          <div class="text-slate-500 text-xl cursor-pointer hover:text-white transition"><i class="fas fa-search"></i></div>
          <a :href="resumeData.basics.socials.find(s => s.name === 'GitHub')?.url" target="_blank" class="text-slate-500 text-xl cursor-pointer hover:text-white transition"><i class="fab fa-github"></i></a>
          <a :href="resumeData.basics.socials.find(s => s.name === 'LinkedIn')?.url" target="_blank" class="text-slate-500 text-xl cursor-pointer hover:text-white transition"><i class="fab fa-linkedin"></i></a>
          <div class="mt-auto text-slate-500 text-xl cursor-pointer hover:text-white transition pb-4"><i class="fas fa-cog"></i></div>
        </div>

        <!-- Sidebar -->
        <div class="sidebar py-4">
          <div class="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Explorer: SAJIB_DEV</div>
          
          <div class="mb-6">
            <div class="px-4 py-1 text-xs font-bold text-white flex items-center gap-2 cursor-pointer bg-white/5">
              <i class="fas fa-chevron-down text-[8px]"></i> SAJIB_PORTFOLIO
            </div>
            <div class="file-tree-item" :class="{active: activeFile === 'About.vue'}" @click="setFile('About.vue')">
              <i class="fab fa-vuejs text-green-500"></i> About.vue
            </div>
            <div class="file-tree-item" :class="{active: activeFile === 'Experience.ts'}" @click="setFile('Experience.ts')">
              <i class="fab fa-js text-yellow-500"></i> Experience.ts
            </div>
            <div class="file-tree-item" :class="{active: activeFile === 'Projects.json'}" @click="setFile('Projects.json')">
              <i class="fas fa-code text-indigo-500"></i> Projects.json
            </div>
          </div>

          <div>
            <div class="px-4 py-1 text-[10px] font-bold text-slate-500 uppercase flex items-center gap-2">
              <i class="fas fa-chevron-down text-[8px]"></i> TECHNICAL_SKILLS
            </div>
            <div v-for="cat in resumeData.skills" :key="cat.category">
              <div class="px-6 py-1 text-[10px] font-bold text-slate-600 uppercase flex items-center gap-2">
                 <i class="fas fa-folder-open text-[8px]"></i> {{ cat.category }}
              </div>
              <div v-for="skill in cat.items" :key="skill" class="px-8 py-0.5 text-xs text-slate-400 hover:text-white cursor-default flex items-center gap-2">
                <span class="text-[8px] text-slate-700">#</span> {{ skill }}{{ cat.ext }}
              </div>
            </div>
          </div>
        </div>

        <!-- Editor Area -->
        <div class="editor-area">
          <!-- Tabs -->
          <div class="flex bg-ide-sidebar border-b border-ide-border overflow-x-auto scrollbar-hide">
            <div v-for="file in openFiles" :key="file" 
                 class="editor-tab group" 
                 :class="{active: activeFile === file}"
                 @click="activeFile = file">
              <i v-if="file.endsWith('.vue')" class="fab fa-vuejs text-green-500"></i>
              <i v-else-if="file.endsWith('.ts')" class="fab fa-js text-yellow-500"></i>
              <i v-else class="fas fa-code text-indigo-500"></i>
              {{ file }}
              <i class="fas fa-times text-[10px] opacity-0 group-hover:opacity-100 hover:text-white ml-2 transition" @click.stop="closeFile(file)"></i>
            </div>
          </div>

          <!-- Breadcrumbs -->
          <div class="px-4 py-1 text-[11px] text-slate-500 flex items-center gap-2 border-b border-ide-border">
            <span>portfolio</span> <i class="fas fa-chevron-right text-[8px]"></i>
            <span>src</span> <i class="fas fa-chevron-right text-[8px]"></i>
            <span class="text-slate-300">{{ activeFile }}</span>
          </div>

          <!-- Code Content -->
          <div class="flex-grow overflow-y-auto p-4 font-mono bg-[#1e1e1e]">
            <!-- About.vue Content -->
            <div v-if="activeFile === 'About.vue'" class="max-w-4xl">
              <div class="code-line"><span class="line-number">1</span><span class="text-ide-keyword">&lt;template&gt;</span></div>
              <div class="code-line"><span class="line-number">2</span><span class="pl-4 text-ide-keyword">&lt;div</span> <span class="text-ide-string">class="profile"</span><span class="text-ide-keyword">&gt;</span></div>
              <div class="code-line"><span class="line-number">3</span><span class="pl-8 text-white text-2xl font-bold">I'm {{ resumeData.basics.name }}</span></div>
              <div class="code-line"><span class="line-number">4</span><span class="pl-8 text-terminal-accent font-semibold">{{ resumeData.basics.headline }}</span></div>
              <div class="code-line"><span class="line-number">5</span><span class="pl-4 text-ide-keyword">&lt;/div&gt;</span></div>
              <div class="code-line"><span class="line-number">6</span><span class="text-ide-comment">// {{ resumeData.summary }}</span></div>
              <div class="code-line"><span class="line-number">7</span><span class="text-ide-keyword">&lt;/template&gt;</span></div>
              
              <div class="mt-12 pl-12">
                <div class="relative inline-block">
                  <div class="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full"></div>
                  <img :src="resumeData.basics.profilePic" class="w-64 h-64 object-cover border border-ide-border grayscale hover:grayscale-0 transition-all duration-700">
                </div>
              </div>
            </div>

            <!-- Experience.ts Content -->
            <div v-if="activeFile === 'Experience.ts'">
              <div v-for="(exp, idx) in resumeData.experience" :key="idx" class="mb-12">
                <div class="code-line"><span class="line-number">{{ (idx * 6) + 1 }}</span><span class="text-ide-keyword">const</span> <span class="text-white">{{ exp.company.replace(/\s+/g, '') }}</span> = {</div>
                <div class="code-line"><span class="line-number">{{ (idx * 6) + 2 }}</span><span class="pl-4 text-ide-keyword">role:</span> <span class="text-ide-string">"{{ exp.role }}"</span>,</div>
                <div class="code-line"><span class="line-number">{{ (idx * 6) + 3 }}</span><span class="pl-4 text-ide-keyword">period:</span> <span class="text-ide-string">"{{ exp.period }}"</span>,</div>
                <div class="code-line"><span class="line-number">{{ (idx * 6) + 4 }}</span><span class="pl-4 text-ide-keyword">achievements:</span> [</div>
                <div v-for="(point, pIdx) in exp.points" :key="pIdx" class="code-line">
                  <span class="line-number">{{ (idx * 6) + 5 + pIdx }}</span>
                  <span class="pl-8 text-ide-string">"{{ point }}"</span>,
                </div>
                <div class="code-line"><span class="line-number">{{ (idx * 6) + exp.points.length + 5 }}</span>}</div>
              </div>
            </div>

            <!-- Projects.json Content -->
            <div v-if="activeFile === 'Projects.json'">
               <div class="code-line"><span class="line-number">1</span>[</div>
               <div v-for="(proj, idx) in resumeData.projects" :key="idx" class="pl-4 mb-4">
                  <div class="code-line"><span class="line-number">{{ (idx * 5) + 2 }}</span>{</div>
                  <div class="code-line"><span class="line-number">{{ (idx * 5) + 3 }}</span><span class="pl-4 text-ide-keyword">"name":</span> <span class="text-ide-string">"{{ proj.name }}"</span>,</div>
                  <div class="code-line"><span class="line-number">{{ (idx * 5) + 4 }}</span><span class="pl-4 text-ide-keyword">"desc":</span> <span class="text-ide-string">"{{ proj.desc }}"</span>,</div>
                  <div v-if="proj.link" class="code-line">
                    <span class="line-number">{{ (idx * 5) + 5 }}</span><span class="pl-4 text-ide-keyword">"url":</span> <a :href="proj.link" target="_blank" class="text-indigo-400 hover:underline">"{{ proj.link }}"</a>
                  </div>
                  <div class="code-line"><span class="line-number">{{ (idx * 5) + 6 }}</span>},</div>
               </div>
               <div class="code-line"><span class="line-number">99</span>]</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Status Bar -->
      <div class="status-bar">
        <div class="flex items-center gap-4">
          <div class="hover:bg-white/10 px-2 cursor-pointer flex items-center gap-1">
            <i class="fas fa-code-branch"></i> main*
          </div>
          <div class="hover:bg-white/10 px-2 cursor-pointer flex items-center gap-1">
             <i class="fas fa-sync-alt"></i> Synchronized
          </div>
          <div class="hover:bg-white/10 px-2 cursor-pointer">
            0 Δ 0 ⊗ 1 ⚠
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="hover:bg-white/10 px-2 cursor-pointer uppercase">UTF-8</div>
          <div class="hover:bg-white/10 px-2 cursor-pointer">Vue.js</div>
          <div class="hover:bg-white/10 px-2 cursor-pointer flex items-center gap-1">
             <i class="fas fa-check"></i> Prettier
          </div>
          <div class="hover:bg-white/10 px-2 cursor-pointer bg-white/20">
             Sajib Adhikary
          </div>
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
</style>
