<template>
  <div>
    <h1>Welcome Home</h1>
    <h2>{{ value }}</h2>
    <button @click="onClick">
      Test button
    </button>
    <button v-if="!isAuthenticated" @click="loginWithRedirect">Login</button>
    <button v-else @click="logout">Logout</button>
  </div>
</template>
<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
import {ref} from 'vue';
const value = ref(0);
const onClick = (event)=>{
  value.value+=1;
};
</script>
