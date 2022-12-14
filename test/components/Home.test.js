import {describe, it, beforeAll, vi} from 'vitest';
import {nextTick} from 'vue';
import {mount} from '@vue/test-utils';
import Home from '../../src/components/Home.vue';
import {Quasar} from 'quasar';

const onLogin = ()=>{ };
const onLogout = ()=>{ };

// TODO: Login functionality has been moved to header and so this must be refactored
describe.skip('Home', ()=>{
  expect(Home).toBeTruthy();
  let wrapper;
  let loginWithRedirect;
  let logout;
  afterEach(() => {
    vi.restoreAllMocks();
  });
  beforeAll(()=>{
    loginWithRedirect = vi.fn().mockImplementation(onLogin);
    logout = vi.fn().mockImplementation(onLogout);
  });
  describe('Logged in', ()=>{
    beforeAll(async ()=>{
      wrapper = mount(Home, {
        global: {
          plugins: [
            Quasar,
          ],
        },
      });
      wrapper.vm.$.setupState.auth0 = {
        isAuthenticated: true,
        logout,
      };
      await nextTick();
      expect(wrapper.vm.$.setupState.value).eq(0);
    });
    it('Simple Click Test', async ()=>{
      await wrapper.find('.increment').trigger('click');
      expect(wrapper.vm.$.setupState.value).eq(1);
    });
  });
  describe('logged out', ()=>{
    beforeAll(async ()=>{
      wrapper = mount(Home, {
        global: {
          plugins: [
            Quasar,
          ],
        },
      });
      wrapper.vm.$.setupState.auth0 = {
        isAuthenticated: false,
        isLoading: false,
        loginWithRedirect,
      };
      await nextTick();
      expect(wrapper.vm.$.setupState.value).eq(0);
    });
    it('Test the login', async ()=>{
      await wrapper.find('.login').trigger('click');
      expect(loginWithRedirect).toHaveBeenCalledTimes(1);
    });
  });
});
