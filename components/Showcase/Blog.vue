<template>
  <div class="bg-white w-screen">
    <section class="max-w-[1440px] mx-auto py-16 px-4">
      <h1 class="text-3xl font-bold mb-8 capitalize">
        Articles on {{ tag }}
      </h1>

      <div v-if="pending" class="text-gray-400">Loading articles...</div>
      <div v-else-if="error" class="text-red-500">Failed to load articles.</div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="article in articles"
          :key="article.id"
          class="p-5 hover:scale-[1.02] transition"
        >
          <img
            :src="article.cover_image || '/images/showcase-blog/default-blog.png'"
            alt="article image"
            class="rounded-xl mb-4 w-full h-[180px] object-cover"
          />
          <h2 class="text-[32px] text-[#1B2534] font-bold mb-2 line-clamp-2">
            {{ article.title }}
          </h2>
          <p class="text-[#ABABAB] text-base mb-4 line-clamp-3">
            {{ article.description }}
          </p>
          <div class="flex gap-x-3 mb-4 items-center">
            <img :src="article.user.profile_image" alt="user profile image"
                class="size-[70px] rounded-[50%]"
            />      
            <div>
                <p class="text-base font-bold text-[#666A82]">{{ 
                    article.user.name }}</p>
                <p class="text-base text-[#666A82] my-2">
                    {{ formatDate(article.published_at) }}
                </p>
            </div>
          </div>
          <a
            :href="article.url"
            target="_blank"
            class="text-[#29A0F5] font-semibold"
          >
            Read more →
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const tag = 'javascript'

const { data, pending, error } = useFetch(`https://dev.to/api/articles`, {
  query: { tag, per_page: 3 },
  transform: (res) => res || []
})

const articles = computed(() => data.value || [])

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
