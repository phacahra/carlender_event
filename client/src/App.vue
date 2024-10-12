<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/util/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
/* Add any global styles here */
</style>
