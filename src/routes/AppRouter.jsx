import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import CheckApproval from "../pages/CheckApproval";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <>
            <SignedIn>
              <Dashboard />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
                
          </>
        }
      />
      <Route path="/check-approval" element={<CheckApproval />} />
    </Routes>
  );
};

export default AppRouter;
