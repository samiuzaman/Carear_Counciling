// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaPGdtqdGwNMkvFJoQghCEukM_Z5nBvys",
  authDomain: "fir-concept-bc9e0.firebaseapp.com",
  projectId: "fir-concept-bc9e0",
  storageBucket: "fir-concept-bc9e0.firebasestorage.app",
  messagingSenderId: "742854701367",
  appId: "1:742854701367:web:094a64da7137e103f46ab2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
