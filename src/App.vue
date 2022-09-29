<template>
  <div class="wrapper" v-if="auth0 && !isLoading">
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
          to="/protected"
          v-if="auth0 && auth0.isAuthenticated"
      >
        protected
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
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
