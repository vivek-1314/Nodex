import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYW5A0G01fikAJjQDietY5XExLI3nashI",
    authDomain: "nodex-de76d.firebaseapp.com",
    projectId: "nodex-de76d",
    storageBucket: "nodex-de76d.appspot.com",
    messagingSenderId: "293950802372",
    appId: "1:293950802372:web:73d1f7591ea7bc6f30fc91",
    databaseURL: "https://nodex-de76d-default-rtdb.firebaseio.com"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

