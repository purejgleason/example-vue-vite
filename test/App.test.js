import {describe, it, beforeAll} from 'vitest';
import {mount} from '@vue/test-utils';
import {mainRoutes} from '../src/router/index.mjs';
import App from '../src/App.vue';
import {nextTick, ref} from 'vue';
import {Quasar} from 'quasar';
import * as auth0 from '@auth0/auth0-vue';

describe('App', ()=>{
  expect(App).toBeTruthy();
  let wrapper;
  beforeAll(async ()=>{
    vi.mock('@auth0/auth0-vue');
    auth0.useAuth0 = vi.fn().mockReturnValue({
      isLoading: ref(false),
      isAuthenticated: ref(true),
    });
    await mainRoutes.push('/');
    // After this line, router is ready
    await mainRoutes.isReady();
    wrapper = mount(App, {
      global: {
        plugins: [
          mainRoutes,
          Quasar,
        ],
      },
    });
    await nextTick();
    expect(wrapper.html()).toContain('Welcome Home');
  });
  it('Simple Click Test', async ()=>{
    // await wrapper.find('.other').trigger('click');
    await mainRoutes.push('/other');
    await mainRoutes.isReady();
    expect(wrapper.html()).toContain('I Think you should be somewhere else');
  });
});
