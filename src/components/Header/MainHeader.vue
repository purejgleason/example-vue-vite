<template>
  <q-header
    v-if="!isLoading"
    elevated
  >
    <q-toolbar>
      <img
        src="https://hub.purepm.co/img/pure-p-logo.png"
        style="height:4rem;"
      >
      <q-space />
      <q-btn
        v-if="isAuthenticated"
        flat
        round
      >
        <q-avatar>
          <img :src="idTokenClaims?.picture">
        </q-avatar>
        <q-menu>
          <q-list
            dense
            style="min-width: 100px"
          >
            <q-item
              v-close-popup
              clickable
              @click="onLogout"
            >
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn
        v-else
        label="Login"
        @click="loginWithRedirect"
      />
    </q-toolbar>
    <q-tabs
      v-model="tab"
      align="left"
    >
      <q-route-tab
        name="home"
        label="Home"
        to="/"
      />
      <q-route-tab
        name="other"
        label="Other"
        to="/other"
      />
      <q-route-tab
        v-if="isAuthenticated"
        name="protected"
        label="Protected"
        to="/protected"
      />
    </q-tabs>
  </q-header>
</template>
<script setup>
import {ref} from 'vue';
import * as auth0 from '@auth0/auth0-vue';

const {
  isAuthenticated,
  idTokenClaims,
  loginWithRedirect,
  isLoading,
  logout
} = auth0.useAuth0();

const tab = ref('home');
const onLogout = () => logout({
  returnTo: window.location.origin,
});
</script>
