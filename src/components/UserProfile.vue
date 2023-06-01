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
    <div class="container">
      <div class="info">
        <img src="../assets/img/perroperfil.png" alt="Imagen redonda">
        <p id="correo"> email </p>
      </div>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action" data-toggle="modal"
          data-target="#form-nombre">
          Modificar nombre
          <i class="fa-solid fa-chevron-right float-right ml-2"></i>
        </button>
        <button type="button" class="list-group-item list-group-item-action" data-toggle="modal"
          data-target="#form-usuario">
          Modificar usuario
          <i class="fa-solid fa-chevron-right float-right ml-2"></i>
        </button>
        <button type="button" class="list-group-item list-group-item-action" data-toggle="modal"
          data-target="#form-contraseña">
          Modificar contraseña
          <i class="fa-solid fa-chevron-right float-right ml-2"></i>
        </button>
      </div>
      <div id="form-nombre" class="modal">
        <!-- Formulario para modificar nombre -->
        <div class="modal fade" id="form-nombre" tabindex="-1" aria-labelledby="form-nombre-label" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="form-nombre-label">Modificar nombre</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="nombre-actual">Nombre actual:</label>
                    <input type="text" class="form-control" id="nombre-actual" value="John Doe" disabled>
                  </div>
                  <div class="form-group">
                    <label for="nombre-nuevo">Nuevo nombre:</label>
                    <input type="text" class="form-control" id="nombre-nuevo" required>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-primary">Guardar cambios</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="form-usuario" class="modal">
        <!-- Aquí irá el formulario para modificar el usuario -->
      </div>
      <div id="form-contraseña" class="modal">
        <!-- Aquí irá el formulario para modificar la contraseña -->
      </div>
      <button class="btneliminar"> Eliminar cuenta </button>
    </div>
  </div>
</template>
  
<script>
import HeaderIn from './Headerin.vue';
import MenuHeader from './Menu.vue';
import email from '../main'
export default {
  name: "UserProfile",
  mounted() {

    const mail = document.getElementById('correo')
    mail.textContent = email;

    // Obtener los botones de la lista desplegable
    const buttons = document.querySelectorAll('.list-group-item button');
    // Agregar un event listener a cada botón
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        // Obtener el ID del formulario correspondiente
        const formId = button.dataset.formId;
        
        // Mostrar el formulario correspondiente
        const form = document.getElementById(formId);
        form.classList.add('show');
        
        // Ocultar los otros formularios
        const otherForms = document.querySelectorAll('.modal:not(#' + formId + ')');
        otherForms.forEach((form) => {
          form.classList.remove('show');
        });
      });
    });
},
  data() {
    return {
      name: "",
      email: "",
    };
  },
  components: {
    HeaderIn,
    MenuHeader,
  }
}
</script>
  
<style scoped>
@import "../assets/css/style.css";
@import "../assets/css/UserProfile_style.css"
</style>  