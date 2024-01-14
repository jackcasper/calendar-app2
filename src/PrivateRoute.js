// src/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const user = auth.currentUser;

  return (
    <Route
      {...rest}
      element={user ? <Element /> : <Navigate to="/signin" />}
    />
  );
};

export default PrivateRoute;
