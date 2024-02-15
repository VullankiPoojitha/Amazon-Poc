// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQbR4qzVEQ-KJp6gmU1hl0i8KEM4ITg20",
    authDomain: "react-auth-99aad.firebaseapp.com",
    projectId: "react-auth-99aad",
    storageBucket: "react-auth-99aad.appspot.com",
    messagingSenderId: "771414197763",
    appId: "1:771414197763:web:395c76deff9bb3951b7036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);