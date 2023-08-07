<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

const menuItem = [
  {
    name: 'Home',
    path: '/'
  },

  {
    name: 'Blog',
    path: '/blog'
  },
  
  {
    name: 'About',
    path: '/about'
  },
]
</script>

<template>
  <NavBar/>
  
  <RouterView />
</template>

<style scoped>

</style>
