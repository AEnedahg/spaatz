<template>
  <div class="bg-gradient-to-r from-[#89D8F3] to-[#B1F9F3] h-[89px] lg:px-17.5 lg:py-7.5 px-4 py-4 w-screen">
    <header class="flex items-center h-full justify-between lg:hidden relative
    ">
      <NuxtLink to="/">
        <div class="flex items-center gap-x-2">
            <img src="/images/logo-spaatz.png" alt="logo" class="size-[60px]"/>
            <h4 class="text-[24px] font-semibold text-[#1B2534]">Spaatz</h4>
        </div>
      </NuxtLink>

      <div 
        @click="toggleMenu"
        class="w-8 *:h-[3px] *:bg-white flex h-5 flex-col justify-between items-end cursor-pointer z-[60]"
      >
        <span ref="hamOne" class="w-full"></span>
        <span ref="hamTwo" class="w-2/3"></span>
        <span ref="hamThree" class="w-1/3"></span>
      </div>

      <nav 
        ref="mobileNav"
        class="fixed top-0 right-0 w-[75%] h-screen bg-[#89D8F3] flex flex-col items-center px-8 z-[50]"
      >
        <div class="flex flex-col gap-y-6 text-2xl text-white mt-35 *:text-right *:cursor-pointer">
          <NuxtLink to="/" @click="closeMenu">Showcase</NuxtLink>
          <NuxtLink to="/blog" @click="closeMenu">Blog</NuxtLink>
          <NuxtLink to="/developers" @click="closeMenu">Developers</NuxtLink>
        </div>
      </nav>
    </header>

    <header class="lg:flex items-center h-full justify-between hidden max-w-[1440px] mx-auto">
      <NuxtLink to="/">
        <div class="flex items-center gap-x-2">
            <img src="/images/logo-spaatz.png" alt="logo" class="size-[60px]"/>
            <h4 class="text-[24px] font-semibold text-[#1B2534]">Spaatz</h4>
        </div>
      </NuxtLink>
      <div class="flex gap-x-6 text-[#1B2534] text-base">
        <NuxtLink to="/">Showcase</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/developers">Developers</NuxtLink>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const { $gsap } = useNuxtApp()

const mobileNav = ref(null)
const openMobileNav = ref(false)
const hamOne = ref(null)
const hamTwo = ref(null)
const hamThree = ref(null)

onMounted(() => {
  if (mobileNav.value) {
    $gsap.set(mobileNav.value, {x: 0, display: 'none' })
  }
})

function toggleMenu() {
  openMobileNav.value = !openMobileNav.value

  if (openMobileNav.value) {
    $gsap.set(mobileNav.value, { display: 'flex' })
    $gsap.to(mobileNav.value, { x: 0, duration: 0.8, ease: 'power3.out' })

    $gsap.to(hamOne.value, { rotate: 45, y: 6, duration: 0.3 })
    $gsap.to(hamTwo.value, { opacity: 0, duration: 0.3 })
    $gsap.to(hamThree.value, { rotate: -45, y: -10, width: '100%', duration: 0.3 })
  } else {
    closeMenu()
  }
}

function closeMenu() {
  openMobileNav.value = false
  $gsap.to(mobileNav.value, {
    x: '100%',
    duration: 0.8,
    ease: 'power3.in',
    onComplete: () => $gsap.set(mobileNav.value, { display: 'none' })
  })

  $gsap.to(hamOne.value, { rotate: 0, y: 0, duration: 0.3 })
  $gsap.to(hamTwo.value, { opacity: 1, duration: 0.3 })
  $gsap.to(hamThree.value, { rotate: 0, y: 0, width: '33%', duration: 0.3 })
}
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: #29A0F5;
  font-weight: 600;
}

a {
  transition: color 0.3s ease;
}
</style>