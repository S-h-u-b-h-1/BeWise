import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, remove, set, update } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDfc4SJLT5J1xO_DQcVeqX4uc-6k6kwF9I",
    authDomain: "bewise-login-49927.firebaseapp.com",
    databaseURL: "https://bewise-login-49927-default-rtdb.asia-southeast1.firebasedatabase.app/", // ✅ Add this line
    projectId: "bewise-login-49927",
    storageBucket: "bewise-login-49927.appspot.com",
    messagingSenderId: "964625784257",
    appId: "1:964625784257:web:7259add289ad5604f12340"
  };


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export { ref, push, onValue, remove, set, update };