// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "yinlofi.firebaseapp.com",
    databaseURL: "https://yinlofi-default-rtdb.firebaseio.com",
    projectId: "yinlofi",
    storageBucket: "yinlofi.appspot.com",
    messagingSenderId: "484277865772",
    appId: "1:484277865772:web:cc3b69dcbd87b5b7f7b089",
    measurementId: "G-RG37BFM6ML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
