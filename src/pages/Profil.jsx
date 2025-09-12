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
}
