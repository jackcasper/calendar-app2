// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import auth from firebase

const PrivateRoute = ({ element, ...rest }) => {
  // Your authentication logic here
  const isAuthenticated = auth.currentUser !== null;

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
