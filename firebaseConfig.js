// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByd0IvPMbdQEdBsbf9-RPddC5Z7DsNf3A",
  authDomain: "recipe-khadijah.firebaseapp.com",
  projectId: "recipe-khadijah",
  storageBucket: "recipe-khadijah.appspot.com",
  messagingSenderId: "207822860300",
  appId: "1:207822860300:web:ee3400c7f6a14153e73e29",
  measurementId: "G-FNNZVR1VGX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
