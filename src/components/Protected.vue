<template>
  <h2>Welcome to the secure route</h2>
  <h3>{{ token }}</h3>
</template>
<script setup>
import {ref, onMounted} from 'vue';
import {useAuth0} from '@auth0/auth0-vue';
const {getAccessTokenSilently, getAccessTokenWithPopup, isAuthenticated} = useAuth0();
const token = ref('');
onMounted(async ()=>{
  console.log('Mounted', isAuthenticated.value);
  if (isAuthenticated) {
    try {
      console.log('Getting silently');
      token.value = await getAccessTokenSilently();
      console.log(token.value);
    } catch (err) {
      console.error('error getting token', err);
      token.value = await getAccessTokenWithPopup({
        scope: 'admin',
      });
      console.log(token.value);
    }
  }
});

</script>
