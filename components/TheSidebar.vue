<template>
  <aside class="w-64 fixed h-screen border-r border-gray-200 dark:border-gray-800">
    <div class="flex flex-col h-full p-2">
      <NuxtLink to="/" class="p-3 text-2xl">
        <span class="text-primary font-bold">X</span>
      </NuxtLink>
      
      <nav class="flex-1 mt-2">
        <NuxtLink to="/" class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full" :class="{ 'font-bold': route.path === '/' }">
          <HomeIcon class="w-7 h-7 text-white" />
          <span class="text-xl text-white">Home</span>
        </NuxtLink>
        
        <NuxtLink to="/explore" class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full" :class="{ 'font-bold': route.path === '/explore' }">
          <MagnifyingGlassIcon class="w-7 h-7 text-white" />
          <span class="text-xl text-white">Explore</span>
        </NuxtLink>
        
        <NuxtLink to="/notifications" class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full" :class="{ 'font-bold': route.path === '/notifications' }">
          <BellIcon class="w-7 h-7 text-white" />
          <span class="text-xl text-white">Notifications</span>
        </NuxtLink>
        
        <NuxtLink to="/messages" class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full" :class="{ 'font-bold': route.path === '/messages' }">
          <EnvelopeIcon class="w-7 h-7 text-white" />
          <span class="text-xl text-white">Messages</span>
        </NuxtLink>
        
        <NuxtLink to="/bookmarks" class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full lg:hidden xl:flex" :class="{ 'font-bold': route.path === '/bookmarks' }">
          <BookmarkIcon class="w-7 h-7 text-white" />
          <span class="text-xl text-white">Bookmarks</span>
        </NuxtLink>
        
        <NuxtLink to="/profile" class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full" :class="{ 'font-bold': route.path === '/profile' }">
          <UserIcon class="w-7 h-7 text-white" />
          <span class="text-xl text-white">Profile</span>
        </NuxtLink>
      </nav>
      
      <button class="btn-primary w-full mt-4">
        Post
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { 
  HomeIcon, 
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
  BookmarkIcon,
  UserIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
</script>