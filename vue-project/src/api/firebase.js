// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBTK6T35hGBKAecGVofU_FkKNjfH_m6vF0",

    authDomain: "skehan1-7bc87.firebaseapp.com",

    projectId: "skehan1-7bc87",

    storageBucket: "skehan1-7bc87.appspot.com",

    messagingSenderId: "181469590393",

    appId: "1:181469590393:web:d7289bf65505998c52b5a8",

    measurementId: "G-F6SJMKB30T"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);


export default app;