<template>
  <div class="w-screen bg-white">
    <section class="max-w-[1440px] mx-auto md:px-17.5 px-4 py-20
    mt-20
    ">
      <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col lg:flex-row">
          <div class="max-w-[500px]">
            <h1 class="text-[#1B2534] font-extrabold 
              text-[32px]
              lg:text-[54px] capitalize">
              Lightning fast & super <span class="!text-[#29A0F5]">powerful</span>
            </h1>

            <p class="text-base mt-2 md:mt-0 lg:text-[20px] leading-[150%] text-[#606060]">
              Our blog platform is designed for creators who want speed, simplicity, and full control.
              Publish articles instantly, engage your audience, and grow your brand — all in one place.
            </p>

            <div>
            </div>

            <div v-for="feature of features" :key="feature.id"
              class="flex gap-x-2 lg:gap-x-10 mt-6">
              <img :src="feature.src" alt="features icon" />
              <div>
                <h3 class="font-bold text-[#1B2534] text-[20px] lg:text-[30px]">{{ feature.heading }}</h3>
                <p class="text-base lg:text-[20px] text-[#606060]">{{ feature.para }}</p>
              </div>
            </div>
          </div>
          <img src="/images/showcase-features/showcase-feature-img.png" alt="image showing people working together" 
            class="lg:max-w-[691px] lg:max-h-[513px] md:mt-0 mt-10"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    id: 1,
    src: '/images/showcase-features/showcase-feature-one.svg',
    heading: 'All-in-One Platform',
    para: 'Create, edit, and publish posts'
  },
  {
    id: 2,
    src: '/images/showcase-features/showcase-feature-two.svg',
    heading: 'Concrete Security',
    para: 'Your data and content are fully protected'
  }
]
</script>
