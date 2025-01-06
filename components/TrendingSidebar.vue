<template>
  <aside class="w-[350px] fixed right-0 h-screen p-4 overflow-y-auto">
    <div class="sticky top-4">
      <div class="bg-gray-50 dark:bg-black border-[1px] dark:border-gray-500 rounded-2xl p-4 mb-4">
        <h2 class="text-xl font-bold mb-4 text-white">What's happening</h2>
        
        <div class="space-y-6">
          <ClientOnly>
            <div v-for="trend in trends" :key="trend.id" class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 -mx-2 p-2 rounded">
              <div class="text-sm text-gray-500">{{ trend.category }}</div>
              <div class="font-bold text-white">{{ trend.title }}</div>
              <div class="text-sm text-gray-500">{{ trend.posts }} posts</div>
            </div>
          </ClientOnly>
        </div>
        
        <button class="text-primary hover:text-primary/90 mt-4">
          Show more
        </button>
      </div>
      
      <div class="bg-gray-50 dark:bg-black border-[1px] dark:border-gray-500 rounded-2xl p-4">
        <h2 class="text-xl font-bold mb-4 text-white">Who to follow</h2>
        
        <div class="space-y-4">
          <ClientOnly>
            <div v-for="user in suggestedUsers" :key="user.id" class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div>
                  <div class="font-bold text-white">{{ user.name }}</div>
                  <div class="text-gray-500">{{ user.handle }}</div>
                </div>
              </div>
              <button class="btn-primary py-1">Follow</button>
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const trends = ref([
  {
    id: 1,
    category: 'Trending in Thailand',
    title: '#IGot7',
    posts: '4,167'
  },
  {
    id: 2,
    category: 'Entertainment · Trending',
    title: 'Demi Moore',
    posts: '201K'
  },
  {
    id: 3,
    category: 'Politics · Trending',
    title: 'Social Security',
    posts: '59K'
  }
])

const suggestedUsers = ref([
  {
    id: 1,
    name: 'Ars Technica',
    handle: '@arstechnica'
  },
  {
    id: 2,
    name: 'CNET',
    handle: '@CNET'
  }
])
</script>