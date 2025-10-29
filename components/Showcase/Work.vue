<template>
  <div class="w-screen bg-[#F6F6F6]">
    <section class="xl:max-w-[1440px] max-w-[640px] mx-auto md:px-17.5 md:py-20 px-4 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-10 auto-rows-auto items-start">
        <div class="xl:col-span-2">
          <h1 class="text-[#1B2534] font-extrabold text-[32px] lg:text-[54px] capitalize">
            Work <span class="!text-[#29A0F5]">more easily</span> with everyone
          </h1>
          <p class="text-base mt-2 lg:text-[20px] leading-[150%] text-[#606060]">
            Our blog platform makes it easy for teams and creators to work together effortlessly.  
            Collaborate on articles, share ideas in real time, and manage content as a group.
          </p>
        </div>
        <div class="xl:col-span-2 flex flex-col xl:flex-row overflow-hidden rounded-[27px] xl:max-h-[277px]">
          <div class="bg-[#1B2534] px-[50px] py-[62px] flex flex-col items-center justify-center gap-y-2 lg:rounded-tl-[27px] 
          rounded-tr-[27px] rounded-tl-[27px] lg:rounded-tr-none">
            <img src="/images/showcase-work/work-from-anywhere-icon.svg" alt="work-icon" />
            <h4 class="text-white text-[32px] font-bold leading-[128%] text-center">Work from Anywhere</h4>
          </div>
          <img src="/images/showcase-work/work-from-anywhere-img.png" alt="people working together" />
        </div>
        <div class="bg-white rounded-[27px] px-[30px] py-[30px]">
          <h1 class="text-[28px] font-bold text-[#1B2534] mb-4">Important Tools</h1>
          <div class="flex gap-3 flex-wrap">
            <img v-for="tool in importantTools" :key="tool.id" :src="tool.src" alt="tool icon" />
          </div>
        </div>
        <div class="xl:col-span-2 bg-white rounded-[27px] py-[35px] px-6 flex flex-col xl:flex-row gap-3 relative overflow-hidden">
          <div class="z-10">
            <h3 class="capitalize leading-[128%] text-[32px] font-bold text-[#29A0F5] max-w-[250px]">
              Support for Responsive Device
            </h3>
            <NuxtLink to="/developers">
              <button class="bg-white flex gap-x-3 text-[#1B2534] rounded-[20px] py-[20px] mt-6 justify-center px-6 border border-[#1B2534]/10 shadow-sm">
                Get Started
                <img src="/images/icons/hero-btn-right-arrow.svg" alt="arrow icon" />
              </button>
            </NuxtLink>
          </div>
          <img src="/images/showcase-work/support-img.svg" alt="responsive support" class="lg:absolute lg:right-0 lg:top-0 lg:w-1/2 object-contain" />
        </div>
        <div class="bg-white rounded-[27px] flex justify-center items-center px-[30px] py-[30px]">
          <img src="/images/showcase-work/monitor-growth-graph.svg" alt="growth graph" />
        </div>
        <div class="xl:col-span-2 xl:row-span-1 flex flex-col xl:flex-row rounded-[27px]">
          <img src="/images/showcase-work/global-situations-chart.svg" alt="global chart" class="lg:w-[90%] lg:h-[250px] object-cover
            rounded-l-[27px]
        " />
          <div class="bg-[#1B2534] flex flex-col justify-center items-center gap-y-2 lg:rounded-tr-[27px]
          lg:rounded-br-[27px] lg:rounded-b-none rounded-b-[27px] lg:px-10 py-10">
            <h4 class="text-white text-[28px] font-bold leading-[128%] text-center">Collaborate Globally</h4>
            <NuxtLink to="/developers">
              <button class="bg-[#29A0F5] flex gap-x-3 text-white rounded-[20px] py-[20px] mt-4 justify-center px-5">
                Join Spaatz
              </button>
            </NuxtLink>
          </div>
        </div>
        <div class="bg-white rounded-[27px] px-[30px] py-[30px] xl:col-span-2 xl:row-span-1 xl:h-[250px]">
          <h1 class="text-[28px] font-bold text-[#1B2534] mb-4 capitalize">Image, Video, Audio, GIF Support</h1>
          <div class="flex gap-3 flex-wrap">
            <img v-for="tool in otherImportantTools" :key="tool.id" :src="tool.src" alt="media support icons" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const importantTools = [
  { id: 1, src: '/images/showcase-work/photoshop-icon.svg' },
  { id: 2, src: '/images/showcase-work/figma-icon.svg' },
  { id: 3, src: '/images/showcase-work/adobe-xd-icon.svg' }
]

const otherImportantTools = [
  { id: 1, src: '/images/showcase-work/image-icon.svg' },
  { id: 2, src: '/images/showcase-work/video-icon.svg' },
  { id: 3, src: '/images/showcase-work/music-icon.svg' },
  { id: 4, src: '/images/showcase-work/gif-icon.svg' }
]
</script>
