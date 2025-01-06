<template>
  <aside class="w-64 fixed h-screen border-r border-gray-200 dark:border-gray-800">
    <div class="flex flex-col h-full p-2">
      <NuxtLink to="/" class="p-3 text-2xl">
        <span class="text-primary font-bold">X</span>
      </NuxtLink>
      
      <nav class="flex-1 mt-2">
        <NuxtLink to="/" class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full">
          <HomeIcon class="w-7 h-7" />
          <span class="text-xl">Home</span>
        </NuxtLink>
        
        <button class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full">
          <MagnifyingGlassIcon class="w-7 h-7" />
          <span class="text-xl">Explore</span>
        </button>
        
        <button class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full">
          <BellIcon class="w-7 h-7" />
          <span class="text-xl">Notifications</span>
        </button>
        
        <button class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full">
          <EnvelopeIcon class="w-7 h-7" />
          <span class="text-xl">Messages</span>
        </button>
        
        <button class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full lg:hidden xl:flex">
          <BookmarkIcon class="w-7 h-7" />
          <span class="text-xl">Bookmarks</span>
        </button>
        
        <button class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full lg:hidden xl:flex">
          <UserGroupIcon class="w-7 h-7" />
          <span class="text-xl">Communities</span>
        </button>
        
        <button class="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full w-full">
          <UserIcon class="w-7 h-7" />
          <span class="text-xl">Profile</span>
        </button>
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
  UserGroupIcon,
  UserIcon
} from '@heroicons/vue/24/outline'
</script>