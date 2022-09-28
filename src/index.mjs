import App from "./App.vue";
import 'vuetify/styles';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify()

createApp(App)
  .use(vuetify)
  .mount('#app');