// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e0f8b.firebaseapp.com",
  projectId: "mern-auth-e0f8b",
  storageBucket: "mern-auth-e0f8b.appspot.com",
  messagingSenderId: "529778458834",
  appId: "1:529778458834:web:59ee916a0d36c2bed3ad0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

