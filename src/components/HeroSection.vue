<script setup lang="ts">
import { ref, onMounted } from 'vue'

const roles = ['Front-end Developer', 'Vue.js Enthusiast', 'UI/UX Lover']
const currentRole = ref(0)
const displayText = ref('')

onMounted(() => {
  typeRole()
  setInterval(() => {
    currentRole.value = (currentRole.value + 1) % roles.length
    displayText.value = ''
    typeRole()
  }, 4000)
})

function typeRole() {
  const full = roles[currentRole.value]!
  let i = 0
  const interval = setInterval(() => {
    displayText.value = full.slice(0, i + 1)
    i++
    if (i >= full.length) clearInterval(interval)
  }, 80)
}
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-neon-500/10 animate-gradient" />
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-float" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl animate-float" style="animation-delay: -3s;" />
    </div>

    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <div class="reveal visible">
        <p class="text-accent-400 font-medium text-lg mb-4 tracking-widest uppercase">Привет, меня зовут</p>
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-tight">
          Тимофей
        </h1>
        <div class="h-12 md:h-16 flex items-center justify-center mb-8">
          <span class="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-neon-400">
            {{ displayText }}
            <span class="animate-pulse">|</span>
          </span>
        </div>
      </div>

      <div class="reveal visible reveal-delay-2 flex flex-wrap gap-4 justify-center">
        <a href="#about" class="group relative px-8 py-3.5 bg-accent-500 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30">
          <span class="relative z-10">Узнать больше</span>
          <div class="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <a href="#contact" class="px-8 py-3.5 border border-gray-500 text-gray-200 font-medium rounded-full hover:bg-white/5 hover:border-accent-400 hover:text-accent-400 transition-all duration-300">
          Связаться
        </a>
      </div>

      <div class="mt-16 reveal visible reveal-delay-4">
        <a href="#about" class="inline-block animate-bounce">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
