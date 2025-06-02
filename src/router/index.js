import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostFavoriteMovie.vue'
import NotFound from '../views/404View.vue'

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
    {
      path: '/post-favorite-movie',
      name: 'post-favorite-movie',
      component: PostView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ],
})

export default router
