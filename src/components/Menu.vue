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
            <li @click="GoToLogIn" class="right"><a>Ingresa</a></li>

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
    }
}
</script>