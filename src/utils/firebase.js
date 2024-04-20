// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZQMlNfrqefIXlxKXU_l4GmyPEzAeCndg",
  authDomain: "netflix-gpt-c2c40.firebaseapp.com",
  projectId: "netflix-gpt-c2c40",
  storageBucket: "netflix-gpt-c2c40.appspot.com",
  messagingSenderId: "782967483737",
  appId: "1:782967483737:web:327eae9cc5dab9e32bb048",
  measurementId: "G-X9Q2MYFXNB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
