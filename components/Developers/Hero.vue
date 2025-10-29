<template>
  <div class="w-screen bg-gradient-to-r from-[#89D8F3] to-[#B1F9F3]">
    <section class="max-w-[1440px] mx-auto md:px-17.5 px-4 pt-20 py-20 flex flex-col lg:flex-row">
      <div class="max-w-[461px] space-y-6">
        <h1 class="text-[#1B2534] font-extrabold text-[32px] md:text-[60px]">
          Is Spaatz the right platform for your community?
        </h1>
        <p class="text-[#1B2534] text-base">
          Just answer a few questions so that we can personalize the right experience for you. 
          Unknown printer took a type and scrambled it to make a type.
        </p>

        <div class="bg-white rounded-[20px] p-6 flex flex-col gap-4">
          <div
            v-for="item in firstList"
            :key="item.id"
            class="flex justify-between items-center"
          >
            <div class="flex items-center gap-3">
              <img :src="item.icon" alt="contact icon" />
              <p class="text-[18px] text-[#1B2534]">{{ item.text }}</p>
            </div>
            <p class="text-[#606060] text-base">{{ item.link }}</p>
          </div>
        </div>
      </div>

      <form></form>
    </section>
  </div>
</template>

<script setup>
const firstList = [
  {
    id: 1,
    icon: '/images/icons/mail-icon.svg',
    text: 'Mail Us',
    link: 'aenedah61@gmail.com'
  },
  {
    id: 2,
    icon: '/images/icons/phone-icon.svg',
    text: 'Call Us',
    link: '+234 81 108 344 37'
  }
]
</script>
