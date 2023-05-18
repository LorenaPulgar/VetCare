<template>
  <div>
    <div id="help">
      <img src="../assets/img/apoyoimgchat.png" alt="Persona">
      <button><a href="https://api.whatsapp.com/send?phone=573502602037" target="_blank" class="apilink">¿Necesitas ayuda?</a></button>
    </div>
  </div>
</template>

<style>
  .apilink{
    text-decoration: none;
    color: white;
  }
  .apilink:hover{
    color: white;
  }
</style>

<script>
export default {
    name: 'ChatHelp'
}
</script>