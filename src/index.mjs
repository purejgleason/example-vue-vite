import {createApp} from 'vue';
import Error from './Error.vue';
import {VueApp} from './vue-app.mjs';

const app = new VueApp();
app.bootstrap().then(()=>{
  console.info('Application started successfully');
}).catch((ex)=>{
  console.error('Application could not be started please report', ex);
  createApp(Error)
      .mount('#app');
});

