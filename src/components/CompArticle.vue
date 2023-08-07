<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {articles} from '@/views/article'

defineProps(['article'])
</script>

<template>
  <div class="wrapper">
      <section class="content">
        <div class="container">
          <ul class="gallery">
            <li v-for="element in articles" class="gallery_competence">
              <img :src="element.img" alt="" />
              <h5>{{ element.id }}</h5>
              <h3>{{ element.title }}</h3>
              <p>{{ element.summary }}</p>
              <RouterLink :to="`/Details/${element.id}`">voir plus</RouterLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  <RouterView />
</template>

<style scoped>
.container {
  max-width: calc(100% - 100px);
  margin: 0 auto;
}

li img{
    width: 300px;
}

.gallery {
  list-style: none;
  width: 70%;
  margin: 0 auto;
  padding: 0 auto;
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  grid-gap: 80px;
  justify-content: center;
}
</style>
