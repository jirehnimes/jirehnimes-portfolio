<template>
  <div id="about-me" class="grid-container">
    <Sidebar class="grid-item" />
    <Content class="grid-item" />
  </div>
</template>

<script>
import Content from './Content.vue';
import Sidebar from './Sidebar.vue';

export default {
  components: {
    Content,
    Sidebar,
  },
};
</script>
