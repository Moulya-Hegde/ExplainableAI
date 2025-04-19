import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Auth } from './firebase'; // make sure path is correct

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(Auth);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
