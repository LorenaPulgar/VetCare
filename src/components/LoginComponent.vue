<script setup>
import { almacen } from '../stores/auth.js'
const datos = almacen() 
</script>

<template>
    <div class="fondopagina divcontenedor">
        <button class="btnvolver" @click="GoToHome"><i class="fa-regular fa-circle-xmark fa-xl"></i></button>
        <div class="contenedor__todo">
            <div class="caja__trasera">
                <div class="caja__trasera-login">
                    <div class="logopagina">
                        <img src="../assets/img/Logo-VetCare-invertido.png" alt="Logo de la página">
                        <h1 class="logoText">Vetcare</h1>
                    </div>
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para entrar en la página</p>
                    <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                </div>
                <div class="caja__trasera-register">
                    <div class="logopagina">
                        <img src="../assets/img/Logo-VetCare-invertido.png" alt="Logo de la página">
                        <h1 class="logoText">Vetcare</h1>
                    </div>
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Regístrate para que puedas iniciar sesión</p>
                    <button id="btn__registrarse">Regístrarse</button>
                </div>
            </div>

            <!--Formulario de Login y registro-->
            <div class="contenedor__login-register">
                <!--Login-->
                <form @submit.prevent="datos.signIn" class="formulario__login">
                    <h2 class="textTitul">Iniciar Sesión</h2>
                    <input v-model="datos.email" type="email" required="true" placeholder="Correo Electronico">
                    <input v-model="datos.password" type="password" required="true" placeholder="Contraseña">
                    <a href=""> Haz olvidado tu contraseña?</a>
                    <button>Entrar</button>
                    <div class="redessociales">
                        <p> Entra con otra cuenta:</p> 
                        <i @click="datos.signInWithGoogle" class="fa-brands fa-google fa-2xl" style="color: #0aa0a3;"></i>
                    </div>
                </form>

                <!--Register-->
                <form @submit.prevent="datos.register" class="formulario__register">
                    <h2 class="textTitul">Regístrarse</h2>
                    <input type="text" placeholder="Nombre completo">
                    <input v-model="datos.email" type="email" required="true" placeholder="Correo Electronico">
                    <input type="text" placeholder="Usuario">
                    <input v-model="datos.password" type="password" required="true" placeholder="Contraseña">
                    <input v-model="datos.repassword" type="password" required="true" placeholder="Repetir Contraseña">
                    <button>Regístrarse</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
@import "../assets/css/login_Regisro.css";
</style>

<script>
export default {
    name: 'LoginComponent',
    methods: {
        GoToHome(){
            this.$router.push({name: 'Home'})
        },
},
    mounted() {
        document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
        document.getElementById("btn__registrarse").addEventListener("click", register);
        window.addEventListener("resize", anchoPage);

        //Declarando variables
        var formulario_login = document.querySelector(".formulario__login");
        var formulario_register = document.querySelector(".formulario__register");
        var contenedor_login_register = document.querySelector(".contenedor__login-register");
        var caja_trasera_login = document.querySelector(".caja__trasera-login");
        var caja_trasera_register = document.querySelector(".caja__trasera-register");

        //FUNCIONES

        function anchoPage() {

            if (window.innerWidth > 850) {
                caja_trasera_register.style.display = "block";
                caja_trasera_login.style.display = "block";
            } else {
                caja_trasera_register.style.display = "block";
                caja_trasera_register.style.opacity = "1";
                caja_trasera_login.style.display = "none";
                formulario_login.style.display = "block";
                contenedor_login_register.style.left = "0px";
                formulario_register.style.display = "none";
            }
        }

        anchoPage();


        function iniciarSesion() {
            if (window.innerWidth > 850) {
                formulario_login.style.display = "block";
                contenedor_login_register.style.left = "10px";
                formulario_register.style.display = "none";
                caja_trasera_register.style.opacity = "1";
                caja_trasera_login.style.opacity = "0";
            } else {
                formulario_login.style.display = "block";
                contenedor_login_register.style.left = "0px";
                formulario_register.style.display = "none";
                caja_trasera_register.style.display = "block";
                caja_trasera_login.style.display = "none";
            }
        }

        function register() {
            if (window.innerWidth > 850) {
                formulario_register.style.display = "block";
                contenedor_login_register.style.left = "410px";
                formulario_login.style.display = "none";
                caja_trasera_register.style.opacity = "0";
                caja_trasera_login.style.opacity = "1";
            } else {
                formulario_register.style.display = "block";
                contenedor_login_register.style.left = "0px";
                formulario_login.style.display = "none";
                caja_trasera_register.style.display = "none";
                caja_trasera_login.style.display = "block";
                caja_trasera_login.style.opacity = "1";
            }
        }
    }
}
</script>

