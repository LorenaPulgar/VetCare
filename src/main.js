import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

createApp(App).mount('#app')

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC-OxGWceSwlKMhvjaefdCw25gCDKPmf1U",
  authDomain: "vetcare-1a465.firebaseapp.com",
  projectId: "vetcare-1a465",
  storageBucket: "vetcare-1a465.appspot.com",
  messagingSenderId: "3390327220",
  appId: "1:3390327220:web:23be61907dcdf66e8b8ae1",
  measurementId: "G-4J9PDS6HEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {
    name: "LoginForm",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async login() {
        try {
          const userCredential = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
          const user = userCredential.user;
          console.log("Usuario autenticado:", user);
          // Aquí se podría redirigir a la página de inicio del usuario
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
