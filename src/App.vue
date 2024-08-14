<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import SecondaryMenu from '@/components/SecondaryMenu.vue';
import PrimaryMenu from '@/components/PrimaryMenu.vue';
import PageHeader from '@/components/PageHeader.vue';
import Footer from '@/components/Footer.vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-10">
      <SecondaryMenu  :class="{ 'shadow-md': isScrolled }" ref="secondaryMenu" />
      <PrimaryMenu  :class="{ 'shadow-md': isScrolled }" ref="primaryMenu" />
      
    </div>
   
    <PageHeader />
    <RouterView />
    <Footer />
  </div>
</template>


<style scoped>

</style>
