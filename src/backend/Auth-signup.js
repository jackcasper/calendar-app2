// Auth-signup.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Import the auth object from firebase.js

const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Additional logic if needed
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing up:", errorCode, errorMessage);
  }
};

export { signUpWithEmailAndPassword };
