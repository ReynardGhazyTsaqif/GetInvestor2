import { Search, ScanLine, MapPin, BottleWine, Wine, StickyNote, Anvil, CircuitBoard } from "lucide-react";
import Layout from "../layouts/Layout";
import { Link } from "react-router";

export default function SearchSampah() {
  return (
        <Layout py={0} px={0} >
        <div className="min-h-screen flex flex-col justify-between pt-8">
            {/* Konten Utama */}
            <div className="max-w-3xl mx-auto w-full flex-1">
            {/* Search Bar */}
            <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Cari jenis sampah (contoh: botol plastik)"
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                </div>
                <Link to="/scan" className="flex items-center justify-center bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition">
                <ScanLine className="w-5 h-5" />
                </Link>
            </div>

            {/* Kategori */}
            <div className="flex flex-wrap gap-6 justify-center">
                <button className="flex items-center gap-2 border border-green-500 bg-white rounded-full px-5 py-2 hover:bg-green-50 transition">
                <BottleWine className="w-5 h-5 text-green-600" />
                Plastik
                </button>
                <button className="flex items-center gap-2 border border-green-500 bg-white rounded-full px-5 py-2 hover:bg-green-50 transition">
                <Wine className="w-5 h-5 text-green-600" />
                Kertas
                </button>
                <button className="flex items-center gap-2 border border-green-500 bg-white rounded-full px-5 py-2 hover:bg-green-50 transition">
                <StickyNote className="w-5 h-5 text-green-600" />
                Kaca
                </button>
                <button className="flex items-center gap-2 border border-green-500 bg-white rounded-full px-5 py-2 hover:bg-green-50 transition">
                <Anvil className="w-5 h-5 text-green-600" />
                Logam
                </button>
                <button className="flex items-center gap-2 border border-green-500 bg-white rounded-full px-5 py-2 hover:bg-green-50 transition">
                <CircuitBoard className="w-5 h-5 text-green-600" />
                Elektronik
                </button>
            </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-[#FFF8E1] w-full py-4 flex items-center justify-center gap-4 border-t">
            <span className="text-sm text-gray-700">
                Sudah tahu jenis sampahmu? Yuk cari lokasi penukaran terdekat
            </span>
            <Link to="/map" className="flex items-center gap-2 bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition">
                <MapPin className="w-5 h-5" />
                Cari Lokasi Penukaran
            </Link>
            </div>
        </div>
        </Layout>
  );
}
