import { defineStore } from "pinia";
import router from "../router/index";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth'
import email from '../main'

// eslint-disable-next-line no-unused-vars
export const almacen = defineStore({
  id: "main",
  state: () => ({
    isLoggedIn: true,
    email: "",
    password: "",
    repassword: "",
    errorMessage: "",
  }),
  getters: {},
  actions: {

    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          router.push("/auth"); // Modifica este alert con sweetAlert
          console.log('Usuarioregistrado'); // Modifica este alert con sweetAlert
        })
        .catch((error) => {
          // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },

    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          email = this.email
          console.log('Sesión iniciada correctamente');

          router.push("/auth");
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
        })
        .catch((error) => {
          // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },

    signout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          email = ""
          router.push("/");
          console.log('Sesión terminada');
        })
        .catch((error) => {
          // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },
    signInWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
    
      signInWithPopup(auth, provider)
        .then((result) => {
          email = result.user.email
          router.push("/auth");
        })
        .catch((error) => {
          console.error(error);
        });
    },
}});
