// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ozbAjVRj1U68ubO1lKOLZts9pCSmalY",
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "insideout-chat.firebaseapp.com",
  projectId: "insideout-chat",
  storageBucket: "insideout-chat.appspot.com",
  messagingSenderId: "864366180321",
  appId: "1:864366180321:web:997fc0a2c0d9a2766804a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()