// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth"; // Import Authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRNI3P0xVRy1Hvgkhaxqw2ULhfJbjCDQ",
  authDomain: "portfolio-nextjs-19e0b.firebaseapp.com",
  projectId: "portfolio-nextjs-19e0b",
  storageBucket: "portfolio-nextjs-19e0b.appspot.com",
  messagingSenderId: "439523413397",
  appId: "1:439523413397:web:97311b39b4b186bfbdfa9c",
  measurementId: "G-DY9Q40RG1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore (db) and Authentication (auth)
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Authentication instance

// Export Firestore and Authentication
export { db, auth };
