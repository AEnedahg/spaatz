<template>
    <div class="w-screen bg-gradient-to-l from-[#89D8F3] to-[#68FAD3]">
        <section class="lg:max-w-[1440px] max-w-[640px] mx-auto md:px-[164px] px-4 py-20
        mt-20
        ">
            <div class="flex justify-between lg:items-end mb-7 flex-col lg:flex-row items-start">
                <h1 class="text-[#1B2534] font-extrabold text-[32px] lg:text-[54px]
                    max-w-[508px] capitalize
                ">
                    Get started with spaatz today
                </h1>
                <NuxtLink to="/developers">
                    <button class="bg-[#1B2534] flex gap-x-3 text-white rounded-[20px] py-[25px]
                            mt-[36px] justify-center px-[37px]
                    ">
                        Get Started
                        <img src="/images/icons/hero-btn-right-arrow.svg" alt="right-arrow-icon" />
                    </button>
                </NuxtLink>
            </div>
            <img src="/images/showcase-cta/cta-img.png" alt="image showing website dashboard" />
        </section>
    </div>
</template>

<script setup>

</script>