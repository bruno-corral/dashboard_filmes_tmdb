import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/my-favorite-movies',
      name: 'my-favorite-movies',
      component: () => import('../views/MyFavoriteMoviesView.vue'),
    },
  ],
})

export default router
