<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Experience {
  period: string
  title: string
  company: string
  description: string
  tags: string[]
}

const experiences: Experience[] = [
  {
    period: '2025 — Настоящее время',
    title: 'Front-end разработчик (Стажёр)',
    company: 'VibeTech Solutions',
    description: 'Разработка и поддержка клиентской части SPA-приложений на Vue 3 с Composition API. Интеграция REST API, управление состоянием через Pinia, настройка маршрутизации с Vue Router. Участие в code review и внедрение Tailwind CSS в существующие проекты.',
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS'],
  },
  {
    period: '2024 — 2025',
    title: 'Junior Front-end Developer (Фриланс)',
    company: 'Self-employed',
    description: 'Создание лендингов, корпоративных сайтов и небольших веб-приложений на заказ. Работа с Vue.js, адаптивная вёрстка, подключение анимаций и оптимизация производительности.',
    tags: ['Vue.js', 'JavaScript', 'HTML/CSS', 'Git'],
  },
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
  const el = document.getElementById('experience')
  if (el) observer.observe(el)
})
</script>

<template>
  <section id="experience" class="py-24 md:py-32 px-4 relative">
    <div class="max-w-4xl mx-auto">
      <div :class="['text-center mb-16', visible ? 'animate-fade-in-up' : 'opacity-0']">
        <p class="text-accent-400 font-medium tracking-widest uppercase text-sm mb-3">Опыт</p>
        <h2 class="text-3xl md:text-5xl font-bold text-white">
          Где я <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-neon-400">работал</span>
        </h2>
      </div>

      <div class="relative">
        <div class="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-neon-500/30 to-transparent" />

        <div
          v-for="(exp, i) in experiences"
          :key="i"
          :class="[
            'relative pl-12 md:pl-20 pb-16 last:pb-0',
            visible ? 'animate-fade-in-up' : 'opacity-0'
          ]"
          :style="{ animationDelay: `${i * 150}ms` }"
        >
          <div class="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-dark-800 border-2 border-accent-500 z-10" />
          <div class="absolute left-[9px] md:left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 z-20 animate-pulse" />

          <span class="inline-block text-sm text-accent-400 font-medium mb-2">{{ exp.period }}</span>
          <h3 class="text-xl md:text-2xl font-bold text-white mb-1">{{ exp.title }}</h3>
          <p class="text-neon-400 font-medium mb-3">{{ exp.company }}</p>
          <p class="text-gray-400 leading-relaxed mb-4">{{ exp.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in exp.tags"
              :key="tag"
              class="px-3 py-1 text-xs font-medium rounded-full bg-accent-500/10 text-accent-300 border border-accent-500/20"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
