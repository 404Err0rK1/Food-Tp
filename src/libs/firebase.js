// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: "storagefoodtp.firebaseapp.com",
  projectId: "storagefoodtp",
  storageBucket: "storagefoodtp.appspot.com",
  messagingSenderId: "782254935062",
  appId: "1:782254935062:web:9c22de7e2e8590a52bf937",
  measurementId: "G-W4D12CGEBB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);