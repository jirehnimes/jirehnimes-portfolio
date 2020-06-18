<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>

<style lang="scss">
@import '@/styles/_app.scss';
</style>
