import {createApp} from 'vue';
import App from './App.vue';
import {mainRoutes} from './router/index.mjs';
import {createAuth0} from '@auth0/auth0-vue';
import mitt from 'mitt';
import {Quasar} from 'quasar';
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
// Import Quasar css
import 'quasar/src/css/index.sass';

const emitter = mitt();

class VueApp {
  async bootstrap() {
    const response = await axios.get('/environment'); // eslint-disable-line no-unused-vars
    this.env = response.data;
    this.app = createApp(App);
    this.app.provide('emitter', emitter);
    if (this.env.auth0) {
      console.info('Config Found!, Adding Auth0');
      this.app.config.globalProperties.$authConfigured = true;
      this.env.auth0.redirect_uri = window.location.origin;
      this.env.auth0.cacheLocation = 'localstorage';
      this.env.auth0.audience='https://admin.purepm.dev';
      this.env.auth0.scope='admin';
      // TODO: Update on function
      this.env.auth0.client_id = this.env.auth0.clientId;
      // TODO Add scope
      this.app.use(createAuth0(this.env.auth0));
    } else {
      console.info('No Auth0 Config Found, Authentication unavailable');
      this.app.config.globalProperties.$authConfigured = false;
    }
    this.app.use(Quasar, {
      plugins: {}, // import Quasar plugins and add here
    });
    this.app.use(mainRoutes);
    return this.app.mount('#app');
  }
}

export {VueApp};
