import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/algolens-logo-full.png';

export default function Navbar({ isLoggedIn, routes = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-night-surface shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        {/* Logo & Name */}
        <div className="text-2xl font-serif text-night-heading flex items-center">
          <div className="w-8 h-8">
            <img src={logo} alt="Logo" className="rounded-full" />
          </div>
          <Link to="/" className="pl-2">AlgoLens</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="text-night-text hover:text-night-accent font-medium transition"
              >
                {route.label}
              </Link>
            ))
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-md text-white font-medium transition bg-[linear-gradient(to_right,#8b5cf6,#c084fc)] hover:bg-[linear-gradient(to_right,#c084fc,#a78bfa)]"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md border border-night-border text-night-heading hover:bg-night-card transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-night-text text-xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-night-surface">
          {isLoggedIn ? (
            routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                onClick={() => setMenuOpen(false)}
                className="text-night-text hover:text-night-accent font-medium transition"
              >
                {route.label}
              </Link>
            ))
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 rounded-md text-white font-medium transition bg-[linear-gradient(to_right,#8b5cf6,#c084fc)] hover:bg-[linear-gradient(to_right,#c084fc,#a78bfa)]"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 rounded-md border border-night-border text-night-heading hover:bg-night-card transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
