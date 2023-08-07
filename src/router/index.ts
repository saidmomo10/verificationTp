import { createRouter, createWebHistory } from 'vue-router'
import Blog from '@/views/Blog.vue'
import Details from '@/views/Details.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Blog
    },

    {
      path: '/Details',
      name: 'details',
      component: Details
    },
  ]
})

export default router
