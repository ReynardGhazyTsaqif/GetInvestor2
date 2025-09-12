import React, { useState, useEffect, useRef } from "react";
import { User, Menu, X, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Daily", path: "/daily" },
    { name: "Rewards", path: "/rewards" },
    { name: "Search", path: "/search" },
    { name: "History", path: "/history" },
    { name: "Belanja", path: "/belanja" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // tutup dropdown ketika klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-100">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img src="/Logo.svg" alt="Logo EcoReward" className="w-9 h-9" />
          <span className="text-xl font-bold text-[#4CAF50] group-hover:text-[#388E3C] transition-colors">
            EcoReward
          </span>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={index}
                to={link.path}
                className={`relative px-2 py-1 text-sm font-medium transition-colors duration-300
                  ${isActive ? "text-[#4CAF50]" : "text-gray-600 hover:text-[#388E3C]"}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#4CAF50] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Profile + Mobile Menu Button */}
        <div className="flex items-center space-x-4 relative">
          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-10 h-10 bg-gradient-to-tr from-[#4CAF50] to-[#66BB6A] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform"
              aria-expanded={profileOpen}
              aria-haspopup="true"
            >
              <User className="w-5 h-5 text-white" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-100 rounded-xl shadow-xl py-2">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition"
                  onClick={() => setProfileOpen(false)}
                >
                  Lihat Profil
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[#388E3C] transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <nav className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-md">
          <ul className="flex flex-col space-y-1 px-6 py-4">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300
                      ${isActive ? "bg-green-50 text-[#4CAF50]" : "text-gray-700 hover:bg-green-50 hover:text-[#388E3C]"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
