<template>
  <div>
    <div class="sticky top-0 bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-10 border-b border-gray-200 dark:border-gray-800">
      <div class="flex px-4 py-3">
        <div class="flex-1">
          <h1 class="text-xl font-bold text-white">Home</h1>
        </div>
        <div class="tabs flex">
          <button class="flex-1 px-8 py-2 font-semibold border-b-4 text-white border-primary">For you</button>
          <button class="flex-1 px-8 py-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900">Following</button>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-200 dark:border-gray-800 p-4">
      <div class="flex space-x-4">
        <div class="flex-shrink-0">
          <img src="https://placehold.co/48" alt="Avatar" class="w-12 h-12 rounded-full" />
        </div>
        <div class="flex-1">
          <textarea 
            v-model="postContent"
            placeholder="What is happening?!"
            class="w-full bg-transparent border-none focus:ring-0 resize-none text-xl text-white"
            rows="3"
          ></textarea>
          <div class="flex items-center justify-between mt-4">
            <div class="flex space-x-4 text-primary">
              <button class="hover:bg-primary/10 p-2 rounded-full">
                <PhotoIcon class="w-5 h-5" />
              </button>
              <button class="hover:bg-primary/10 p-2 rounded-full">
                <GifIcon class="w-5 h-5" />
              </button>
              <button class="hover:bg-primary/10 p-2 rounded-full">
                <ListBulletIcon class="w-5 h-5" />
              </button>
              <button class="hover:bg-primary/10 p-2 rounded-full">
                <FaceSmileIcon class="w-5 h-5" />
              </button>
              <button class="hover:bg-primary/10 p-2 rounded-full">
                <CalendarIcon class="w-5 h-5" />
              </button>
              <button class="hover:bg-primary/10 p-2 rounded-full">
                <MapPinIcon class="w-5 h-5" />
              </button>
            </div>
            <button 
              class="btn-primary px-4 py-1.5 disabled:opacity-50"
              :disabled="!postContent.trim()"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-4 pb-16">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  PhotoIcon, 
  GifIcon, 
  ListBulletIcon, 
  FaceSmileIcon, 
  CalendarIcon, 
  MapPinIcon 
} from '@heroicons/vue/24/outline'

const postContent = ref('')

const posts = ref([
  {
    id: 1,
    author: {
      name: 'NO CONTEXT HUMANS',
      handle: '@HumansNoContext',
      avatar: 'https://placehold.co/48'
    },
    content: 'This is what happens when you block the road...',
    likes: '5.4K',
    reposts: '299',
    replies: '318',
    views: '465K',
    createdAt: '2024-04-03T12:00:00Z'
  },
  {
    id: 2,
    author: {
      name: 'NO CONTEXT HUMANS',
      handle: '@HumansNoContext',
      avatar: 'https://placehold.co/48'
    },
    content: 'This is what happens when you block the road...',
    likes: '5.4K',
    reposts: '299',
    replies: '318',
    views: '465K',
    createdAt: '2024-04-03T12:00:00Z'
  },
  {
    id: 3,
    author: {
      name: 'Red Skull',
      handle: '@RedSkullxxx',
      avatar: 'https://placehold.co/48'
    },
    content: 'ขอบคุณครับที่มาทำงานทำหน้าที่รายงานข่าว ปล่อยให้พี่น้องทำหน้าที่ของตนเองไปไม่ต้องเข้าไปวุ่นวายนะครับ โปรดระวังตัวด้วยครับ',
    likes: '6.7K',
    reposts: '8.1K',
    replies: '54',
    views: '1.1M',
    createdAt: '2024-04-03T11:00:00Z'
  }
])
</script>