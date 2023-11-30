// router.js
import { createRouter, createWebHashHistory } from 'vue-router';
// import HomePage from '../view/HomePage/HomePage.vue';
import CesiumPage from "../view/CesiumPage/CesiumPage.vue";

const routes = [
  { path: '/', component: CesiumPage },
  // { path: '/CesiumPage', component: CesiumPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

