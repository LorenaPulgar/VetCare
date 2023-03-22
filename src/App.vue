<template>
  <div clase="logo">
    <img alt="VetCare logo" src="./assets/Logo-VetCare.png">
    <h1 class="logo-text"> VetCare</h1>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');


img {
  height: 50px;
}

.logo-text {
  font-family: 'Abel', sans-serif;
  color: #009698;
}
.logo{
  display: flex;
  align-items: center;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}
</style>
