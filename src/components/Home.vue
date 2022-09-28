<template>
  <div>
    <h1>Welcome Home</h1>
    <h2>{{value}}</h2>
    <button @click="onClick">Test button</button>
  </div>
</template>
<script setup>
import {ref} from "vue";
const value = ref(0);
const onClick = (event)=>{
  value.value+=1;
}
</script>