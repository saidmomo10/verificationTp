<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import CompArticle from '@/components/CompArticle.vue';

import {articles} from '@/views/article'
</script>

<template>
  <NavBar/>
  <CompArticle/>
  
  <RouterView />
</template>

<style scoped>

</style>
