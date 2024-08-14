<template>
  <section class="bg-[#F9EBE8] p-4">
    <div class="w-full max-w-7xl mx-auto">
      <!-- Title -->


      <!-- Currency Rates -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-[#30120b] text-base font-normal">
        <h1 class="text-[#30120b] text-2xl font-black  text-center">FOREX</h1>
        <div v-for="(rate, currency) in visibleRates" :key="currency" class="flex flex-col items-center">
          <span class="block">
            <span data-aos="fade-right" class="font-bold">{{ currency }}</span>
            <span> Buying: {{ rate }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

export default {
  data() {
    return {
      rates: {}, // All fetched rates
      currencies: [], // List of all currencies
      currentPage: 0,
      itemsPerPage: 5,
      interval: null,
    };
  },
  computed: {
    visibleRates() {
      // Calculate the start index based on the current page
      const start = this.currentPage * this.itemsPerPage;
      // Slice the currencies array to get only the visible items for the current page
      return this.currencies.slice(start, start + this.itemsPerPage).reduce((obj, key) => {
        obj[key] = this.rates[key];
        return obj;
      }, {});
    },
  },
  mounted() {
    this.fetchExchangeRates();
    this.startAutoRotation();
    AOS.init({
      duration: 600, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    async fetchExchangeRates() {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/KES');

        // Extract all currencies from the response
        this.currencies = Object.keys(response.data.rates);

        // Calculate the inverse of the rates (KES to Currency)
        this.rates = this.currencies.reduce((obj, currency) => {
          obj[currency] = (1 / response.data.rates[currency]).toFixed(2);
          return obj;
        }, {});
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    },
    startAutoRotation() {
      // Change displayed rates every 6 seconds
      this.interval = setInterval(() => {
        this.currentPage = (this.currentPage + 1) % Math.ceil(this.currencies.length / this.itemsPerPage);
      }, 6000);
    },
  },
};
</script>

<style scoped>
/* Scoped styles (if needed) */
</style>