// SignUp.js
import React, { useState } from 'react';
import { signUpWithEmailAndPassword } from '../backend/Auth-signup'; // Correct import

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await signUpWithEmailAndPassword(email, password);
      // Handle successful signup (redirect, show message, etc.)
    } catch (error) {
      // Handle errors during signup
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
