<script setup>
    import { almacen } from "../stores/auth.js";

    const datos = almacen();
</script>
<template>
    <div>
        <nav class="menu">
            <ul> 
                <li><a @click="GotoHome" style="color: white;">Inicio</a></li>
                <li><a href="https://laika.com.co/" target="_blank">Tienda Virtual</a></li>
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
        GotoHome() {
            this.$router.push({name: 'Home'})
        },
        GoToLogIn() {
            this.$router.push({name: 'LoginMenu'})
        },
        GoToUserProfile() {
            this.$router.push({name: 'UserMenu'})
        }
    }
}
</script>