import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCC8oj-AQQ9w2fhKIs2hbTauDBhVIJV-EE",
    authDomain: "chat-4d75c.firebaseapp.com",
    projectId: "chat-4d75c",
    storageBucket: "chat-4d75c.appspot.com",
    messagingSenderId: "700836607006",
    appId: "1:700836607006:web:63b68bdb7068f233d3aa0f",
    measurementId: "G-TY2SZ9PEL4"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);