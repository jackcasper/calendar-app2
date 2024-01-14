// In App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import Home from './components/Home'; // Your existing components
import Dashboard from './backend/Dashboard'; // Replace with your actual Dashboard component
import Profile from './backend/Profile'; // Replace with your actual Profile component
import Settings from './backend/Settings'; // Replace with your actual Settings component
import Calendar from './components/Calendar'
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
      // Navigate to the sign-in page after successful sign-up
      // You can customize the path as needed
      window.location.href = "/signin";
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const signOutUser = async () => {
    try {
      await auth.signOut();
      // Add your backend logic here for actions on sign-out
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // User has signed out, trigger your backend logic here
        console.log('User signed out (listener)');
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn signInWithEmailAndPassword={signInWithEmailAndPassword} />} />
        <Route path="/signup" element={<SignUp signUpWithEmailAndPassword={signUpWithEmailAndPassword} />} />
        <Route path="/signout" element={<SignOut signOut={signOutUser} />} />

        {/* Use Route directly for routes that require authentication */}
        {auth.currentUser ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/calendar" element={<Calendar />} />
            {/* ... other routes */}
          </>
        ) : (
          // Redirect to sign-in page if not authenticated
          <Route path="/*" element={<Navigate to="/signin" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
