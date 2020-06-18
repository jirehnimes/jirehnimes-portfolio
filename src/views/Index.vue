<template>
  <div id="index">
    <div id="title">
      <div id="title-wrapper">
        <h2>Hi, I'm</h2>
        <h1>JIREH NIMES</h1>
        <h4>Full Stack Developer</h4>
      </div>

      <SocialIcons />
    </div>

    <div id="image">
      <img src="/images/index-image.png">
    </div>
  </div>
</template>

<script>
import SocialIcons from '../components/SocialIcons.vue';

export default {
  components: { SocialIcons },
};
</script>
