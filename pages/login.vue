<template>
  <div class="min-h-[80vh] flex items-center justify-center">
    <div class="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold mb-6">Sign in to X</h1>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary bg-transparent"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary bg-transparent"
            required
          />
        </div>
        <button type="submit" class="w-full btn-primary">
          Sign in
        </button>
      </form>
      <p class="mt-4 text-center">
        Don't have an account?
        <NuxtLink to="/signup" class="text-primary hover:underline">Sign up</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')

const handleLogin = () => {
  // TODO: Implement login logic
}
</script>