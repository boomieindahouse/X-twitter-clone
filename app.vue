<template>
  <div class="min-h-screen bg-white dark:bg-dark">
    <ClientOnly>
      <div class="lg:hidden">
        <MobileHeader />
      </div>
      <div class="flex relative">
        <TheSidebar class="hidden lg:block" />
        <main class="flex-1 lg:ml-64 border-x border-gray-200 dark:border-gray-800 min-h-screen w-full max-w-[600px] mx-auto lg:mx-0">
          <NuxtPage />
        </main>
        <TrendingSidebar class="hidden xl:block" />
      </div>
      <MobileNav class="lg:hidden" />
    </ClientOnly>
  </div>
</template>