<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Skill {
  name: string
  level: number
  color: string
}

const skills: Skill[] = [
  { name: 'Vue.js', level: 90, color: '#42b883' },
  { name: 'TypeScript', level: 85, color: '#3178c6' },
  { name: 'Nuxt.js', level: 80, color: '#00dc82' },
  { name: 'Tailwind CSS', level: 90, color: '#06b6d4' },
  { name: 'Pinia', level: 85, color: '#ffd859' },
  { name: 'JavaScript', level: 90, color: '#f7df1e' },
  { name: 'HTML & CSS', level: 95, color: '#e34f26' },
  { name: 'Git', level: 80, color: '#f05032' },
]

const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  const el = document.getElementById('skills')
  if (el) observer.observe(el)
})
</script>

<template>
  <section id="skills" class="py-24 md:py-32 px-4 bg-dark-800/50 relative">
    <div class="max-w-5xl mx-auto">
      <div :class="['text-center mb-16', visible ? 'animate-fade-in-up' : 'opacity-0']">
        <p class="text-accent-400 font-medium tracking-widest uppercase text-sm mb-3">Навыки</p>
        <h2 class="text-3xl md:text-5xl font-bold text-white">
          Мой <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-neon-400">стек</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <div
          v-for="(skill, i) in skills"
          :key="skill.name"
          :class="[
            'group bg-dark-700/50 backdrop-blur-sm rounded-xl p-5 border border-dark-500/50 hover:border-accent-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/5',
            visible ? 'animate-fade-in-up' : 'opacity-0'
          ]"
          :style="{ animationDelay: `${i * 80}ms` }"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="text-white font-medium">{{ skill.name }}</span>
            <span class="text-sm text-gray-400">{{ skill.level }}%</span>
          </div>
          <div class="h-2 bg-dark-600 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-1000 ease-out"
              :style="{
                width: visible ? `${skill.level}%` : '0%',
                backgroundColor: skill.color
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
