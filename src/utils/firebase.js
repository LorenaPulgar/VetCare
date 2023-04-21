import { initializeApp }  from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC-OxGWceSwlKMhvjaefdCw25gCDKPmf1U",
  authDomain: "vetcare-1a465.firebaseapp.com",
  projectId: "vetcare-1a465",
  storageBucket: "vetcare-1a465.appspot.com",
  messagingSenderId: "3390327220",
  appId: "1:3390327220:web:23be61907dcdf66e8b8ae1",
  measurementId: "G-4J9PDS6HEV"
};
const app = initializeApp(firebaseConfig);

// utils
const auth = getAuth(app);

// Exports
export { auth };