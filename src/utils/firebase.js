// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsZk3Kir_M3Ydg9S-_OXlhNGw4vIcycrY",
  authDomain: "netflixgpt-568f4.firebaseapp.com",
  projectId: "netflixgpt-568f4",
  storageBucket: "netflixgpt-568f4.appspot.com",
  messagingSenderId: "882426196407",
  appId: "1:882426196407:web:b6a4be46af2e36de3bf832",
  measurementId: "G-XP5M6FTTL4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
