<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
    <div class="flex items-center justify-between p-4">
      <button class="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
        <UserIcon class="w-6 h-6" />
      </button>
      <span class="text-primary text-2xl font-bold">X</span>
      <button class="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
        <Cog6ToothIcon class="w-6 h-6" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { UserIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'
</script>