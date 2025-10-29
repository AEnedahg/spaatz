<template>
    <div class="w-screen bg-white">
        <section class="xl:max-w-[1440px] max-w-[640px] mx-auto md:px-17.5 px-4 py-20
        ">
            <h1 class="text-[#1B2534] font-extrabold text-[32px] lg:text-[54px] capitalize text-center
                max-w-[508px] mx-auto mb-10
            ">
                Packaged with amazing <span class="!text-[#29A0F5]">features</span>
            </h1>
            <div class="flex flex-col lg:flex-row gap-[48px]">
                <div class="lg:w-1/3">
                    <h3 class="font-extrabold text-[25px] text-[#ABABAB] mb-4">Insert Menu</h3>
                    <div class="bg-[#1B2534] p-8 lg:p-15 rounded-[27px] mb-4">
                        <h3 class="capitalize leading-[128%] text-[24px] font-bold text-white max-w-[250px]">
                            New Versioned
                            </h3>
                            <p class="text-[#ABABAB] text-[18px] leading-[150%]">Our platform comes packed with exciting new features that make content creation and collaboration effortless.</p>
                            <NuxtLink to="/developers">
                                <button class="bg-[#29A0F5] flex gap-x-3 text-white rounded-[20px] py-[20px] mt-6 justify-center px-6 border border-[#1B2534]/10 shadow-sm">
                                    Update
                                </button>
                            </NuxtLink>
                    </div>
                    <div class="space-y-3">
                        <h3 v-for="otherTitle of otherTitles" :key="otherTitle"
                            class="font-extrabold text-[25px] text-[#ABABAB] mb-4"
                        >{{ otherTitle }}</h3>
                    </div>
                </div>
                <img src="/images/showcase-package/package-img.png" alt="two images of diagnostics" 
                    class="lg:w-2/3"
                />
            </div>
        </section>
    </div>
</template>

<script setup>
const otherTitles = ["First class design", "token support", "Smart Components"]
</script>