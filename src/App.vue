<template>
  <div class=headermodif>
    <div class="logo">
      <img class="imglogo" alt="VetCare-logo" src="./assets/Logo-VetCare.png">
    </div>
    <div class="logo-text">
      <HeaderIn></HeaderIn>
    </div>
  </div>
  <MenuHeader></MenuHeader>
</template>

<script>

import HeaderIn from './components/Headerin.vue';
import MenuHeader from './components/Menu.vue'; 

export default {
  name: 'App',
  components: {
    HeaderIn,
    MenuHeader
  }
}
</script>

<style>
@import "./assets/css/style.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}

</style>
