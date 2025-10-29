<template>
  <div class="w-screen bg-[#1B2534] overflow-hidden">
    <section class="xl:max-w-[1440px] max-w-[640px] mx-auto md:px-17.5 md:pt-20 md:pb-30 px-4 py-20">
      <h1 class="text-white font-extrabold text-[32px] lg:text-[55px] flex gap-x-4 mb-15">
        Feedback
        <img src="/images/showcase-feedback/full-star.svg" alt="full star icon" />
      </h1>

      <div class="relative min-h-[1000px] lg:min-h-[500px] overflow-hidden">
        <div class="relative">
          <transition-group name="slide-fade" tag="div">
            <div
              v-for="testimonial in [activeTestimonial]"
              :key="testimonial.id"
              ref="testimonialEl"
              class="flex flex-col xl:flex-row items-center justify-between absolute top-0 left-0 w-full"
            >
              <div class="xl:w-1/2 space-y-5">
                <p class="text-[30px]" v-html="testimonial.text"></p>
                <h5 class="text-white font-bold text-[30px]">{{ testimonial.company }}</h5>
                <small class="text-[#ABABAB] text-[18px] font-semibold">{{ testimonial.rating }}</small>
                <div class="flex gap-x-3 mt-4" v-html="testimonial.stars"></div>
              </div>
              <img
                :src="testimonial.image"
                :alt="testimonial.alt"
                class="xl:w-1/2 rounded-[15%] max-h-[419px] max-w-[425px] object-cover
                lg:mt-0 mt-10 rounded-[20px]
                "
              />
            </div>
          </transition-group>
        </div>
      </div>

      <hr class="text-white/20 my-12" />

      <div class="flex justify-center gap-4 mb-8">
        <button 
          @click="prevTestimonial" 
          class="bg-[#283343] hover:bg-[#374151] text-white p-3 rounded-full transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="nextTestimonial" 
          class="bg-[#283343] hover:bg-[#374151] text-white p-3 rounded-full transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div class="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-4">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          @click="setActive(testimonial.id)"
          :class="[
            'p-4 flex items-center rounded-[20px] cursor-pointer transition-all duration-300 gap-6',
            activeId === testimonial.id ? 'bg-[#283343]' : 'bg-[#1E293B] hover:bg-[#283343]'
          ]"
        >
          <img
            :src="testimonial.image"
            :alt="testimonial.alt"
            class="size-[70px] rounded-full object-cover"
          />
          <div class="space-y-1">
            <h6 class="text-[20px] font-bold text-white">{{ testimonial.name }}</h6>
            <p class="text-[#ABABAB] text-[16px]">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const testimonials = [
  {
    id: 1,
    text: `<q class='text-[30px] text-white'><span class="text-white font-bold">We were amazed at how easy it was to make our</span> <span class='text-[#FFAD32] font-bold'>yozgat</span> in a few hours without knowing how to code, and at how the Software has modernized our <span class="text-white font-bold">workflow</span>.</q>`,
    company: 'TeleTech',
    rating: '(4.5 / 5 Rating)',
    name: 'Mincya Park',
    role: 'Front-End Developer',
    stars: `
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/half-star.svg" alt="half star" />
    `,
    image: '/images/showcase-feedback/mincya-park.png',
    alt: 'image of mincya park'
  },
  {
    id: 2,
    text: `<q class='text-[30px] text-white'><span class="text-white font-bold">Using this platform has completely transformed the way our team collaborates.</span> The <span class='text-[#FFAD32] font-bold'>real-time editing</span> and publishing tools make it effortless to manage content and share ideas <span class="text-white font-bold">seamlessly</span>.</q>`,
    company: 'BrightWorks Media',
    rating: '(5.0 / 5 Rating)',
    name: 'Daniel Serrano',
    role: 'Senior Designer',
    stars: `
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
    `,
    image: '/images/showcase-feedback/daniel-serrano.png',
    alt: 'image of daniel serrano'
  },
  {
    id: 3,
    text: `<q class='text-[30px] text-white'><span class="text-white font-bold">The interface is clean, intuitive, and lightning-fast.</span> We've saved countless hours in our publishing workflow thanks to its <span class='text-[#FFAD32] font-bold'>automation features</span> and easy <span class="text-white font-bold">integrations</span>.</q>`,
    company: 'NextGen Digital',
    rating: '(4.8 / 5 Rating)',
    name: 'Nattasha Powl',
    role: 'Project Manager',
    stars: `
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/full-star.svg" alt="full star" />
      <img src="/images/showcase-feedback/half-star.svg" alt="half star" />
    `,
    image: '/images/showcase-feedback/nattasha-powl.png',
    alt: 'image of nattasha-powl'
  }
]

const activeId = ref(1)
const testimonialEl = ref([])
const autoSlideInterval = ref(null)

const activeTestimonial = computed(() =>
  testimonials.find(t => t.id === activeId.value)
)

function setActive(id) {
  if (id !== activeId.value) {
    const currentEl = testimonialEl.value[0]
    if (currentEl) {
      gsap.to(currentEl, {
        x: -100,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          activeId.value = id
        }
      })
    } else {
      activeId.value = id
    }
  }
  resetAutoSlide()
}

function nextTestimonial() {
  const currentIndex = testimonials.findIndex(t => t.id === activeId.value)
  const nextIndex = (currentIndex + 1) % testimonials.length
  setActive(testimonials[nextIndex].id)
}

function prevTestimonial() {
  const currentIndex = testimonials.findIndex(t => t.id === activeId.value)
  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
  setActive(testimonials[prevIndex].id)
}

function startAutoSlide() {
  autoSlideInterval.value = setInterval(() => {
    nextTestimonial()
  }, 4000)
}

function resetAutoSlide() {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value)
  }
  startAutoSlide()
}

watch(activeId, async () => {
  await nextTick()
  const el = testimonialEl.value[0]
  if (el) {
    gsap.set(el, { x: 100, opacity: 0 })
    gsap.to(el, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out'
    })
  }
})

onMounted(() => {
  const el = testimonialEl.value[0]
  if (el) {
    gsap.fromTo(
      el,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    )
  }
  startAutoSlide()
})

onUnmounted(() => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value)
  }
})
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>