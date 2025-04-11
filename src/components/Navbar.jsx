import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-[#1f1f27] via-[#2e2e38] to-[#1f1f27] shadow-md py-4 px-6 flex justify-between items-center text-white">
      {/* Left - Brand */}
      <div className="text-2xl font-serif font-bold tracking-wide">
        <Link to="/" className="hover:text-night-accent transition duration-300">
          AlgoLens
        </Link>
      </div>

      {/* Center - Links */}
      <div className="hidden md:flex space-x-8 font-mono text-lg items-center">
        <NavLink text="Home" to="/" currentPath={location.pathname} />
        <NavLink text="About" to="/about" currentPath={location.pathname} />
        <SignedIn>
          <NavLink text="Dashboard" to="/dashboard" currentPath={location.pathname} />
        </SignedIn>
        <SignedIn>
          <NavLink text="Check Approval" to="/check-approval" currentPath={location.pathname} />
        </SignedIn>
      </div>

      {/* Right - Auth Buttons */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] font-semibold shadow-md hover:scale-105 hover:shadow-xl transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg border border-night-accent text-night-accent hover:bg-night-accent hover:text-night-bg transition duration-300"
          >
            Sign Up
          </Link>
        </SignedOut>
        <SignedIn>
          <div className="hover:scale-105 transition duration-300">
            <UserButton  />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

const NavLink = ({ text, to, currentPath }) => {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={`relative group transition duration-300 hover:text-night-accent ${
        isActive ? 'text-night-accent font-semibold' : 'text-night-text'
      }`}
    >
      <span>{text}</span>
      <span
        className={`absolute left-0 bottom-0 h-[2px] bg-night-accent transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      ></span>
    </Link>
  );
};

export default Navbar;
