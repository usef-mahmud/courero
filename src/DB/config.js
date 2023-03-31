import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBQ5gkJU9UTqgafv71lNM9QCpjGu0kg34o",
    authDomain: "coureroo.firebaseapp.com",
    projectId: "coureroo",
    storageBucket: "coureroo.appspot.com",
    messagingSenderId: "781065485017",
    appId: "1:781065485017:web:3e9d328b3cbe05d04adcc8",
    measurementId: "G-F1RZ35B799"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)