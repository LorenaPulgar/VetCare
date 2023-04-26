<script setup>
    import { almacen } from "../stores/auth.js";

    const datos = almacen();
</script>
<template>
    <div>
        <nav class="menu">
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#Conocenos">Conocenos</a></li>
            <li><a href="#Consejos">Consejos</a></li>
            <li><a href="#">Tienda Virtual</a></li>
            <li v-if="!datos.isLoggedIn" @click="GoToLogIn" class="right"><a>Ingresar</a></li>
            <li v-if="datos.isLoggedIn" @click="datos.signout" class="right"><a>Cerrar Sesión</a></li>
            <li v-if="datos.isLoggedIn" @click="GoToUserProfile" class="right"><a>Perfil</a></li>

        </ul>
    </nav>
    </div>
</template>

<script>
export default {
    name: "MenuHeader",
    methods: {
        GoToLogIn() {
            this.$router.push({name: 'LoginMenu'})
        },
        GoToUserProfile() {
            this.$router.push({name: 'UserMenu'})
        }
    }
}
</script>