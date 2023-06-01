import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'

import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"


const firebaseConfig = {
  apiKey: "AIzaSyC-OxGWceSwlKMhvjaefdCw25gCDKPmf1U",
  authDomain: "vetcare-1a465.firebaseapp.com",
  projectId: "vetcare-1a465",
  storageBucket: "vetcare-1a465.appspot.com",
  messagingSenderId: "3390327220",
  appId: "1:3390327220:web:23be61907dcdf66e8b8ae1",
  measurementId: "G-4J9PDS6HEV"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')

export const email = ""
