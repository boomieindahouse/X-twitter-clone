<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800 z-50">
    <div class="flex justify-around p-4">
      <NuxtLink to="/" class="flex flex-col items-center">
        <HomeIcon class="w-7 h-7" />
      </NuxtLink>
      <button class="flex flex-col items-center">
        <MagnifyingGlassIcon class="w-7 h-7" />
      </button>
      <button class="flex flex-col items-center">
        <BellIcon class="w-7 h-7" />
      </button>
      <button class="flex flex-col items-center">
        <EnvelopeIcon class="w-7 h-7" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { 
  HomeIcon, 
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline'
</script>