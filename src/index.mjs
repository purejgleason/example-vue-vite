import App from './App.vue';
import {createApp} from 'vue';
import {mainRoutes} from './router/index.mjs';
import Error from './Error.vue';

async function bootstrap() {
  const response = await axios.get('/environment'); // eslint-disable-line no-unused-vars
  return createApp(App)
      .use(mainRoutes)
      .mount('#app');
}

bootstrap().then(()=>{
  console.info('Application started successfully');
}).catch((ex)=>{
  console.error('Application could not be started please report', ex);
  createApp(Error)
      .mount('#app');
});

