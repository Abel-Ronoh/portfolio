import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage } from "firebase/storage"
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-CqW75mOtZXgMSmgXrsjub3NZ2O_jasE",
  authDomain: "portfolio-7bcfa.firebaseapp.com",
  projectId: "portfolio-7bcfa",
  storageBucket: "portfolio-7bcfa.appspot.com",
  messagingSenderId: "677385517221",
  appId: "1:677385517221:web:c2097fd98d9762241c754c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// const analytics = getAnalytics(app);

export const storage = getStorage(app)
