// src/components/SignOut.js
import React from 'react';

const SignOut = ({ signOut }) => {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
