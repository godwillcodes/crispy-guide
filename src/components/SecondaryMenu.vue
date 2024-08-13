<template>
  <div class="bg-[#3C251F]">
    <!-- Navigation Bar Container -->
    <nav class="mx-auto flex max-w-7xl items-center justify-end lg:p-3 lg:px-8" aria-label="Global">
      <!-- Desktop Navigation Menu -->
      <div class="hidden lg:flex lg:gap-x-6">
        <a href="#" class="text-xs font-light text-[#FFAA00] leading-6 hover:text-[#FFA500] hover:underline-offset-4 hover:underline">Investor Relations</a>
        <a href="#" class="text-xs font-light text-[#FFAA00] leading-6 hover:text-[#FFA500] hover:underline-offset-4 hover:underline">National Online Banking</a>
        <a href="#" class="text-xs font-light text-[#FFAA00] leading-6 hover:text-[#FFA500] hover:underline-offset-4 hover:underline">NBK Bancassurance Intermediary Limited</a>
        <a href="#" class="text-xs font-light text-[#FFAA00] leading-6 hover:text-[#FFA500] hover:underline-offset-4 hover:underline">Property Sales</a>
        <a href="#" class="text-xs font-light text-[#FFAA00] leading-6 hover:text-[#FFA500] hover:underline-offset-4 hover:underline">Natbank Investments</a>
        <a href="#" class="text-xs font-light text-[#FFAA00] leading-6 hover:text-[#FFA500] hover:underline-offset-4 hover:underline">Treasury Services</a>
        <a href="#" class="text-xs font-light text-[#FFAA00] leading-6 hover:text-[#FFA500] hover:underline-offset-4 hover:underline">Contact Us</a>
      </div>
    </nav>

    <!-- Mobile View -->
    <div class="flex lg:hidden items-center justify-center p-3">
      <button @click="toggleMenu" class="bg-[#FFAA00] text-[#3C251F] text-xs font-light rounded-md py-2 px-4 flex items-center space-x-2 transform transition-transform duration-300 hover:bg-[#FFA500] focus:outline-none focus:ring-2 focus:ring-[#FFA500]" aria-label="View National Bank Quick Links">
        <span>View National Bank Quick Links</span>
        <svg class="h-4 w-4 text-[#3C251F]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-[#3C251F] bg-opacity-95 flex flex-col items-start justify-start p-6 space-y-4">
        <button @click="toggleMenu" class="self-end text-[#FFAA00] text-lg font-semibold hover:text-[#FFA500]" aria-label="Close Menu">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <a href="#" class="text-[#FFAA00] mt-2 text-base font-medium leading-6 hover:text-[#FFA500] hover:underline">Investor Relations</a>
        <a href="#" class="text-[#FFAA00] mt-2 text-base font-medium leading-6 hover:text-[#FFA500] hover:underline">National Online Banking</a>
        <a href="#" class="text-[#FFAA00] mt-2 text-base font-medium leading-6 hover:text-[#FFA500] hover:underline">NBK Bancassurance Intermediary Limited</a>
        <a href="#" class="text-[#FFAA00] mt-2 text-base font-medium leading-6 hover:text-[#FFA500] hover:underline">Property Sales</a>
        <a href="#" class="text-[#FFAA00] mt-2 text-base font-medium leading-6 hover:text-[#FFA500] hover:underline">Natbank Investments</a>
        <a href="#" class="text-[#FFAA00] mt-2 text-base font-medium leading-6 hover:text-[#FFA500] hover:underline">Treasury Services</a>
        <a href="#" class="text-[#FFAA00] mt-2 text-base font-medium leading-6 hover:text-[#FFA500] hover:underline">Contact Us</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
