<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen bg-dark-900 font-red-hat">
    <header
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-dark-900/80 backdrop-blur-lg border-b border-dark-600/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      ]"
    >
      <div class="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <a href="#hero" class="text-xl font-bold text-white hover:text-accent-400 transition-colors">
          <span class="text-accent-400">&lt;</span>
          Timofey
          <span class="text-accent-400">/&gt;</span>
        </a>

        <nav class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="text-sm text-gray-300 hover:text-accent-400 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-accent-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            {{ item.label }}
          </a>
        </nav>

        <button
          class="md:hidden relative w-8 h-8 flex items-center justify-center"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Menu"
        >
          <div class="w-6 flex flex-col gap-1.5">
            <span
              :class="[
                'block h-0.5 bg-white transition-all duration-300',
                isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
              ]"
            />
            <span
              :class="[
                'block h-0.5 bg-white transition-all duration-300',
                isMobileMenuOpen ? 'opacity-0' : ''
              ]"
            />
            <span
              :class="[
                'block h-0.5 bg-white transition-all duration-300',
                isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
              ]"
            />
          </div>
        </button>
      </div>

      <div
        :class="[
          'md:hidden overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        ]"
      >
        <div class="px-4 py-4 bg-dark-800/95 backdrop-blur-lg border-t border-dark-600/50 flex flex-col gap-3">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="text-gray-300 hover:text-accent-400 transition-colors py-2"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </header>

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <footer class="py-8 border-t border-dark-600/50">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Тимофей. Сделано с
          <span class="text-red-400">&hearts;</span>
        </p>
      </div>
    </footer>
  </div>
</template>
