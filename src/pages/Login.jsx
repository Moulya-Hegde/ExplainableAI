import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { dark } from "@clerk/themes";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#1A1A40] to-[#283593] relative pb-20 pt-10">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative mt-4 p-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl text-white text-center max-w-md w-full">
        <h2 className="text-3xl font-bold mb-2 text-[#E0E0E0]">Welcome Back! 🚀</h2>
        
        <SignIn
          
          appearance={{ baseTheme: dark }}
        />
      </div>
    </div>
  );
};

export default Login;
