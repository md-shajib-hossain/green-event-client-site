// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbEK08ccED4FTKt_6nYPN_qs17MAEZ5VI",
  authDomain: "green-event-ab3b7.firebaseapp.com",
  projectId: "green-event-ab3b7",
  storageBucket: "green-event-ab3b7.firebasestorage.app",
  messagingSenderId: "319621305341",
  appId: "1:319621305341:web:d4dd800930b2d69fc97f94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
