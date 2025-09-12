import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Facebook } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // nanti tambahin API call ke backend
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        Swal.fire({
          icon: "error",
          title: "Login Gagal",
          text: data.message || "Email atau Password salah",
          confirmButtonColor: "#dc2626", // merah
        });
        return;
      }

      // simpan token ke context + localStorage
      login(data.token);

      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        text: "Selamat datang kembali di EcoReward 🌿",
        confirmButtonColor: "#15803d", // hijau
      }).then(() => {
        navigate("/");
      });

    } catch (err) {
      console.error("Login error:", err);
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        text: "Tidak bisa terhubung ke server",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  return (
    <div data-aos="fade-up" className="min-h-screen flex items-center justify-center bg-[#F8F7F4] px-4">
      <div className="w-full max-w-md bg-[#F1EBE4] rounded-2xl shadow-md p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/Logo.svg" alt="EcoReward Logo" className="w-12 h-12 mb-2" />
          <h1 className="text-2xl font-semibold text-green-700">EcoReward</h1>
        </div>

        <h2 className="text-center text-gray-700 mb-6 font-medium">Login to EcoReward</h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <div className="flex items-center border border-green-600 rounded-lg px-3">
              <User className="w-5 h-5 text-green-600 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <div className="flex items-center border border-orange-400 rounded-lg px-3">
              <Lock className="w-5 h-5 text-orange-500 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-gray-600">
              <input type="checkbox" className="form-checkbox text-green-600" />
              <span>Remember Me</span>
            </label>
            <Link to="/" className="text-orange-500 hover:underline">Forgot Password?</Link>
          </div>

          <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-full font-semibold transition">
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
          <Link to="/register" className="text-green-700 font-medium hover:underline">
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
