import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      Swal.fire("Oops!", "Nama tidak boleh kosong", "error");
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire("Oops!", "Format email tidak valid", "error");
      return;
    }

    if (password.length < 6) {
      Swal.fire("Oops!", "Password minimal 6 karakter", "error");
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire("Oops!", "Password dan konfirmasi password tidak sama", "error");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        Swal.fire("Gagal", data.message || "Registrasi gagal", "error");
        return;
      }

      Swal.fire({
        title: "Berhasil!",
        text: "Registrasi berhasil, silakan login.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      Swal.fire("Error", "Terjadi kesalahan server", "error");
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="min-h-screen flex items-center justify-center bg-[#F8F7F4] px-4"
    >
      <div className="w-full max-w-md bg-[#F1EBE4] rounded-2xl shadow-md p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/Logo.svg" alt="EcoReward Logo" className="w-12 h-12 mb-2" />
          <h1 className="text-2xl font-semibold text-green-700">EcoReward</h1>
        </div>

        <h2 className="text-center text-gray-700 mb-6 font-medium">Daftar</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Nama */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Nama"
              className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Konfirmasi Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="w-full py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <input
              type="checkbox"
              id="terms"
              className="form-checkbox text-green-600 rounded"
              required
            />
            <label htmlFor="terms">
              Saya setuju dengan{" "}
              <span className="font-medium">syarat & ketentuan</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-full font-semibold transition"
          >
            Daftar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="text-green-700 font-medium hover:underline"
          >
            Login sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
