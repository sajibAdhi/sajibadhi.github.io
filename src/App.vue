<script setup lang="ts">
import { ref, onMounted } from 'vue'

const resumeData = {
  basics: {
    name: "Sajib Adhikary",
    headline: "System Intelligence Engineer",
    email: "tosajibadhi@gmail.com",
    profilePic: "https://storage.rxresu.me/clp9g04jwcp2k9hunw9ic54v9/pictures/clp9kq71300hxqo5qnzxexz40.jpg",
    socials: [
      { name: 'GitHub', url: 'https://github.com/sajibAdhi', icon: 'fab fa-github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sajibadhi/', icon: 'fab fa-linkedin' },
      { name: 'Website', url: 'https://hishabkitab.com/', icon: 'fas fa-globe' }
    ]
  },
  summary: "Software Engineer with 3+ years of experience in developing scalable ERP, accounting, and microfinance systems using Laravel and CodeIgniter. Specialized in backend intelligence and database optimization.",
  experience: [
    { company: "Ambala IT", role: "Software Engineer", period: "2024-PRESENT", status: "Active" },
    { company: "Ranks ITT", role: "Software Engineer", period: "2023-2024", status: "Archived" },
    { company: "Adova Soft", role: "Software Engineer", period: "2022-2023", status: "Archived" }
  ],
  skills: [
    { category: 'Frameworks', items: ['Laravel', 'CodeIgniter', 'Vue.js', 'jQuery'] },
    { category: 'Core Stack', items: ['PHP', 'JavaScript', 'TypeScript', 'MySQL'] },
    { category: 'DevOps', items: ['Docker', 'Linux', 'VPS', 'Git'] }
  ],
  projects: [
    { name: "HishabKitab ERP", type: "Intelligence Core", complexity: "High" },
    { name: "ZindaPark Banking", type: "Financial Protocol", complexity: "High" },
    { name: "Smart Invoice", type: "Cloud Logic", complexity: "Medium" }
  ]
}

const systemLog = ref(['>> INITIALIZING SYSTEM...', '>> LOADING NEURAL DATASET...', '>> ACCESS GRANTED.'])
const activeNode = ref('OVERVIEW')

onMounted(() => {
  setInterval(() => {
    const logs = ['ENCRYPTING PACKETS...', 'OPTIMIZING QUERY LOGS...', 'SYNCING DATA NODES...', 'MONITORING UPTIME...']
    systemLog.value.push(`>> ${logs[Math.floor(Math.random() * logs.length)]}`)
    if (systemLog.value.length > 5) systemLog.value.shift()
  }, 4000)
})
</script>

