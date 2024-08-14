<template>
  <section class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Title and Subtitle -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-2xl text-gray-900 mb-4">Corporate Solutions</h2>
        <p class="text-base text-gray-600">
          NBK Bancassurance Intermediary Limited has partnered with major insurers to offer your organization the best
          risk management advisory and insurance services in Kenya.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Card 1 -->
        <div
          class="relative bg-cover rounded-lg shadow-lg overflow-hidden h-[181px] w-full lg:w-[291px] bg-center bg-cover"
          style="background-image: url('assets/images/Rectangle 2610(6).png');" data-aos="fade-up" data-aos-delay="100">
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div class="text-center">
              <h3 class="text-white text-lg font-semibold mb-4">General Insurance</h3>
              <a href="#"
                class="inline-block px-4 py-2 border border-white hover:border-[#FFBA00] text-white text-xs rounded uppercase hover:bg-[#FFBA00] font-light hover:text-black transition duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="relative bg-cover rounded-lg shadow-lg overflow-hidden h-[181px] w-full lg:w-[291px] bg-center bg-cover"
          style="background-image: url('assets/images/Rectangle 2610(7).png');" data-aos="fade-up" data-aos-delay="200">
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div class="text-center">
              <h3 class="text-white text-lg font-semibold mb-4">Health Insurance</h3>
              <a href="#"
                class="inline-block px-4 py-2 border border-white hover:border-[#FFBA00] text-white text-xs rounded uppercase hover:bg-[#FFBA00] font-light hover:text-black transition duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="relative bg-cover rounded-lg shadow-lg overflow-hidden h-[181px] w-full lg:w-[291px] bg-center bg-cover"
          style="background-image: url('assets/images/Rectangle 2610(5).png');" data-aos="fade-up" data-aos-delay="300">
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div class="text-center">
              <h3 class="text-white text-lg font-semibold mb-4">Motor Insurance</h3>
              <a href="#"
                class="inline-block px-4 py-2 border border-white hover:border-[#FFBA00] text-white text-xs rounded uppercase hover:bg-[#FFBA00] font-light hover:text-black transition duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div
          class="relative bg-cover rounded-lg shadow-lg overflow-hidden h-[181px] w-full lg:w-[291px] bg-center bg-cover"
          style="background-image: url('assets/images/Rectangle 2610(4).png');" data-aos="fade-up" data-aos-delay="400">
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div class="text-center">
              <h3 class="text-white text-lg font-semibold mb-4">Property Insurance</h3>
              <a href="#"
                class="inline-block px-4 py-2 border border-white hover:border-[#FFBA00] text-white text-xs rounded uppercase hover:bg-[#FFBA00] font-light hover:text-black transition duration-300">
                Learn More
              </a>
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
  name: 'CorporateSolutions',
  mounted() {
    AOS.init({
      duration: 600, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>
