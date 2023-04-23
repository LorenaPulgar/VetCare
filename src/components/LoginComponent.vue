<template>
    <div>
        <body class="fondopagina">
            <main>
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
                    <form action="" class="formulario__login">
                        <h2 class="textTitul">Iniciar Sesión</h2>
                        <input type="text" placeholder="Correo Electronico">
                        <input type="password" placeholder="Contraseña">
                        <a href=""> Haz olvidado tu contraseña?</a>
                        <button>Entrar</button>
                    </form>

                    <!--Register-->
                    <form action="" class="formulario__register">
                        <h2 class="textTitul">Regístrarse</h2>
                        <input type="text" placeholder="Nombre completo">
                        <input type="text" placeholder="Correo Electronico">
                        <input type="text" placeholder="Usuario">
                        <input type="password" placeholder="Contraseña">
                        <input type="password" placeholder="Repetir Contraseña">
                        <button>Regístrarse</button>
                    </form>
                </div>
            </div>
            </main>
        </body>
    </div>
</template>

<style>
    @import "../assets/css/login_Regisro.css";
</style>

<script>
    import "../assets/js/loginjs.js";

    export default {
        name: 'LoginComponent',
    }
</script>

