
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJv6UltIubT1aDur6C63X27SDgcqTxP0A",
    authDomain: "team-do-9bead.firebaseapp.com",
    projectId: "team-do-9bead",
    storageBucket: "team-do-9bead.appspot.com",
    messagingSenderId: "124098755342",
    appId: "1:124098755342:web:a0675bb8cddf1e1279355f",
    measurementId: "G-TR2HQBQVF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);