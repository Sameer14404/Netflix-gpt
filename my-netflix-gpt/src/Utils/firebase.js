// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8v0SqWk3o-U0bJJglWzkX9JeWIvMiMUM",
  authDomain: "netflix-gpt-4da43.firebaseapp.com",
  projectId: "netflix-gpt-4da43",
  storageBucket: "netflix-gpt-4da43.appspot.com",
  messagingSenderId: "1005736089453",
  appId: "1:1005736089453:web:6adb3743ec36cfe57c2c64",
  measurementId: "G-BTCHX48MQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 export const auth = getAuth();