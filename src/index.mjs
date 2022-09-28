import App from "./App.vue";
import { createApp } from 'vue';
import {mainRoutes} from "./router/index.mjs";

createApp(App)
  .use(mainRoutes)
  .mount('#app');