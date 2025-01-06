<template>
    <div>
      <div class="sticky top-0 bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-10 border-b border-gray-200 dark:border-gray-800">
        <div class="p-4">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search" 
              class="w-full pl-12 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border-none focus:ring-2 focus:ring-primary"
            >
            <MagnifyingGlassIcon class="w-5 h-5 text-gray-500 absolute left-4 top-2.5" />
          </div>
        </div>
      </div>
      <div class="p-4">
        <h2 class="text-xl font-bold text-white">Trending</h2>
        <!-- Add trending content here -->
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
  </script>