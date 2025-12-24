import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `relative cursor-pointer transition
     ${isActive ? "text-orange-500" : "hover:text-orange-400"}
     after:absolute after:-bottom-1 after:left-0 after:h-[2px]
     after:bg-orange-500 after:transition-all
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">

        {/* Logo → Home */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          Glow<span className="text-orange-500">Fox</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink to="/" className={navItemClass}>Home</NavLink>
          <NavLink to="/about" className={navItemClass}>About</NavLink>
          <NavLink to="/company" className={navItemClass}>Company</NavLink>
          <NavLink to="/games" className={navItemClass}>Games</NavLink>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-4">
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
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-6 text-white">
          <ul className="space-y-4 text-lg">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/company" onClick={() => setOpen(false)}>Company</NavLink>
            <NavLink to="/games" onClick={() => setOpen(false)}>Games</NavLink>
          </ul>

          <div className="flex gap-4">
            <Link
              to="/signin"
              className="flex-1 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex-1 px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-400 transition"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
