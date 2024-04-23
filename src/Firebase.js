// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxExRjPkG5mKQ4mLrl_Y5sL7lYCdgVkdU",
  authDomain: "geekster-18478.firebaseapp.com",
  projectId: "geekster-18478",
  storageBucket: "geekster-18478.appspot.com",
  messagingSenderId: "197001003838",
  appId: "1:197001003838:web:36b043b40ac10da201626f",
  measurementId: "G-ZZQ7M94TMY"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const provider =new GoogleAuthProvider(app)


 export { app,provider }
