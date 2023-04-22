<template>
  <div>
    <div id="help">
      <img src="../assets/img/apoyoimgchat.png" alt="Persona">
      <button onclick="showChat()">Necesitas ayuda?</button>
    </div>
    
    <div id="chatbot" style="display:none">
      <button onclick="closeChat()"><i class="fa-solid fa-x" style="color: #00a0a3;"></i></button>
      <!-- Aquí es donde irá el chatbot -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'ChatHelp'
}
</script>