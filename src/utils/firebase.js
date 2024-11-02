// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByMRhKca96lhs0lVPk9NyfUmRRqQ8JcNk",
  authDomain: "netflixgpt-1bcaf.firebaseapp.com",
  projectId: "netflixgpt-1bcaf",
  storageBucket: "netflixgpt-1bcaf.firebasestorage.app",
  messagingSenderId: "682252813721",
  appId: "1:682252813721:web:de9909fd15e2f8364fff08",
  measurementId: "G-KQCJ4L8V3P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
