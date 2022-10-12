<template>
  <div>
    <h1>Welcome Home</h1>
    <h2>{{ value }}</h2>
    <q-btn
      class="increment"
      @click="onClick"
    >
      Test button
    </q-btn>
    <q-btn
      color="primary"
      icon="mail"
      label="On Left"
    />
  </div>
</template>
<script setup>
import {ref} from 'vue';
const value = ref(0);
const onClick = (event)=>{
  value.value+=1;
};
</script>
