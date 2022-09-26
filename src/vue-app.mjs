import {createApp} from 'vue';
import App from './App.vue';
import {mainRoutes} from './router/index.mjs';
import {createAuth0} from '@auth0/auth0-vue';
const { createVuetify } = Vuetify



class VueApp {
  async bootstrap() {
    const vuetify = createVuetify()
    const response = await axios.get('/environment'); // eslint-disable-line no-unused-vars
    this.env = response.data;
    this.app = createApp(App);
    if (this.env.auth0) {
      console.info('Config Found!, Adding Auth0');
      this.app.config.globalProperties.$authConfigured = true;
      this.env.auth0.redirect_uri = window.location.origin;
      // TODO: Update on function
      this.env.auth0.client_id = this.env.auth0.clientId;
      // TODO Add scope
      this.app.use(createAuth0(this.env.auth0));
    } else {
      console.info('No Auth0 Config Found, Authentication unavailable');
      this.app.config.globalProperties.$authConfigured = false;
    }

    return this.app
        .use(vuetify)
        .use(mainRoutes)
        .mount('#app');
  }
}

export {VueApp};
