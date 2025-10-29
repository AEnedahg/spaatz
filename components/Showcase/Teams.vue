<template>
    <div class="w-screen bg-white">
        <section class="max-w-[1440px] mx-auto md:px-17.5 md:py-20 px-4 py-20">
            <h5 class="font-semibold text-[#1B2534] text-[30px] my-10 text-center">Loved by teams around the world</h5>
            <div class="relative overflow-hidden">
                <div class="flex animate-scroll" :style="{ width: `${teams.length * 200}px` }">
                    <img 
                        v-for="team in teams" 
                        :key="team.id"
                        :src="team.src" 
                        :alt="team.alt" 
                        class="mx-8 h-16 object-contain flex-shrink-0"
                    />g
                    <img 
                        v-for="team in teams" 
                        :key="`duplicate-${team.id}`"
                        :src="team.src" 
                        :alt="team.alt" 
                        class="mx-8 h-16 object-contain flex-shrink-0"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const teams = [
    {
        id: 1,
        src: '/images/showcase-teams/vs-logo.svg',
        alt: 'vs logo'
    },
    {
        id: 2,
        src: '/images/showcase-teams/brand-logo.svg',
        alt: 'brand logo'
    },
    {
        id: 3,
        src: '/images/showcase-teams/nature-home-logo.svg',
        alt: 'nature home logo'
    },
    {
        id: 4,
        src: '/images/showcase-teams/classic-logo.svg',
        alt: 'classic logo'
    },
    {
        id: 5,
        src: '/images/showcase-teams/lorem-ipsum-logo.svg',
        alt: 'lorem ipsum logo'
    },
]
</script>

<style scoped>
.animate-scroll {
    animation: scroll 30s linear infinite;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}
</style>