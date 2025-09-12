import React from "react";
import { CalendarDays, Mail, Star, User } from "lucide-react";
import Layout from "../layouts/Layout"
import DailyImage from "../assets/daily.png";

export default function DailyPage() {
  return (
    <Layout>
      <div data-aos="fade-up" className="min-h-screen px-4 md:px-12 py-6">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-10">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold text-green-700 leading-snug">
              Tukar Sampah, <br className="md:hidden" />
              Dapatkan Reward, <br className="md:hidden" />
              Selamatkan Bumi
            </h1>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-md transition">
              Mulai Tukar Sampah
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src={DailyImage}
              alt="Hero Banner"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
        </section>

        {/* Service Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10">
          <div className="bg-[#6B4F4F] text-white rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <CalendarDays className="w-8 h-8 mb-3" />
            <h3 className="font-semibold">Daily Exchange</h3>
            <p className="text-sm mt-2">Jadwalkan Penukaran Sampahmu</p>
          </div>

          <div className="bg-[#6B4F4F] text-white rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <Mail className="w-8 h-8 mb-3" />
            <h3 className="font-semibold">Reminder</h3>
            <p className="text-sm mt-2">Dapatkan pengingat lewat email</p>
          </div>

          <div className="bg-[#6B4F4F] text-white rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <Star className="w-8 h-8 mb-3" />
            <h3 className="font-semibold">Reward</h3>
            <p className="text-sm mt-2">Kumpulkan poin untuk ditukarkan</p>
          </div>
        </section>

        {/* Dashboard Section */}
        <section>
          <h2 className="text-lg font-bold text-green-700 mb-4 uppercase">
            Dashboard
          </h2>

          <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-md">
            {/* Header User */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center text-white shadow">
                <User className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#6B4F4F]">Anda</h3>
            </div>

            {/* Jadwal + Riwayat */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Jadwal */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">
                  Jadwal
                </h4>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Hari/Tanggal</p>
                  <p className="text-sm text-gray-800">
                    Senin, 12 Oktober 2000, pukul 00.00 WIB
                  </p>
                  <p className="text-sm text-green-600 font-medium mt-2">
                    Jadwal penukaran
                  </p>
                </div>
              </div>

              {/* Riwayat */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">
                  Riwayat
                </h4>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm h-24 flex items-center justify-center text-gray-400">
                  <p>Belum ada riwayat</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
