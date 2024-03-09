// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp62UvXBPApZxaCKOrvD1m8UzY1_l6FOU",
  authDomain: "vuedb-4c258.firebaseapp.com",
  projectId: "vuedb-4c258",
  storageBucket: "vuedb-4c258.appspot.com",
  messagingSenderId: "480596034938",
  appId: "1:480596034938:web:c34c1087131d96257702c3"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export default fb;