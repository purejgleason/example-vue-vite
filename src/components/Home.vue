<template>
  <div>
    <h1>Welcome Home</h1>
    <h2>{{ value }}</h2>
    <button
      class="increment"
      @click="onClick"
    >
      Test button
    </button>

    <button
      v-if="isAuthenticated"
      class="logout"
      @click="auth0.logout"
    >
      Logout
    </button>
    <button
      v-else
      class="login"
      @click="auth0.loginWithRedirect"
    >
      Login
    </button>
    <q-btn
      color="primary"
      icon="mail"
      label="On Left"
    />
  </div>
</template>
<script setup>
import {ref, computed} from 'vue';
import {useAuth0} from '@auth0/auth0-vue';
const auth0 = ref(useAuth0());
const value = ref(0);
const isAuthenticated = computed(()=>{
  return !!auth0?.value?.isAuthenticated;
});
const onClick = (event)=>{
  value.value+=1;
};
</script>
