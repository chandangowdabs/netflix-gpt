// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJV2TLir7_NJopwYC3nctzCPLAJUaRAws",
  authDomain: "netflix-gpt1-a7442.firebaseapp.com",
  projectId: "netflix-gpt1-a7442",
  storageBucket: "netflix-gpt1-a7442.firebasestorage.app",
  messagingSenderId: "1052057297842",
  appId: "1:1052057297842:web:05185300125eafa3aefaab",
  measurementId: "G-FJ0B2YF1VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();