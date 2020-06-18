<template>
  <div class="navbar-item">
    <!-- <img src="/images/triangle.png"> -->
    <router-link :to="link">
      {{ text }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Nav Item',
      required: true,
    },
    link: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
