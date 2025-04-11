import { Link } from 'react-router-dom';
import logo from '../assets/images/algolens-logo-full.png';
export default function Navbar({ isLoggedIn, routes = [] }) {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-2 py-4 bg-night-surface shadow-[0_4px_12px_rgba(0,0,0,0.4)]">

      {/* Logo & App Name */}
      <div className="text-2xl font-serif text-night-heading flex flex-row justify-center align-middle ">
        <div className='w-10 h-5 ml-0 '><img src={logo} alt="" className='rounded-full'/></div>
        <Link to="/" className='pl-2'>AlgoLens</Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4">
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
    </nav>
  );
}
