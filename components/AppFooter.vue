<template>
  <footer class="h-16 relative w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900 z-20">
    <div class="h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between">
      <div class="flex items-end">
        <a href="https://www.md.chula.ac.th" target="_blank" rel="noopener" class="hover:text-green-600">
          Faculty of Medicine, Chulalongkorn University
        </a>
      </div>
      <div class="flex items-center space-x-4">
        <AppLangSwitcher />
        <AppColorSwitcher />
      </div>
    </div>
  </footer>
</template>
