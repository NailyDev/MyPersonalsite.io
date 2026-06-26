<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
  const el = document.getElementById('about')
  if (el) observer.observe(el)
})
</script>

<template>
  <section id="about" class="py-24 md:py-32 px-4 relative">
    <div class="max-w-5xl mx-auto">
      <div
        :class="['flex flex-col md:flex-row gap-12 md:gap-16 items-center', visible ? 'animate-fade-in-up' : 'opacity-0']"
      >
        <div class="relative shrink-0">
          <div class="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-accent-500 to-neon-500 p-[2px]">
            <div class="w-full h-full rounded-2xl bg-dark-800 flex items-center justify-center overflow-hidden">
              <span class="text-7xl md:text-8xl font-black text-white">Т</span>
            </div>
          </div>
          <div class="absolute -bottom-3 -right-3 w-20 h-20 bg-accent-500/20 rounded-full blur-xl" />
        </div>

        <div class="flex-1">
          <p class="text-accent-400 font-medium tracking-widest uppercase text-sm mb-3">Обо мне</p>
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            Front-end <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-neon-400">разработчик</span>
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            Привет! Я Тимофей — front-end разработчик, увлечённый созданием современных, 
            быстрых и красивых веб-интерфейсов. Специализируюсь на экосистеме Vue.js, 
            но всегда открыт к новым технологиям и инструментам.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Постоянно учусь и развиваюсь, следую лучшим практикам и современным трендам 
            в веб-разработке. Стремлюсь писать чистый, поддерживаемый код и создавать 
            продукты, которые приносят пользу и радуют пользователей.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
