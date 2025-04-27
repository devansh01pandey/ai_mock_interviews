// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD1WgtXjafFXbJUKQNRUQ4fouw9ssUZeZ0",
  authDomain: "interviewai-5a6e7.firebaseapp.com",
  projectId: "interviewai-5a6e7",
  storageBucket: "interviewai-5a6e7.firebasestorage.app",
  messagingSenderId: "710107689117",
  appId: "1:710107689117:web:65a25af58308d1e45ea474",
  measurementId: "G-CG9C3Q38JC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);