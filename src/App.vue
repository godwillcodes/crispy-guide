<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SecondaryMenu from '@/components/SecondaryMenu.vue';
import PrimaryMenu from '@/components/PrimaryMenu.vue';
import PageHeader from '@/components/PageHeader.vue';
import Footer from '@/components/Footer.vue'

</script>

<template>
 
    <SecondaryMenu />
    <PrimaryMenu />
    <PageHeader />
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
 

  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
