<template>
  <nav>
    <NavbarItem
      v-for="(item, index) in navItems"
      :key="index"
      :text="item.name"
      :link="item.link"
    />
  </nav>
</template>

<script>
import NavbarItem from './NavbarItem.vue';

export default {
  components: { NavbarItem },

  data() {
    return {
      navItems: [
        {
          name: 'ABOUT ME',
          link: '/about-me',
        },
        {
          name: 'PORTFOLIO',
          link: '/portfolio',
        },
        {
          name: 'SERVICES',
          link: '/services',
        },
        {
          name: 'CONTACT',
          link: '/contact',
        },
      ],
    };
  },
};
</script>
