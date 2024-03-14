// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD316fG0cYlIsftQPUpiOorFeAUjsDNavY",
  authDomain: "m-tech-computer-institute.firebaseapp.com",
  projectId: "m-tech-computer-institute",
  storageBucket: "m-tech-computer-institute.appspot.com",
  messagingSenderId: "777906748354",
  appId: "1:777906748354:web:8c714b6f7411e3872f745b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export {fireDB,auth, storage } ;