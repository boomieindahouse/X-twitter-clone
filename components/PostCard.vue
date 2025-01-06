<template>
  <article class="p-4 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors cursor-pointer">
    <div class="flex space-x-3">
      <div class="flex-shrink-0">
        <img :src="post.author.avatar" :alt="post.author.name" class="w-12 h-12 rounded-full" />
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center space-x-2">
          <span class="font-bold hover:underline text-white">{{ post.author.name }}</span>
          <span class="text-gray-500">{{ post.author.handle }}</span>
          <span class="text-gray-500">·</span>
          <time class="text-gray-500 hover:underline">{{ formatDate(post.createdAt) }}</time>
          <button class="ml-auto p-1 hover:bg-primary/10 rounded-full text-gray-500">
            <EllipsisHorizontalIcon class="w-5 h-5" />
          </button>
        </div>
        <p class="mt-1 whitespace-pre-wrap text-white">{{ post.content }}</p>
        <div class="mt-3 flex items-center justify-between max-w-md">
          <button class="group flex items-center space-x-1 text-gray-500 hover:text-primary">
            <div class="p-1.5 rounded-full group-hover:bg-primary/10">
              <ChatBubbleOvalLeftIcon class="w-5 h-5" />
            </div>
            <span>{{ post.replies }}</span>
          </button>
          <button class="group flex items-center space-x-1 text-gray-500 hover:text-green-500">
            <div class="p-1.5 rounded-full group-hover:bg-green-500/10">
              <ArrowPathRoundedSquareIcon class="w-5 h-5" />
            </div>
            <span>{{ post.reposts }}</span>
          </button>
          <button class="group flex items-center space-x-1 text-gray-500 hover:text-pink-500">
            <div class="p-1.5 rounded-full group-hover:bg-pink-500/10">
              <HeartIcon class="w-5 h-5" />
            </div>
            <span>{{ post.likes }}</span>
          </button>
          <button class="group flex items-center space-x-1 text-gray-500 hover:text-primary">
            <div class="p-1.5 rounded-full group-hover:bg-primary/10">
              <ChartBarIcon class="w-5 h-5" />
            </div>
            <span>{{ post.views }}</span>
          </button>
          <button class="group flex items-center text-gray-500 hover:text-primary">
            <div class="p-1.5 rounded-full group-hover:bg-primary/10">
              <ArrowUpTrayIcon class="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { 
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ChartBarIcon,
  ArrowUpTrayIcon,
  EllipsisHorizontalIcon
} from '@heroicons/vue/24/outline'

const props = defineProps<{
  post: {
    id: number
    author: {
      name: string
      handle: string
      avatar: string
    }
    content: string
    likes: string
    reposts: string
    replies: string
    views: string
    createdAt: string
  }
}>()

const formatDate = (date: string) => {
  const now = new Date()
  const postDate = new Date(date)
  const diff = now.getTime() - postDate.getTime()
  const hours = Math.floor(diff / (1000 * 60 * 60))
  
  if (hours < 1) {
    return 'now'
  } else if (hours < 24) {
    return `${hours}h`
  } else {
    return postDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }
}
</script>