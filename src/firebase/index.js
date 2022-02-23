import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

let fire_app = firebase.initializeApp({
    apiKey: "AIzaSyAjMHHHFTbIAoNxR4a09zyi201xgMG7Zvw",
    authDomain: "notion-4f026.firebaseapp.com",
    projectId: "notion-4f026",
    storageBucket: "notion-4f026.appspot.com",
    messagingSenderId: "864280559125",
    appId: "1:864280559125:web:d687d284f3ddac6ed9181c"
})

export const db = fire_app.firestore();

export const auth = fire_app.auth();