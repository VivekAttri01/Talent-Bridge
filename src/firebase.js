// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIOTXJz_S49otcjqrNNIV1_UnE1tj3Eic",
    authDomain: "talent-bridge-11a56.firebaseapp.com",
    projectId: "talent-bridge-11a56",
    storageBucket: "talent-bridge-11a56.appspot.com",
    messagingSenderId: "782173562002",
    appId: "1:782173562002:web:045cca2802bbe02a80324b",
    measurementId: "G-PLP0CF8B6C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
//const db = app.firestore();

export { auth, googleProvider, signInWithPopup };

// export const db = app.firestore();
// export default app;