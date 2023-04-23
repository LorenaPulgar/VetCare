<template>
    <div>
      <div class=headermodif>
        <div class="logo">
          <img class="imglogo" alt="VetCare-logo" src="../assets/img/Logo-VetCare.png">
        </div>
        <div class="logo-text">
          <HeaderIn></HeaderIn>
        </div>
      </div>
      <MenuHeader></MenuHeader>
      <SeccionInicio></SeccionInicio>
      <br>
      <SConocenos></SConocenos>
      <ChatHelp></ChatHelp>
      <br>
      <SFooter></SFooter>
    </div>
  </template>
  
  <script>
  
  import HeaderIn from '../components/Headerin.vue';
  import MenuHeader from '../components/Menu.vue';
  import SeccionInicio from '../components/SeccionClinicas.vue';
  import SConocenos from '../components/SeccionConocenos.vue';
  import ChatHelp from '../components/Chatbot.vue';
  import SFooter from '../components/Footer.vue';
  
  export default {
    name: 'App',
    components: {
      HeaderIn,
      MenuHeader,
      SeccionInicio,
      SConocenos,
      ChatHelp,
      SFooter,
    }
  }
  </script>
  
  <style>
  @import "../assets/css/style.css";
  
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 20px;
  }
  
  </style>
  