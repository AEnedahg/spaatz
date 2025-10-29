<template>
    <div class="w-screen bg-[#1B2534]">
        <section class="lg:max-w-[1440px] max-w-[640px] mx-auto md:px-17.5 px-4 py-20 relative
            grid grid-cols-1 grid-rows-11 lg:grid-cols-7 lg:grid-rows-3
        ">
            <div class="col-span-1 row-span-2 lg:col-span-2 lg:row-span-2">
                <NuxtLink to="/">
                    <div class="flex items-center gap-x-2 mb-4">
                        <img src="/images/logo-spaatz.png" alt="logo" class="size-[60px]"/>
                        <h4 class="text-[24px] font-semibold text-white">Spaatz</h4>
                    </div>
                </NuxtLink>
                <h6 class="text-[#ABABAB] text-[17px] mb-12">
                    Spaatz mission is create a <span class="!text-white !font-bold">billion new</span> software developers by <span class="!text-[#FFAD32] !font-bold">{{ new Date().getFullYear() }}</span>.
                </h6>
                <div class="flex gap-x-5">
                    <img 
                        v-for="social of socials" :key="social"
                    :src="social" alt="social media icon" />
                </div>
            </div>
            <div class="col-span-1 row-span-2 lg:col-span-1 lg:row-span-2 p-4 lg:p-10 bg-[#283343]">
                <h6 class="text-white text-[15px] font-bold">Products</h6>
                <p 
                    class="text-[13px] font-semibold text-[#ABABAB] mb-5"
                v-for="product of productsList" :key="product">{{ product }}</p>
            </div>
            <div class="col-span-1 row-span-2 lg:col-span-1 lg:row-span-2 p-4 lg:pt-10 bg-[#283343]">
                <h6 class="text-white text-[15px] font-bold">Platform</h6>
                <p 
                    class="text-[13px] font-semibold text-[#ABABAB] mb-5"
                v-for="platform of platformsList" :key="platform">{{ platform }}</p>
            </div>
            <div class="col-span-1 row-span-2 lg:col-span-1 lg:row-span-2 p-4 lg:pt-10 bg-[#283343]">
                <h6 class="text-white text-[15px] font-bold">Utility</h6>
                <p 
                    class="text-[13px] font-semibold text-[#ABABAB] mb-5"
                v-for="utility of utilityList" :key="utility">{{ utility }}</p>
            </div>
            <img 
                class="col-span-1 row-span-2 lg:col-span-2 lg:row-span-2"
            src="/images/footer/footer-img.png" alt="image showing video of a man" />
           <small 
           class="text-[14px] font-semibold mt-10 text-[#ABABAB] col-span-1 row-span-1 lg:col-span-7 lg:row-span-1">Spaatz &copy; {{ new Date().getFullYear() }}. All rights reserved by Anthony Enedah</small>
        </section>
    </div>
</template>

<script setup>
const socials = ["/images/icons/facebook-icon.png", "/images/icons/x-icon.png", "/images/icons/linkedin-icon.png", "/images/icons/instagram-icon.png"]
const productsList = ["Download", "Web App", "Pricing", "Server Status", "Changelog"]

const platformsList = [
  "Android App",
  "iOS App",
  "Windows",
  "MacOS",
  "Web Browser"
]

const utilityList = [
  "Help Center",
  "API Documentation",
  "Community Forum",
  "Terms of Service",
  "Privacy Policy"
]

</script>