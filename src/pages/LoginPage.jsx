import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Facebook } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // nanti tambahin API call ke backend
    login();
    navigate("/");
  };

  return (
    <div data-aos="fade-up" className="min-h-screen flex items-center justify-center bg-[#F8F7F4] px-4">
      <div className="w-full max-w-md bg-[#F1EBE4] rounded-2xl shadow-md p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/Logo.svg" alt="EcoReward Logo" className="w-12 h-12 mb-2" />
          <h1 className="text-2xl font-semibold text-green-700">EcoReward</h1>
        </div>

        {/* Title */}
        <h2 className="text-center text-gray-700 mb-6 font-medium">
          Login to EcoReward
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <div className="flex items-center border border-green-600 rounded-lg px-3">
              <User className="w-5 h-5 text-green-600 mr-2" />
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <div className="flex items-center border border-orange-400 rounded-lg px-3">
              <Lock className="w-5 h-5 text-orange-500 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-gray-600">
              <input type="checkbox" className="form-checkbox text-green-600" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="text-orange-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-full font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-sm text-gray-500">atau</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-6">
          <button className="p-2 border rounded-full hover:bg-gray-100 transition">
            <img src="/google.png" alt="Google Login" className="w-5 h-5" />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100 transition">
            <Facebook className="w-5 h-5 text-blue-600" />
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Belum punya akun?{" "}
          <Link
            to="/register"
            className="text-green-700 font-medium hover:underline"
          >
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
