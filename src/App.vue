<template>
  <h1>Now Vue is working</h1>
  <v-app>
    <v-btn @click="onClick">Test button</v-btn>
  </v-app>
</template>
<script setup>
import {ref} from "vue";
const value = ref(0);
const onClick = (event)=>{
  value.value=1;
}
</script>