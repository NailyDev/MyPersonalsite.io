<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Project {
  title: string
  description: string
  tags: string[]
  color: string
}

const projects: Project[] = [
  {
    title: 'TaskFlow',
    description: 'SPA для управления задачами с drag-and-drop, фильтрацией и командной работой в реальном времени.',
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'Supabase'],
    color: '#6366f1',
  },
  {
    title: 'WeatherVue',
    description: 'Прогноз погоды с красивой анимацией, геолокацией и поддержкой избранных городов.',
    tags: ['Vue 3', 'OpenWeather API', 'Chart.js'],
    color: '#06b6d4',
  },
  {
    title: 'ShopEasy',
    description: 'Pet-проект интернет-магазина с корзиной, фильтрацией товаров и адаптивным дизайном.',
    tags: ['Nuxt 3', 'Tailwind CSS', 'Pinia'],
    color: '#22d3ee',
  },
  {
    title: 'DevPortfolio',
    description: 'Персональное портфолио с анимациями, тёмной темой и плавной навигацией.',
    tags: ['Vue 3', 'Tailwind CSS', 'GSAP'],
    color: '#818cf8',
  },
]

const visible = ref(false)
const hoveredIndex = ref<number | null>(null)

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
    { threshold: 0.1 }
  )
  const el = document.getElementById('projects')
  if (el) observer.observe(el)
})
</script>

<template>
  <section id="projects" class="py-24 md:py-32 px-4 bg-dark-800/30 relative">
    <div class="max-w-6xl mx-auto">
      <div :class="['text-center mb-16', visible ? 'animate-fade-in-up' : 'opacity-0']">
        <p class="text-accent-400 font-medium tracking-widest uppercase text-sm mb-3">Проекты</p>
        <h2 class="text-3xl md:text-5xl font-bold text-white">
          Мои <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-neon-400">работы</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          :class="[
            'group relative rounded-2xl overflow-hidden border border-dark-500/50 bg-dark-700/40 backdrop-blur-sm transition-all duration-500',
            visible ? 'animate-fade-in-up' : 'opacity-0'
          ]"
          :style="{ animationDelay: `${i * 100}ms` }"
          @mouseenter="hoveredIndex = i"
          @mouseleave="hoveredIndex = null"
        >
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :style="{
              background: `radial-gradient(600px circle at 50% 0%, ${project.color}15, transparent 70%)`
            }"
          />

          <div class="relative p-6 md:p-8">
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
              :style="{ backgroundColor: project.color + '20' }"
            >
              <span :style="{ color: project.color }">{{ i + 1 }}</span>
            </div>

            <h3 class="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-400 group-hover:to-neon-400 transition-all duration-300">
              {{ project.title }}
            </h3>
            <p class="text-gray-400 leading-relaxed mb-5">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2.5 py-1 text-xs font-medium rounded-md bg-dark-600/80 text-gray-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div
            class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-full group-hover:translate-y-0"
            style="transition: opacity 0.5s, transform 0.5s;"
          />
        </div>
      </div>
    </div>
  </section>
</template>
