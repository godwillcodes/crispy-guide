<template>
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between pt-6 lg:px-8" aria-label="Global">
        <!-- Logo Section -->
        <a href="#" class="my-auto items-center">
          <span class="sr-only">Your Company</span>
          <img class="h-10 w-auto"  src="/assets/images/logo.svg" alt="Company Logo">
        </a>
  
        <!-- Mobile Menu Button -->
        <div class="flex lg:hidden">
          <button type="button" @click="togglePrimaryMenu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
  
        <!-- Desktop Navigation Menu -->
        <div class="hidden lg:flex lg:gap-x-12 items-center">
          <a href="#" class="text-sm leading-6 text-[#3C251F] relative group pb-6 transition-colors duration-300 hover:text-[#FFAA00]">
            Home
            <span class="absolute bottom-0 left-0 w-full h-1 bg-[#FFBA00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
          </a>
          <a href="#" class="text-sm leading-6 text-[#3C251F] relative group pb-6 transition-colors duration-300 hover:text-[#FFAA00]">
            About Bancasurance
            <span class="absolute bottom-0 left-0 w-full h-1 bg-[#FFBA00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
          </a>
          <a href="#" class="text-sm leading-6 text-[#3C251F] relative group pb-6 transition-colors duration-300 hover:text-[#FFAA00]">
            Personal Solutions
            <span class="absolute bottom-0 left-0 w-full h-1 bg-[#FFBA00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
          </a>
          <a href="#" class="text-sm leading-6 text-[#3C251F] relative group pb-6 transition-colors duration-300 hover:text-[#FFAA00]">
            Cooperate Solutions
            <span class="absolute bottom-0 left-0 w-full h-1 bg-[#FFBA00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
          </a>
  
          <!-- Search Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 mb-5 text-[#FFAA00]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
      </nav>
  
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div v-if="open" @click="closePrimaryMenu" class="fixed inset-0 z-10 bg-black/50">
        <div class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-12 w-auto" src="/assets/images/logo.svg" alt="">
            </a>
            <button type="button" @click="closePrimaryMenu" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Company</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        open: false
      };
    },
    methods: {
      togglePrimaryMenu() {
        this.open = !this.open;
      },
      closePrimaryMenu() {
        this.open = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here if necessary */
  </style>
  