<template>
  <div class="w-screen bg-gradient-to-r from-[#89D8F3] to-[#B1F9F3]">
    <section class="max-w-[1440px] mx-auto md:px-17.5 px-4 pt-20 py-20 flex flex-col lg:flex-row
    lg:justify-between
    ">
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
            class="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-2"
          >
            <div class="flex items-center gap-3">
              <img :src="item.icon" alt="contact icon" />
              <p class="text-[18px] text-[#1B2534]">{{ item.text }}</p>
            </div>
            <p class="text-[#606060] text-base">{{ item.link }}</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-[20px]">
            <div v-for="secondItem of secondList" :key="secondItem"
                class="flex gap-4 mb-4" 
            >
                <img src="/images/icons/hero-btn-right-arrow.svg" alt="right arrow icon" />
                <p class="text-base text-[#1B2534]">{{ secondItem}}</p>
            </div>
        </div>
      </div>

      <form class="bg-white md:p-[66px] py-10 px-7 rounded-[20px] max-w-[500px] mt-10 md:mt-0">
        <div>
            <label for="fullName">Full Name *</label>
            <input type="text" name="full name" id="fullName" placeholder="John David" />
        </div>
        <div>
            <label for="email">Your Email *</label>
            <input type="email" name="email" id="email" placeholder="example@yourmail.com"/>
        </div>
        <div>
            <label for="company">Company *</label>
            <input type="text" name="company" id="company" placeholder="your company name here" />
        </div>
        <div>
            <label for="subject">Subject *</label>
            <input type="text" name="subject" id="subject" placeholder="how can we help" />
        </div>
        <div>
            <label>Message *</label>
            <textarea 
                rows="5"
            placeholder="Hello there,I would like to talk about how to..."></textarea>
        </div>
        <NuxtLink to="/developers">
            <button class="bg-[#1B2534] flex gap-x-3 text-white rounded-[20px] py-[25px]
                    mt-[36px] justify-center px-[37px] mx-auto
            ">
                Send Message
                <img src="/images/icons/hero-btn-right-arrow.svg" alt="right-arrow-icon" />
            </button>
        </NuxtLink>
      </form>
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
const secondList = [
    "An overview of the platform and its features",
    "Consultation on how to leverage the platform for your community",
    "Share few success stories with you",
    "Many desktop publishing packages and web page editors now use"
]
</script>

<style>
label {
   margin-bottom: 16px;
   color: #606060;
   font-weight: 600;
   font-size: 20px; 
   display: block;
}
input, textarea {
    padding: 20px;
    border-radius: 20px;
    color: #606060;
    border: 1px solid #D3D3D3;
    width: 100%;
}
input::placeholder {
    color: #606060;
}
form > div {
  margin-bottom: 16px;
}
</style>