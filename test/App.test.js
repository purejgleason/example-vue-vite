import { describe, it, beforeAll } from 'vitest';
import { mount } from '@vue/test-utils';
import App from "../src/App.vue";

describe("App", ()=>{
  expect(App).toBeTruthy()
  let wrapper;
  beforeAll(()=>{
    wrapper = mount(App);
    expect(wrapper.vm.$.setupState.value).eq(0);
  })
  it("Simple Click Test", async ()=>{
    await wrapper.get('button').trigger('click');
    expect(wrapper.vm.$.setupState.value).eq(1);
  })
})