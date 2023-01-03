import { initializeApp } from "firebase/app";
import {getAuth , signInWithRedirect , signInWithPopup , GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC5RxA95NMpV1rXELnJ0StjjomeXBZLPug",
  authDomain: "ecommerce-db-1989a.firebaseapp.com",
  projectId: "ecommerce-db-1989a",
  storageBucket: "ecommerce-db-1989a.appspot.com",
  messagingSenderId: "117736432515",
  appId: "1:117736432515:web:4f8102435bbeacd85d4cb6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider  = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth , provider);
