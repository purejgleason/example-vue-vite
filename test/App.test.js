import {describe, it, beforeAll} from 'vitest';
import {mount} from '@vue/test-utils';
import {mainRoutes} from '../src/router/index.mjs';
import App from '../src/App.vue';
import {nextTick} from 'vue';
import {Quasar} from 'quasar';

describe('App', ()=>{
  expect(App).toBeTruthy();
  let wrapper;
  beforeAll(async ()=>{
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
    wrapper.vm.$.setupState.auth0 = {
      isLoading: true,
      isAuthenticated: true,
    };
    await nextTick();
    expect(wrapper.html()).toContain('Welcome Home');
  });
  it('Simple Click Test', async ()=>{
    // await wrapper.find('.other').trigger('click');
    await mainRoutes.push('/other');
    await mainRoutes.isReady();
    console.log(wrapper.html());
    expect(wrapper.html()).toContain('I Think you should be somewhere else');
  });
});
