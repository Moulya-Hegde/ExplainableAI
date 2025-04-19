// src/pages/Login.jsx
import React, { useState } from "react";
import { Auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(Auth, provider);
      navigate("/dashboard");
    } catch (err) {
      setError("Google login failed.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-night-bg text-night-text">
      <div className="bg-night-card p-8 rounded-xl shadow-xl w-full max-w-sm border border-night-border">
        <h2 className="text-2xl font-bold mb-6 text-center text-night-heading">
          Login with Google
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-purple-500 text-night-heading font-semibold py-2 rounded-md border border-night-border hover:bg-night-muted transition"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
