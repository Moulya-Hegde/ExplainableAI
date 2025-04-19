// src/pages/Register.jsx
import React, { useState } from "react";
import { Auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(Auth, provider);
      const user = result.user;
      console.log("User registered:", user);
      navigate("/dashboard");
    } catch (err) {
      console.error("Google sign-in error:", err);
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-night-bg text-night-text">
      <div className="bg-night-card p-8 rounded-xl shadow-xl w-full max-w-sm border border-night-border">
        <h2 className="text-2xl font-bold mb-6 text-center text-night-heading">
          Register with Google
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
