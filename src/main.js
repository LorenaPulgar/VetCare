import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import store from './store'

createApp(App).mount('#app')

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
      const usuarioActivo ={
        email: user.email,
        uid: user.uid
      }
     store.dispatch('detectarUsuario', usuarioActivo)
     console.log(usuarioActivo)
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
  } 
});

