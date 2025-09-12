import { Search, ShoppingCart } from "lucide-react";
import Layout from "../layouts/Layout";
import { Link } from "react-router";

export default function Belanja() {
  // Dummy data produk
  const products = Array(6).fill({
    name: "Plastik",
    category: "Plastik",
  });

  return (
    <Layout>
      <div className="min-h-screen  p-6">
        <div className="max-w-6xl mx-auto">
          {/* Search & Cart */}
          <div className="flex items-center mb-6 gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari kerajinan dari sampah (contoh gantungan kunci)"
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Cart di luar search */}
            <ShoppingCart className="w-7 h-7 text-gray-700 cursor-pointer" />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-medium text-gray-700">Filter by</span>
            <select className="border border-gray-300 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option value="all">Kategori</option>
              <option value="plastik">Plastik</option>
              <option value="kertas">Kertas</option>
              <option value="kain">Kain</option>
            </select>
          </div>

          {/* Grid Produk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-4 flex gap-4"
              >
                {/* Thumbnail Besar */}
                <div className="w-28 h-28 bg-gray-300 rounded-md flex-shrink-0"></div>

                {/* Detail Produk */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FB8C00]">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Deskripsi singkat produk dari bahan daur ulang.
                    </p>
                  </div>
                  {/* Tombol */}
                  <Link to="/rewarddetail" className="self-start mt-3 bg-[#FB8C00] text-white text-sm px-4 py-1.5 rounded-full hover:opacity-90 transition">
                    Tukar Poin
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
