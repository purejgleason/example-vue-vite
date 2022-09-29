<template>
  <div>
    <h1>Welcome Home</h1>
    <h2>{{ value }}</h2>
    <button @click="onClick" class="increment">
      Test button
    </button>

    <button class="logout" v-if="isAuthenticated" @click="auth0.logout">Logout</button>
    <button class="login" v-else @click="auth0.loginWithRedirect">Login</button>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
const auth0 = ref(useAuth0());
const value = ref(0);
const isAuthenticated = computed(()=>{
  return !!auth0?.value?.isAuthenticated?.value
});
const onClick = (event)=>{
  value.value+=1;
};
</script>
