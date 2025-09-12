<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { CalendarDays, Bell, UserRoundPen } from "lucide-react";
import Layout from "../layouts/Layout";
import { useAuth } from "../context/AuthContext"; // untuk ambil token + logout
import Swal from "sweetalert2";

export default function Profile() {
    const { logout } = useAuth();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // ambil user dari backend
    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:3000/api/users/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch(() => {
                Swal.fire("Error", "Gagal memuat data profil", "error");
                setLoading(false);
            });
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        try {
            const res = await fetch(`http://localhost:3000/api/users/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: user.name,
                    email: user.email,
                    password: user.password || undefined,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            Swal.fire("Berhasil", "Profil berhasil diperbarui", "success");
        } catch (err) {
            Swal.fire("Error", err.message, "error");
        }
    };

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <Layout>
            <div data-aos="fade-up" className="min-h-screen">
                {/* Header Profil */}
                <div className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-xl">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-600">👤</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Profil Saya</h1>
                        <p className="text-sm text-gray-600">{user?.name}</p>
                    </div>
                </div>

                {/* Informasi + Pencapaian */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Informasi Pribadi */}
                    <div className="bg-[#FFFFFF75] rounded-xl shadow-xl p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Informasi Pribadi
                        </h3>
                        <form className="space-y-3" onSubmit={handleUpdate}>
                            <input
                                type="text"
                                placeholder="Nama"
                                className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                                value={user?.name || ""}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Alamat Email"
                                className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                                value={user?.email || ""}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                            <div className="flex gap-2">
                                <input
                                    type="password"
                                    placeholder="Password baru"
                                    className="flex-1 bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                                <button className="bg-green-600 text-white px-4 py-1.5 rounded text-sm hover:bg-green-700 transition">
                                    Ubah
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Pencapaian Akun */}
                    <div className="bg-[#FFFFFF75] rounded-xl shadow-xl p-5 flex flex-col justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Pencapaian Akun
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-900">
                            <li>
                                Total Poin Kamu:{" "}
                                <span className="font-semibold">{user?.totalPoints || 0} Poin</span>
                            </li>
                            <li>
                                Sampah kamu: <span className="font-semibold">{user?.totalWaste || 0} Kg</span>
                            </li>
                            <li>
                                Dominan Sampah:{" "}
                                <span className="font-semibold">{user?.dominantWaste || "-"}</span>
                            </li>
                            <li>
                                Reward yang didapatkan:{" "}
                                <span className="font-semibold">{user?.rewards || "-"}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Pengaturan Akun */}
                <div className="bg-[#FFFFFF75] rounded-xl shadow-xl p-5 mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Pengaturan Akun
                    </h3>
                    <div className="space-y-3 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                            <UserRoundPen className="w-4 h-4 text-gray-700" />
                            <span>Edit Profil</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4 text-gray-700" />
                            <span>Kalender</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Bell className="w-4 h-4 text-gray-700" />
                            <span>Notifikasi</span>
                        </div>
                    </div>
                    <button
                        className="mt-5 border border-orange-500 text-orange-500 px-4 py-1.5 rounded text-sm hover:bg-orange-50 transition"
                        onClick={() => {
                            logout();
                            Swal.fire("Logout", "Anda berhasil keluar", "success").then(() =>
                                window.location.href = "/login"
                            );
                        }}
                    >
                        Keluar
                    </button>
                </div>
            </div>
        </Layout>
    );
=======
import React from "react";
import { CalendarDays, Calendar, Bell, UserRoundPen } from "lucide-react";
import Layout from "../layouts/Layout";

export default function Profile() {
  return (
    <Layout>
  <div className="min-h-screen">
    {/* Header Profil */}
    <div className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-xl">
      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-gray-600">👤</span>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Profil Saya</h1>
        <p className="text-sm text-gray-600">Nama pengguna</p>
      </div>
    </div>

    {/* Informasi + Pencapaian */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Informasi Pribadi */}
      <div className="bg-[#FFFFFF75] rounded-xl shadow-xl p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Informasi Pribadi
        </h3>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Nama"
            className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="email"
            placeholder="Alamat Email"
            className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-400 outline-none"
          />
          <div className="flex gap-2">
            <input
              type="password"
              placeholder="Password"
              className="flex-1 bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-400 outline-none"
            />
            <button className="bg-green-600 text-white px-4 py-1.5 rounded text-sm hover:bg-green-700 transition">
              Ubah
            </button>
          </div>
        </form>
      </div>

      {/* Pencapaian Akun */}
      <div className="bg-[#FFFFFF75] rounded-xl shadow-xl p-5 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Pencapaian Akun
        </h3>
        <ul className="space-y-2 text-sm text-gray-900">
          <li>
            Total Poin Kamu: <span className="font-semibold">0 Poin</span>
          </li>
          <li>
            Sampah kamu: <span className="font-semibold">0 Kg</span>
          </li>
          <li>
            Dominan Sampah: <span className="font-semibold">-</span>
          </li>
          <li>
            Reward yang didapatkan: <span className="font-semibold">-</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Pengaturan Akun */}
    <div className="bg-[#FFFFFF75] rounded-xl shadow-xl p-5 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Pengaturan Akun
      </h3>
      <div className="space-y-3 text-sm text-gray-900">
        <div className="flex items-center gap-2">
          <UserRoundPen className="w-4 h-4 text-gray-700" />
          <span>Edit Profil</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-gray-700" />
          <span>Kalender</span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-gray-700" />
          <span>Notifikasi</span>
        </div>
      </div>
      <button className="mt-5 border border-orange-500 text-orange-500 px-4 py-1.5 rounded text-sm hover:bg-orange-50 transition">
        Keluar
      </button>
    </div>
  </div>
</Layout>

  );
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
}
