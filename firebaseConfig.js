// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALd0EmcQWPmnmqm3Zz1E1I9Bh4KLi28_E",
  authDomain: "quranapp-68b1e.firebaseapp.com",
  projectId: "quranapp-68b1e",
  storageBucket: "quranapp-68b1e.appspot.com",
  messagingSenderId: "795561760782",
  appId: "1:795561760782:web:9f32ffd5695ec19d1e045f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
