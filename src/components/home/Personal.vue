<template>
  <section class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Title and Subtitle -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-4">Personal Solutions</h2>
        <p class="text-lg text-gray-600">
          Looking for motor, health, property, or general cover? Enjoy quality product offerings with high standards of
          service from NBK Bancassurance Intermediary Limited.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Card 1 -->
        <div class="relative bg-cover rounded-lg shadow-md overflow-hidden h-[180px] w-full lg:w-[300px] bg-center"
          style="background-image: url('assets/images/1.png');" data-aos="fade-up" data-aos-delay="100">
          <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div class="text-center px-4">
              <h3 class="text-white text-lg font-semibold mb-3">General Insurance</h3>
              <a href="#"
                class="inline-block px-4 py-1 border border-white hover:border-yellow-500 text-white text-xs rounded uppercase hover:bg-yellow-500 hover:text-gray-900 transition duration-300">Learn
                More</a>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="relative bg-cover rounded-lg shadow-md overflow-hidden h-[180px] w-full lg:w-[300px] bg-center"
          style="background-image: url('assets/images/2.png');" data-aos="fade-up" data-aos-delay="200">
          <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div class="text-center px-4">
              <h3 class="text-white text-lg font-semibold mb-3">Health Insurance</h3>
              <a href="#"
                class="inline-block px-4 py-1 border border-white hover:border-yellow-500 text-white text-xs rounded uppercase hover:bg-yellow-500 hover:text-gray-900 transition duration-300">Learn
                More</a>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="relative bg-cover rounded-lg shadow-md overflow-hidden h-[180px] w-full lg:w-[300px] bg-center"
          style="background-image: url('assets/images/3.png');" data-aos="fade-up" data-aos-delay="300">
          <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div class="text-center px-4">
              <h3 class="text-white text-lg font-semibold mb-3">Motor Insurance</h3>
              <a href="#"
                class="inline-block px-4 py-1 border border-white hover:border-yellow-500 text-white text-xs rounded uppercase hover:bg-yellow-500 hover:text-gray-900 transition duration-300">Learn
                More</a>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="relative bg-cover rounded-lg shadow-md overflow-hidden h-[180px] w-full lg:w-[300px] bg-center"
          style="background-image: url('assets/images/4.png');" data-aos="fade-up" data-aos-delay="400">
          <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div class="text-center px-4">
              <h3 class="text-white text-lg font-semibold mb-3">Property Insurance</h3>
              <a href="#"
                class="inline-block px-4 py-1 border border-white hover:border-yellow-500 text-white text-xs rounded uppercase hover:bg-yellow-500 hover:text-gray-900 transition duration-300">Learn
                More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'Personal',
  mounted() {
    AOS.init({
      duration: 600, // Faster animation duration
      easing: 'ease-in-out', // Smooth animation easing
      once: true, // Animation happens only once
    });
  }
}
</script>

<style scoped>
/* Scoped styles for minimal adjustments */
</style>
