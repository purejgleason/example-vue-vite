<template>
  <q-layout
    v-if="doneLoading"
    view="lHh lpr lFf"
    container
    class="shadow-2 rounded-borders"
  >
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        <q-toolbar-title>Quasar Framework</q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="home"
        >
          <router-link to="/" />
        </q-btn>
        <q-btn label="Other">
          <router-link
            class="other"
            to="/other"
          />
        </q-btn>
        <q-btn label="Protected">
          <router-link
            v-if="auth0 && auth0.isAuthenticated"
            to="/protected"
          />
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import {ref, computed} from 'vue';
import {useAuth0} from '@auth0/auth0-vue';
const auth0 = ref(useAuth0());
const doneLoading = computed(()=>{
  return !auth0?.value?.isLoading?.value;
});
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
