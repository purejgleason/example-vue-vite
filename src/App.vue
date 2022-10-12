<template>
  <q-layout
    view="lHh lpr lFf"
    container
    class="shadow-2"
  >
    <MainHeader v-if="!isLoading" />
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view v-if="!isLoading" />
        <q-circular-progress
          v-else
          indeterminate
          size="290px"
          :thickness="0.2"
          center-color="grey-8"
          track-color="transparent"
          class="q-ma-md"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import * as auth0 from '@auth0/auth0-vue';
import MainHeader from './components/Header/MainHeader.vue';
const {isLoading} = auth0.useAuth0();
</script>
<style scoped>
</style>
