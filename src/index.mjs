import App from "./App.vue";
import { createApp } from 'vue';
import {mainRoutes} from "./router/index.mjs";

async function bootstrap(){
  const response = await axios.get("/environment");
  return createApp(App)
    .use(mainRoutes)
    .mount('#app');
}

bootstrap().then(()=>{
  console.info("Application started successfully");
}).catch((ex)=>{
  console.error("Application could not be started please report", ex)
});

