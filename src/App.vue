<template>
  <h1>Now Vue is working</h1>
  <button @click="onClick">Test button</button>
</template>
<script setup>
import {ref} from "vue";
const value = ref(0);
const onClick = (event)=>{
  value.value=1;
}
</script>