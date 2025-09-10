import React, { useState, useEffect, useRef } from "react";
import { User, Menu, X, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false); // mobile nav
  const [profileOpen, setProfileOpen] = useState(false); // profile dropdown
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
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/Logo.svg" alt="Logo EcoReward" className="w-10 h-10" />
          <span className="text-2xl font-bold text-[#558B2F]">EcoReward</span>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={index}
                to={link.path}
                className={`transition-colors duration-300 ${
                  isActive
                    ? "text-[#558B2F] font-semibold"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {link.name}
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
              className="w-10 h-10 bg-[#FFA000] rounded-full flex items-center justify-center hover:opacity-90 transition"
            >
              <User className="w-6 h-6 text-white" />
            </button>

            {profileOpen && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2 z-50 
                           animate-fade-in"
              >
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setProfileOpen(false)}
                >
                  Lihat Profil
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-red-50 hover:text-red-600"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-green-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 rounded-lg transition-colors duration-300 ${
                      isActive
                        ? "bg-green-50 text-[#558B2F] font-semibold"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                    }`}
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
