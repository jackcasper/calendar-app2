// src/components/SignIn.js
import React, { useState } from 'react';
import { signInWithEmailAndPasswordFunction } from '../backend/Auth-signin'; // Import the signIn function
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPasswordFunction(email, password);
      // If sign-in is successful, navigate to the next page
      navigate('/dashboard'); // Change '/dashboard' to your desired route
    } catch (error) {
      // Handle the error or display an error message to the user
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
