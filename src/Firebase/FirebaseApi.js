// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1OoMhvax5Ph0-EQGcniP-SkAl9PgEIiU",
    authDomain: "my-app-37f04.firebaseapp.com",
    projectId: "my-app-37f04",
    storageBucket: "my-app-37f04.appspot.com",
    messagingSenderId: "313772950356",
    appId: "1:313772950356:web:e24eaa581c6a4c65873ec1"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const Auth = getAuth(firebase);