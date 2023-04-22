<script setup>
    import { almacen } from "../stores/auth.js";

const datos = almacen();
</script>
<template>
    <nav class="menu">
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#Conocenos">Conocenos</a></li>
            <li><a href="#Consejos">Consejos</a></li>
            <li><a href="#">Tienda Virtual</a></li>
            <li v-if="datos.isLoggedIn" @click= "GoToLogIn" class="right"><a href="#"> Ingresa/Registrate </a></li>

        </ul>
    </nav>
</template>

<script>
export default {
    name: "MenuHeader",
    methods: {
        GoToLogIn() {
            this.$router.push({name: 'Login'})
        },
    }
}
</script>