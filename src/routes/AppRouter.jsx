import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import CheckApproval from "../pages/CheckApproval";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import History from "../pages/History";
import ProtectedRoute from '../pages/ProtectedRoute';
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />
      <Route
        path="/check-approval"
        element={
          <ProtectedRoute>
            <CheckApproval />
          </ProtectedRoute>
        }
      />
      
    </Routes>
  );
};

export default AppRouter;
