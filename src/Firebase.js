import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);