<template>
  <div class="min-h-screen neural-grid flex flex-col items-center justify-center p-4 md:p-8 font-sans overflow-x-hidden">
    
    <!-- Background Decor -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-indigo opacity-10 blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-purple opacity-10 blur-[120px]"></div>
    </div>

    <!-- HUD Interface Wrapper -->
    <div class="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in relative">
      
      <!-- Scanline FX -->
      <div class="fixed top-0 left-0 w-full h-screen pointer-events-none opacity-5 z-50">
        <div class="w-full h-[2px] bg-cyber-accent shadow-[0_0_20px_var(--color-cyber-accent)] animate-scan"></div>
      </div>

      <!-- Left Panel: Core Identification -->
      <div class="lg:col-span-4 space-y-6">
        <div class="glass-panel p-8 data-glow relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-24 h-24 bg-cyber-accent opacity-5 -mr-12 -mt-12 rounded-full blur-2xl"></div>
          
          <div class="flex flex-col items-center text-center">
            <div class="relative mb-6">
              <div class="absolute -inset-1 bg-gradient-to-tr from-cyber-accent to-cyber-purple opacity-20 rounded-full blur animate-pulse"></div>
              <img :src="resumeData.basics.profilePic" class="w-48 h-48 rounded-full object-cover border-2 border-cyber-accent/30 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700">
            </div>
            
            <span class="hud-label">Subject ID: SAJIB_0430</span>
            <h1 class="text-3xl font-bold text-white mb-2 glitch-text">{{ resumeData.basics.name }}</h1>
            <p class="text-sm font-mono text-cyber-accent tracking-widest uppercase mb-6">{{ resumeData.basics.headline }}</p>
            
            <div class="grid grid-cols-3 gap-4 w-full border-t border-white/5 pt-6">
              <a v-for="social in resumeData.basics.socials" :key="social.name" :href="social.url" target="_blank" class="flex flex-col items-center gap-2 group/icon">
                <i :class="social.icon" class="text-xl text-slate-500 group-hover/icon:text-cyber-accent transition"></i>
                <span class="text-[8px] uppercase tracking-tighter text-slate-600">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Skill Matrix -->
        <div class="glass-panel p-6 border-l-4 border-l-cyber-accent">
          <div class="module-header">
            <div class="header-dot"></div>
            <span class="hud-label m-0">Intelligence Matrix</span>
          </div>
          <div class="space-y-6">
            <div v-for="skill in resumeData.skills" :key="skill.category">
              <h3 class="text-[10px] font-bold text-white/40 mb-3 uppercase tracking-widest">{{ skill.category }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="item in skill.items" :key="item" class="px-2 py-1 bg-cyber-accent/5 border border-cyber-accent/10 rounded text-[10px] text-cyber-accent font-mono uppercase">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Panel: Neural Feed -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Summary Dashboard -->
        <div class="glass-panel p-8 relative overflow-hidden">
          <div class="absolute top-4 right-4 text-[40px] font-bold text-white/[0.02] font-mono select-none">DATA_OVERVIEW</div>
          <div class="module-header">
            <div class="header-dot"></div>
            <span class="hud-label m-0">System Summary</span>
          </div>
          <p class="text-lg text-slate-400 font-light leading-relaxed max-w-2xl italic">
            "{{ resumeData.summary }}"
          </p>
        </div>

        <!-- Experience Logs -->
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="exp in resumeData.experience" :key="exp.company" class="glass-panel p-6 border-t border-white/5 hover:border-cyber-accent/30 transition-all group">
            <div class="flex justify-between items-start mb-4">
              <div>
                <span class="hud-label">{{ exp.period }}</span>
                <h3 class="text-white font-bold">{{ exp.company }}</h3>
                <p class="text-xs text-cyber-accent/80 font-mono">{{ exp.role }}</p>
              </div>
              <div class="px-2 py-1 rounded text-[8px] border" :class="exp.status === 'Active' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-slate-500/10 border-slate-500/20 text-slate-400'">
                {{ exp.status }}
              </div>
            </div>
            <div class="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div class="h-full bg-cyber-accent" :style="{ width: exp.status === 'Active' ? '100%' : '60%' }"></div>
            </div>
          </div>
        </div>

        <!-- Project Protocol Grid -->
        <div class="glass-panel p-8">
          <div class="module-header">
            <div class="header-dot"></div>
            <span class="hud-label m-0">Operational Protocols (Projects)</span>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div v-for="proj in resumeData.projects" :key="proj.name" class="p-4 bg-black/40 border border-white/5 rounded-xl hover:bg-cyber-accent/5 transition-all">
              <div class="text-[8px] text-cyber-accent font-bold mb-1 tracking-widest">{{ proj.type }}</div>
              <h4 class="text-white font-bold text-sm mb-4">{{ proj.name }}</h4>
              <div class="flex items-center gap-1">
                <div v-for="i in 3" :key="i" class="w-1.5 h-1.5 rounded-full" :class="i <= (proj.complexity === 'High' ? 3 : 2) ? 'bg-cyber-accent' : 'bg-white/10'"></div>
                <span class="text-[8px] text-slate-500 ml-2 uppercase tracking-tighter">Complexity</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Status Bar -->
        <div class="bg-black/80 backdrop-blur px-6 py-4 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4 w-full md:w-auto overflow-hidden">
            <div class="animate-pulse w-2 h-2 rounded-full bg-cyber-accent"></div>
            <div class="font-mono text-[10px] text-slate-500 whitespace-nowrap overflow-hidden">
              <span v-for="(log, i) in systemLog" :key="i" class="mr-4 transition-all duration-500">{{ log }}</span>
            </div>
          </div>
          <div class="flex gap-4 items-center">
             <div class="text-[10px] text-slate-500 uppercase font-bold">Latency: <span class="text-green-500">12ms</span></div>
             <div class="text-[10px] text-slate-500 uppercase font-bold">Sync: <span class="text-cyber-accent">Complete</span></div>
          </div>
        </div>

      </div>
    </div>

    <!-- Footer Meta -->
    <div class="mt-12 text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em] flex flex-col items-center gap-4">
      <div class="w-24 h-[1px] bg-white/10"></div>
      © 2026 Sajib Intelligence Systems // Dhaka Division
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
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes scan {
  from { transform: translateY(0); }
  to { transform: translateY(100vh); }
}

.animate-scan {
  animation: scan 10s linear infinite;
}
</style>
