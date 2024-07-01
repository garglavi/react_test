import { initializeApp } from "firebase/app";

import { getFirestore, collection, doc, writeBatch } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVjMtw1RE-ayNofov3M_RarUu_snjoEiI",
    authDomain: "testbasic-f1780.firebaseapp.com",
    projectId: "testbasic-f1780",
    storageBucket: "testbasic-f1780.appspot.com",
    messagingSenderId: "552182543631",
    appId: "1:552182543631:web:f1dac44d43b6f42ac9fa7a",
    measurementId: "G-ESS8700JCE"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, collection, doc, writeBatch };