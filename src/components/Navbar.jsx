import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Auth } from '../pages/firebase';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut(Auth);
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-[#1f1f27] via-[#2e2e38] to-[#1f1f27] shadow-md py-4 px-6 text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold tracking-wide">
          <Link to="/" className="hover:text-night-accent transition duration-300">
            AlgoLens
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Main Menu */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xl">
          <NavLink text="Home" to="/" currentPath={location.pathname} />
          <NavLink text="About" to="/about" currentPath={location.pathname} />
          {user && (
            <>
              <NavLink text="Dashboard" to="/dashboard" currentPath={location.pathname} />
              <NavLink text="Check Approval" to="/check-approval" currentPath={location.pathname} />
              <NavLink text="History" to="/history" currentPath={location.pathname} />
            </>
          )}
        </div>

        {/* Auth/Profile */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
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
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-night-accent"
                  />
                ) : (
                  <FaUserCircle className="text-3xl" />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-night-bg border border-night-border text-night-text rounded-lg shadow-lg p-4 z-50">
                  <div className="flex items-center space-x-3 mb-4">
                    {user.photoURL ? (
                      <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="profile" />
                    ) : (
                      <FaUserCircle className="text-3xl text-night-accent" />
                    )}
                    <div>
                      <p className="font-semibold">{user.displayName || 'Anonymous User'}</p>
                      <p className="text-sm text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 items-start px-4 ">
          <NavLink text="Home" to="/" currentPath={location.pathname} />
          <NavLink text="About" to="/about" currentPath={location.pathname} />
          {user && (
            <>
              <NavLink text="Dashboard" to="/dashboard" currentPath={location.pathname} />
              <NavLink text="Check Approval" to="/check-approval" currentPath={location.pathname} />
              <NavLink text="History" to="/history" currentPath={location.pathname} />
            </>
          )}
          {!user ? (
            <>
              <Link
                to="/login"
                className="w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] font-semibold shadow-md transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="w-full text-center px-4 py-2 rounded-lg border border-night-accent text-night-accent transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleSignOut}
              className="w-full text-left py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition"
            >
              Sign Out
            </button>
          )}
        </div>
      )}
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
