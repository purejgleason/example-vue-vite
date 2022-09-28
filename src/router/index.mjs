import {createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home.vue';
import Other from '../components/Other.vue';
const routes = [
  {path: '/', component: Home},
  {path: '/other', component: Other},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export {router as mainRoutes};
