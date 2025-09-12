import React from "react";
import { Link } from "react-router-dom";
import {
  QrCode,
  DollarSign,
  ShoppingBag,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Layout from "../layouts/Layout";
import HomeImage from "../assets/home.png";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div data-aos="fade-up" className="flex flex-col lg:flex-row items-center justify-between mt-8 p-6 lg:p-8">
        {/* Text */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left px-4">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#795548] mb-4 leading-snug">
            YOUR TRASH,
            <br />
            OUR TREASURE
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sampahmu, poinmu. Lingkungan bersih, rezeki berlimpah!
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={HomeImage}
            alt="Eco Banner"
            className="max-w-sm lg:max-w-md"
          />
        </div>
      </div>

      {/* Services Section */}
      <div data-aos="fade-up" className="mt-8 bg-[#E0E6D8] rounded-2xl p-6 lg:p-8 shadow-sm">
        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-semibold text-green-700 mb-6">
          Layanan yang ditawarkan
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/scan"
            className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <QrCode className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">
              Scan & Dapatkan Point
            </h3>
          </Link>

          <Link
            to="/rewards"
            className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-7 h-7 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Tukar Point</h3>
          </Link>

          {/* Belanja EcoProduct */}
          <Link
            to="/belanja"
            className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Belanja EcoProduct</h3>
          </Link>

          {/* Cari Lokasi Penukaran */}
          <Link
            to="/map"
            className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-gray-600" />
            </div>
            <h3 className="font-semibold text-gray-800">
              Cari Lokasi Penukaran
            </h3>
          </Link>
        </div>
      </div>

      {/* Floating Chat */}
      <div data-aos="fade-up" className="fixed bottom-6 right-6">
        <Link to="/chatbot" className="w-14 h-14 bg-[#388E3C] rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white" />
        </Link>
      </div>
    </Layout>
  );
}
