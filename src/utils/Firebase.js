// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbkwBlmufLUfSpjiNhnGeGSTy_mmpfODk",
  authDomain: "portfolio-f8cbf.firebaseapp.com",
  projectId: "portfolio-f8cbf",
  storageBucket: "portfolio-f8cbf.appspot.com",
  messagingSenderId: "856835135790",
  appId: "1:856835135790:web:0cb4e8ebf28197a4a682bf",
  measurementId: "G-D6WRJWVSTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
