import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/fiches', component: () => import('@/views/FichesView') },
  { path: '/rp-list', component: () => import('@/views/RpListView') },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
