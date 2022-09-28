import { assert, describe, it, beforeAll } from 'vitest';
import { mount } from '@vue/test-utils';
import App from "../src/App.vue";

describe("App", ()=>{
  let wrapper;
  beforeAll("Setup the app",()=>{
    wrapper = mount(App);
    assert("The app should have a value of 0 to start", wrapper.vm.$.setupState.value == 0);
  })
  it("Simple Click Test", async ()=>{
    await wrapper.get('button').trigger('click')
    assert("The app should have a value of 1 after click", wrapper.vm.$.setupState.value == 1);
  })
})