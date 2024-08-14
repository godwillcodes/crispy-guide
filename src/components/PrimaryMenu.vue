<template>
  <header class="bg-white pt-0 lg:pt-6">
    <nav class="mx-auto flex max-w-7xl items-center p-3 lg:p-0 shadow lg:shadow-none justify-between"
      aria-label="Global">
      <!-- Logo Section -->
      <a href="#" class="my-auto items-center">
        <span class="sr-only">Your Company</span>
        <img class="h-10 w-auto relative bottom-0 md:bottom-3 md:relative" src="/assets/images/logo.svg"
          alt="Company Logo">
      </a>

      <!-- Mobile Menu Button -->
      <div class="flex lg:hidden">
        <button type="button" @click="togglePrimaryMenu"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <!-- Desktop Navigation Menu -->
      <div class="hidden lg:flex lg:gap-x-12 items-center">
        <router-link to="/" class="text-sm leading-6 text-[#3C251F] relative group pb-6 transition-colors duration-300"
          exact-active-class="router-link-active">
          Home
          <span
            class="absolute bottom-0 left-0 w-full h-1 bg-[#FFBA00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </router-link>
        <router-link to="/about"
          class="text-sm leading-6 text-[#3C251F] relative group pb-6 transition-colors duration-300"
          exact-active-class="router-link-active">
          About Bancassurance
          <span
            class="absolute bottom-0 left-0 w-full h-1 bg-[#FFBA00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </router-link>

        <a href="#"
          class="text-sm leading-6 text-[#3C251F] relative group pb-6 transition-colors duration-300 hover:text-[#FFAA00]">
          Personal Solutions
          <span
            class="absolute bottom-0 left-0 w-full h-1 bg-[#FFBA00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
        </a>
        <a href="#"
          class="text-sm leading-6 text-[#3C251F] relative group pb-6 transition-colors duration-300 hover:text-[#FFAA00]">
          Cooperate Solutions
          <span
            class="absolute bottom-0 left-0 w-full h-1 bg-[#FFBA00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
        </a>

        <!-- Search Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="h-6 w-6 mb-5 text-[#FFAA00]" @click="openModal">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
    </nav>

    <!-- Mobile menu, show/hide based on menu open state. -->
    <div v-if="open" @click="closePrimaryMenu" class="fixed inset-0 z-10 bg-black/50">
      <div
        class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-12 w-auto" src="/assets/images/logo.svg" alt="">
          </a>
          <button type="button" @click="closePrimaryMenu" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Product</a>
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Features</a>
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Company</a>
            </div>
            <div class="py-6">
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="relative z-10" role="dialog" aria-modal="true">
      <!-- Overlay -->
      <div class="fixed inset-0 bg-[#3C251F] bg-opacity-25 transition-opacity"></div>
      <!-- Modal Content -->
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <div
          class="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-[#3C251F] shadow-2xl transition-all ">
          <div class="relative">
            <!-- Search Input -->
            <svg class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-[#FFAA00]" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text"
              class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white focus:ring-0 focus:ring-yellow-400 sm:text-sm"
              placeholder="Search...">
          </div>
          <ul class="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto">
            <!-- Example items here -->
            <li class="p-2">
              <h2 class="mb-2 mt-4 px-3 text-base font-semibold text-white">Recent searches</h2>
              <ul class="text-sm text-white">
                <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                  <svg class="h-4 w-4 flex-none text-[#FFAA00]" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                  </svg>
                  <p class="ml-3 text-xs">Example Item</p>
                </li>
              </ul>
            </li>
          </ul>
          <div class="flex justify-center gap-x-4 py-4">
            <button type="button" @click="closeModal"
              class="inline-block rounded-md px-3 py-2 text-sm font-semibold text-white ring-1 ring-[#FFAA00] hover:ring-[#FFAA00]/80">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);
const isModalOpen = ref(false);

function togglePrimaryMenu() {
  open.value = !open.value;
}

function closePrimaryMenu() {
  open.value = false;
}

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>
<style scoped>
/* Add any additional styles here if needed */
.router-link-active {
  color: #FFAA00;
  /* Or any color you want for the active state */
}

.router-link-active span {
  transform: scaleX(1) !important;
  /* Make the underline span fully visible when active */
}

.group:hover span,
.router-link-active span {
  transform: scaleX(1);
  /* Ensure the underline is visible on hover or when active */
  transform-origin: bottom left;
  /* Make sure the scale starts from the left */
  transition: transform 0.3s ease-in-out;
  /* Transition effect for scaling */
}
</style>
