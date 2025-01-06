<template>
  <div class="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
    <div class="flex space-x-4">
      <div class="flex-shrink-0">
        <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div class="flex-1">
        <textarea
          v-model="content"
          rows="3"
          class="w-full bg-transparent border-none focus:ring-0 resize-none"
          placeholder="What's happening?"
        ></textarea>
        <div class="mt-3 flex items-center justify-between">
          <div>
            <!-- Add attachment buttons here -->
          </div>
          <button
            class="btn-primary"
            :disabled="!content.trim()"
            @click="createPost"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const content = ref('')

const createPost = () => {
  // TODO: Implement post creation
  content.value = ''
}
</script>