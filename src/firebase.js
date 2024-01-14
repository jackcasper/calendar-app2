// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb_KLgKFV4wRdrpu6YpB2d1P-tXz3f61o",
  authDomain: "supinfocalendar-78e21.firebaseapp.com",
  projectId: "supinfocalendar-78e21",
  storageBucket: "supinfocalendar-78e21.appspot.com",
  messagingSenderId: "740780449935",
  appId: "1:740780449935:web:d55abc92478964891190fa",
  measurementId: "G-M3HPWJYSMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
