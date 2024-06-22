// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-d270f.firebaseapp.com",
  projectId: "auth-app-d270f",
  storageBucket: "auth-app-d270f.appspot.com",
  messagingSenderId: "499449092949",
  appId: "1:499449092949:web:b1fa90200661addfe16ddc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);