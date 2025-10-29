<template>
  <div class="bg-white w-screen">
    <section class="max-w-[1440px] mx-auto md:px-17.5 md:py-20 px-4 pt-20 pb-30">
      <h1 class="text-3xl font-bold mb-8 capitalize">Latest Developer Articles</h1>

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
          <h2 class="text-[28px] text-[#1B2534] font-bold mb-2 line-clamp-2">
            {{ article.title }}
          </h2>
          <p class="text-[#ABABAB] text-base mb-4 line-clamp-3">
            {{ article.description }}
          </p>
          <div class="flex gap-x-3 mb-4 items-center">
            <img
            :src="article.user.profile_image"
            alt="user profile image"
            class="w-[50px] h-[50px] profile rounded-full object-cover"
            />
            <div>
              <p class="text-base font-bold text-[#666A82]">
                {{ article.user.name }}
              </p>
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
import { ref, computed, onMounted } from 'vue'

const articles = ref([])
const pending = ref(true)
const error = ref(false)

const tags = ['javascript', 'vue', 'css', 'webdev']

onMounted(async () => {
  try {
    const requests = tags.map(tag =>
      fetch(`https://dev.to/api/articles?tag=${tag}&per_page=3`).then(res => res.json())
    )
    const results = await Promise.all(requests)
    articles.value = results.flat()
  } catch (err) {
    console.error(err)
    error.value = true
  } finally {
    pending.value = false
  }
})

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style>
.profile {
    width: 70px;
}
</style>
