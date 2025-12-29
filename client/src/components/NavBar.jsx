import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext.jsx";

function NavBar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const navItemClass = ({ isActive }) =>
    `relative cursor-pointer transition
     ${isActive ? "text-orange-500" : "hover:text-orange-400"}
     after:absolute after:-bottom-1 after:left-0 after:h-[2px]
     after:bg-orange-500 after:transition-all
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  const mobileNavClass = ({ isActive }) =>
    `relative block w-full px-6 py-4 text-lg transition
     ${isActive ? "text-orange-500" : "hover:text-orange-400"}
     after:absolute after:left-6 after:bottom-3 after:h-[2px]
     after:bg-orange-500 after:transition-all
     ${
       isActive
         ? "after:w-[calc(100%-3rem)]"
         : "after:w-0 hover:after:w-[calc(100%-3rem)]"
     }`;

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          Glow<span className="text-orange-500">Fox</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink to="/" className={navItemClass}>Home</NavLink>
          <NavLink to="/about" className={navItemClass}>About</NavLink>
          <NavLink to="/company" className={navItemClass}>Company</NavLink>

          {isLoggedIn ? (
            <NavLink to="/explore" className={navItemClass}>
              Game Catalog
            </NavLink>
          ) : (
            <NavLink to="/games" className={navItemClass}>
              Games
            </NavLink>
          )}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/signin"
                className="px-4 py-2 text-sm border border-white/70 rounded hover:bg-white hover:text-black transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm bg-orange-500 text-black rounded hover:bg-orange-400 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="px-4 py-2 text-sm border border-white/70 rounded hover:bg-white hover:text-black transition"
              >
                View Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm bg-orange-500 text-black rounded hover:bg-orange-400 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 text-white">
          <ul className="flex flex-col divide-y divide-gray-800">
            <NavLink to="/" className={mobileNavClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={mobileNavClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/company" className={mobileNavClass} onClick={() => setOpen(false)}>Company</NavLink>

            {isLoggedIn ? (
              <NavLink to="/explore" className={mobileNavClass} onClick={() => setOpen(false)}>
                Game Catalog
              </NavLink>
            ) : (
              <NavLink to="/games" className={mobileNavClass} onClick={() => setOpen(false)}>
                Games
              </NavLink>
            )}
          </ul>

          {/* Mobile Auth Actions */}
          <div className="px-6 py-6 border-t border-gray-800 flex flex-col gap-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/signin"
                  className="w-full text-center px-4 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="w-full text-center px-4 py-3 bg-orange-500 text-black rounded-lg hover:bg-orange-400 transition"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="w-full text-center px-4 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
                  onClick={() => setOpen(false)}
                >
                  View Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-orange-500 text-black rounded-lg hover:bg-orange-400 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
