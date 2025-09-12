import React from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, CheckSquare } from "lucide-react";

export default function RegisterPage() {
  return (
    <div data-aos="fade-up" className="min-h-screen flex items-center justify-center bg-[#F8F7F4] px-4">
      <div className="w-full max-w-md bg-[#F1EBE4] rounded-2xl shadow-md p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/Logo.svg" alt="EcoReward Logo" className="w-12 h-12 mb-2" />
          <h1 className="text-2xl font-semibold text-green-700">EcoReward</h1>
        </div>

        {/* Title */}
        <h2 className="text-center text-gray-700 mb-6 font-medium">Daftar</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Nama */}
          <div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <User className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Nama"
                className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Konfirmasi Password */}
          <div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Konfirmasi Password"
                className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <input
              type="checkbox"
              id="terms"
              className="form-checkbox text-green-600 rounded"
            />
            <label htmlFor="terms">
              Saya setuju dengan <span className="font-medium">syarat & ketentuan</span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-full font-semibold transition"
          >
            Daftar
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-green-700 font-medium hover:underline">
            Login sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
