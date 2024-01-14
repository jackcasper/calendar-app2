// Auth-signin.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Import the auth object from firebase.js

const signInWithEmailAndPasswordFunction = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Additional logic if needed after successful sign-in
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
    // Handle the error or propagate it to the calling component
    throw error;
  }
};

export { signInWithEmailAndPasswordFunction };
