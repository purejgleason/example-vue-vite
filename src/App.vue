<template>
  <div
    v-if="auth0 && !isLoading"
    class="wrapper"
  >
    <div class="links">
      <router-link to="/">
        Go to Home
      </router-link>
      <router-link
        class="other"
        to="/other"
      >
        Go to elsewhere
      </router-link>
      <router-link
        v-if="auth0 && auth0.isAuthenticated"
        to="/protected"
      >
        protected
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script setup>
import {ref} from 'vue';
import {useAuth0} from '@auth0/auth0-vue';
const auth0 = ref(useAuth0());
</script>
<style scoped>
.links{
  display:flex;
}
.wrapper{
  display:flex;
  flex-direction: column;
}
</style>
