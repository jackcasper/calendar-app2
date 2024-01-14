// In App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import PrivateRoute from './PrivateRoute';
import Home from './components/Home'; // Your existing components
import Dashboard from './Dashboard'; // Replace with your actual Dashboard component
import Profile from './Profile'; // Replace with your actual Profile component
import Settings from './Settings'; // Replace with your actual Settings component
import { auth } from './firebase'; // Import auth from firebase

const App = () => {
  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const signUpWithEmailAndPassword = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn signInWithEmailAndPassword={signInWithEmailAndPassword} />} />
        <Route path="/signup" element={<SignUp signUpWithEmailAndPassword={signUpWithEmailAndPassword} />} />
        <Route path="/signout" element={<SignOut signOut={signOut} />} />
        <PrivateRoute path="/home" element={<Home />} />

        {/* Additional routes */}
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
        <PrivateRoute path="/profile" element={<Profile />} />
        <PrivateRoute path="/settings" element={<Settings />} />

        {/* ... other routes */}
      </Routes>
    </Router>
  );
};

export default App;
