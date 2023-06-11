import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9qSxxXciY-KB9rbKuAUcx8FngS5XkK6E",
  authDomain: "sourabh-portfolio.firebaseapp.com",
  projectId: "sourabh-portfolio",
  storageBucket: "sourabh-portfolio.appspot.com",
  messagingSenderId: "400567550875",
  appId: "1:400567550875:web:583e3c6e46503a58fb173e"
};


export const app = initializeApp(firebaseConfig);

export const db  = getFirestore();