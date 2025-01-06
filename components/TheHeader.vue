<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
    <nav class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-primary">X</NuxtLink>
        
        <div class="flex items-center space-x-4">
          <template v-if="!isAuthenticated">
            <NuxtLink to="/login" class="btn-secondary">Log in</NuxtLink>
            <NuxtLink to="/signup" class="btn-primary">Sign up</NuxtLink>
          </template>
          <template v-else>
            <button class="btn-primary">Post</button>
            <button class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700">
              <!-- Placeholder for user avatar -->
            </button>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isAuthenticated = ref(false)
</script>