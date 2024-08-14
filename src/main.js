import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Initialize AOS
app.directive('aos', {
  mounted(el, binding) {
    // Initialize AOS on mount
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  },
});

app.mount('#app');
