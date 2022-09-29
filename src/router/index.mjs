import {createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home.vue';
import Other from '../components/Other.vue';
import Protected from '../components/Protected.vue';
import {authGuard} from '@auth0/auth0-vue';

const routes = [
  {path: '/', component: Home},
  {path: '/other', component: Other},
  {
    path: '/protected',
    component: Protected,
    beforeEnter: authGuard,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export {router as mainRoutes};
