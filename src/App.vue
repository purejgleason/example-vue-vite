<template>
  <div class="wrapper">
    <div class="links">
      <router-link to="/">Go to Home</router-link>
      <router-link class="other" to="/Other">Go to elsewhere</router-link>
    </div>
    <router-view></router-view>
  </div>


</template>
<script setup>
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