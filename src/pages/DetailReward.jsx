import LayoutWhite from "../layouts/LayoutWhite";
import { MapPin, Star, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RewardDetail() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF3E0] to-[#E6EEDC] p-4 md:p-8">
      {/* Navbar */}
      <div className="bg-white shadow-md rounded-xl px-4 py-3 flex items-center justify-between mb-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center hover:text-[#FB8C00]"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Title */}
        <p className="text-lg lg:text-xl font-semibold">Detail Reward</p>

        {/* Point */}
        <div className="flex items-center gap-1">
          <p className="text-sm lg:text-base font-bold">1000</p>
          <Star className="w-5 h-5 text-yellow-500" />
        </div>
      </div>

      {/* Detail Section */}
      <div className="bg-white shadow-md rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kiri: Preview Produk */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Preview Produk</h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-6"></div>

          <h3 className="font-semibold mb-1">Deskripsi Produk</h3>
          <p className="text-sm text-gray-600 mb-6">
            Nama Produk dibuat dari bahan daur ulang, ramah lingkungan, dan bisa
            digunakan kembali.
          </p>

          <h3 className="font-semibold mb-1">Deskripsi Alamat</h3>
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-6">
            <MapPin className="w-4 h-4 text-green-600" />
            Ambil di lokasi penukaran (Bank Sampah)
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold"
            >
              Tukar Sekarang
            </button>
            <Link
              to="/rewards"
              className="border border-green-600 text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50"
            >
              Kembali ke Reward
            </Link>
          </div>
        </div>

        {/* Kanan: Info Produk & Poin */}
        <div className="flex flex-col gap-6">
          {/* Nama Produk */}
          <h2 className="text-xl font-semibold">
            Nama Produk Ramah Lingkungan
          </h2>

          {/* Info Produk */}
          <div className="border rounded-lg shadow-sm p-4">
            <p>
              <span className="font-semibold">Nama Produk:</span> Eco Bottle
            </p>
            <p>
              <span className="font-semibold">Harga:</span> 500 Poin
            </p>
            <p>
              <span className="font-semibold">Stok:</span> 10
            </p>
          </div>

          {/* Info Poin User */}
          <div className="border rounded-lg shadow-sm p-4">
            <h3 className="font-semibold mb-2">Info Poin User</h3>
            <p>Total Poin Kamu: 1000</p>
            <p>Poin yang Dibutuhkan: 500</p>
            <p>Sisa Poin Saat Penukaran: 500</p>
          </div>

          {/* Pilihan Pengiriman */}
          <div className="border rounded-lg shadow-sm p-4">
            <label className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="delivery"
                className="accent-green-600"
              />
              Ambil di lokasi penukaran (Bank Sampah)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="delivery"
                className="accent-green-600"
              />
              Dikirim ke Rumah (jika memungkinkan)
            </label>
          </div>
        </div>
      </div>
      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96 text-center">
            <h3 className="text-lg font-bold mb-3">Penukaran Berhasil!</h3>
            <p className="text-sm text-gray-600 mb-6">
              Nama Produk ramah lingkungan akan segera diproses. Sisa poin kamu{" "}
              <span className="font-semibold">900 poin</span>.
            </p>
            <div className="flex justify-center gap-4 w-full max-w-md mx-auto">
              <Link
                to="/history"
                className="flex-1 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold"
              >
                Lihat History
              </Link>
              <Link
                to="/rewards"
                className="flex-1 flex items-center justify-center border border-green-600 text-green-600 px-5 py-2 rounded-full font-semibold hover:bg-green-50"
              >
                Kembali ke Reward
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
