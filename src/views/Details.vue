<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import {articles} from '@/views/article'
import CompArticle from '@/components/CompArticle.vue';
</script>

<template>
  <NavBar/>
  
  <div v-for="element in articles" :article = "articles">
    <p>{{ element.Content }}</p>
  </div>
  <RouterView />
</template>

<style scoped>

</style>
