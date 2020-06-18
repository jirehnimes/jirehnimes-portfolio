<template>
  <div id="navbar" class="clearfix">
    <div id="header" class="navbar-wrapper">
      <div id="logo-container">
        <router-link to="/">
          <img id="logo" src="/images/logo.png">
        </router-link>
      </div>

      <div id="navigation">
        <button id="toggle-button" @click="toggle">
          <i class="fas fa-bars"></i>
        </button>

        <NavbarItems id="navbar-items" />
      </div>
    </div>

    <NavbarItems id="toggle-list" class="navbar-wrapper" />
  </div>
</template>

<script>
import NavbarItems from './NavbarItems.vue';

export default {
  components: { NavbarItems },

  data() {
    return {
      isToggle: false,
    };
  },

  methods: {
    toggle() {
      this.isToggle = !this.isToggle;

      const el = document.querySelector('#toggle-list');

      if (this.isToggle) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    },
  },
};
</script>
