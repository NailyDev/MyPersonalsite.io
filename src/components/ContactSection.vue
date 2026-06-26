<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
}

const socials: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/NailyDev',
    icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
    color: '#fff',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/NailyDev',
    icon: 'M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.127.087.496.108.629.192 1.216 1.03 6.253 1.456 8.696.18 1.028.536 1.373.861 1.406.731.074 1.285-.481 1.999-.943.412-.266.869-.56 1.4-.883.995-.603 1.845-1.135 2.212-1.54.05-.054.1-.104.098-.174-.003-.075-.092-.126-.232-.13-.803-.023-2.634-.494-3.996-.808-2.592-.598-3.086-.713-3.144-.727a.324.324 0 00-.15.004c-.19.073-.202.282-.202.282s.013.007.013.01c0 .003-.004.006-.007.009-.466.54-1.06 1.069-1.666 1.556-.278.223-.533.416-.746.563-.424.293-.819.203-1.04-.043-.313-.348-.545-.958-.71-1.572-.088-.326-.164-.659-.221-.94-.058-.288-.065-.491-.03-.646.182-.801.765-1.288 1.443-1.664.127-.07.256-.14.382-.213.706-.409 1.515-.878 1.981-1.465.168-.212.319-.513.217-.815-.091-.27-.363-.366-.6-.366-.133 0-.274.016-.418.033-.246.03-.575.075-.884.118-1.28.18-2.717.38-3.54.363-.56-.012-.95-.173-1.227-.349-.393-.25-.573-.496-.577-.503-.02-.023-.02-.059-.003-.088a.74.74 0 01.074-.096c.006-.007.013-.012.02-.02.524-.521 1.866-.975 1.866-.975s3.256-1.324 6.454-2.119c.64-.166 1.73-.366 2.11-.342z',
    color: '#24A1DE',
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
    { threshold: 0.3 }
  )
  const el = document.getElementById('contact')
  if (el) observer.observe(el)
})
</script>

<template>
  <section id="contact" class="py-24 md:py-32 px-4 relative">
    <div class="max-w-3xl mx-auto text-center">
      <div :class="[visible ? 'animate-fade-in-up' : 'opacity-0']">
        <p class="text-accent-400 font-medium tracking-widest uppercase text-sm mb-3">Контакты</p>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Давайте <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-neon-400">создадим</span> что-то вместе
        </h2>
        <p class="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Если у вас есть интересный проект или просто хотите сказать привет — пишите!
        </p>

        <a
          href="mailto:timofey@example.com"
          class="group inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 mb-12"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="relative">Связаться по email</span>
        </a>
      </div>

      <div
        :class="[
          'flex justify-center gap-6',
          visible ? 'animate-fade-in-up' : 'opacity-0'
        ]"
        style="animation-delay: 200ms"
      >
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-dark-700/50 border border-dark-500/50 flex items-center justify-center hover:border-accent-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/10"
        >
          <svg
            class="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
            :style="{ color: social.color }"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path :d="social.icon" />
          </svg>
          <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {{ social.name }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
