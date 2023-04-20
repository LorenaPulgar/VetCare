<template>
    <nav class="menu">
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#Conocenos">Conocenos</a></li>
            <li><a href="#Consejos">Consejos</a></li>
            <li><a href="#">Tienda Virtual</a></li>
            <!-- Iniciar sesión --> 
            <!-- btn btn-outline-primary mx-2 -->
            <button v-if="!existeUsuario" type="button" class="right" 
            data-bs-toggle="modal" 
            data-bs-target="#login">
            Iniciar sesión
            </button>
            <!-- Cerrar sesión -->
            <!-- btn btn-outline-danger me-2 -->
            <button v-if="existeUsuario" class="right"
            data-bs-toggle="modal" 
            data-bs-target="#login"
            @click="signout">
            Cerrar sesión
            </button>
            <!-- Regístrate --> 
            <!-- btn btn-outline-warning -->
            <button v-if="!existeUsuario" type="button" 
            class="right" 
            data-bs-toggle="modal" 
            data-bs-target="#registro"><!-- inicia modal con id="registro" --> 
            Regístrate
            </button> 
        </ul>
    </nav>
    <!-- //// Modal - Iniciar sesión //// -->
    <div class="modal fade" id="login">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Inicia de sesión</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form @submit.prevent="login( this.email, this.password )">
            <!-- CORREO --> 
            <div class="input-group mb-3">
            <span class="input-group-text">Correo</span>
            <input v-model="email" 
                    type="email"
                    required="true"
                    class="form-control">
            </div>
            <!-- PASSWORD --> 
            <div class="input-group mb-3">
            <span class="input-group-text">Password</span>
            <input v-model="password" 
                    type="password"
                    required="true" 
                    class="form-control">
            </div>
            <div class="d-grid gap-2">
                <button type="submit" 
                class="btn btn-primary" 
                data-bs-dismiss="modal">
                Iniciar sesión
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
    <!-- //// Modal - Registrarse //// -->
    <div class="modal fade" id="registro">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Regístrate</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form @submit.prevent="register( this.email, this.password )">  
            <!-- CORREO -->
            <div class="input-group mb-3">
            <span class="input-group-text">Correo</span>
            <input v-model="email" 
                    type="email"
                    required="true"
                    class="form-control">
            </div>
            <!-- PASSWORD -->
            <div class="input-group mb-3">
            <span class="input-group-text">Password</span>
            <input v-model="password" 
                    type="password"
                    required="true" 
                    class="form-control">
            </div>
            <!-- REPASSWORD -->
            <div class="input-group mb-3">
            <span class="input-group-text">Repite Password</span>
            <input v-model="repassword" 
                    type="password"
                    required="true" 
                    class="form-control">
            </div>
            <div class="d-grid gap-2">
                <button type="submit" :disabled="!desactivar" class="btn btn-primary" data-bs-dismiss="modal">Registrar</button>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
</template>

<script>

import { 
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  } from "firebase/auth";
  import { mapGetters } from 'vuex'

export default {
    name: "MenuHeader",
    data() {
        return {
            email: '',
            password: '',
            repassword: '',
            errorMessage: ''
        };
    },
   methods: {
     register(email, password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('¡Registrado!');
        })
        .catch((error) => {
            const errorCode = error.code;
            this.errorMessage = error.message;
            alert(this.errorMessage);
            // ..
        });
      },        
     login( email, password ) {
       const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('¡Sesión iniciada!');
            // Signed in
            const user = userCredential.user;
            // ...
            })
        .catch((error) => {
        const errorCode = error.code;
        this.errorMessage = error.message;
        alert(this.errorMessage);
        });
        },
     signout () {
       const auth = getAuth();
      signOut(auth).then(() => {
        alert('¡Sesión cerrada! Inicia sesión.');
      }).catch((error) => {
      });
     }
   },
   computed: {
    ...mapGetters(['existeUsuario'])
  }
}
</script>