// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB9NB_Te8DKFnEmjAGzfN9hytEArdJN6I",
  authDomain: "clone-2025-6cf9e.firebaseapp.com",
  projectId: "clone-2025-6cf9e",
  storageBucket: "clone-2025-6cf9e.appspot.com",
  messagingSenderId: "562077985293",
  appId: "1:562077985293:web:d33ae9f10e95c953e00344",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
