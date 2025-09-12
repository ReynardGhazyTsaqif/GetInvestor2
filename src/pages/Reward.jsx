import LayoutWhite from "../layouts/LayoutWhite";
import { Gift } from "lucide-react";

export default function Reward() {
  return (
    <LayoutWhite>
      {/* Header */}
      <div data-aos="fade-up" className="mb-6">
        {/* Judul + Gift */}
        <div className="flex items-center gap-3 mb-2 ">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#795548] leading-snug flex items-center ">
            Reward Kamu
          </h1>
          {/* Icon gift */}
          <Gift className="text-black w-8 h-8 lg:w-12 lg:h-12 font-bold" />
        </div>

        {/* Deskripsi */}
        <p className="text-sm lg:text-base text-[#795548]">
          Tukar point hasil pedulimu dengan berbagai produk ramah lingkungan
        </p>
      </div>



      {/* Ringkasan Point */}
      <div data-aos="fade-up" className="flex mb-6 rounded-2xl overflow-hidden shadow bg-[#FFF8E1]">
        {/* Bagian Kiri */}
        <div className="w-1/2 bg-[#e6d3a7] p-4 rounded-r-2xl">
          <h2 className="font-semibold">Ringkasan Point</h2>
          <p className="text-sm text-gray-600">
            Total Point Kamu: <span className="font-bold">1000</span>
          </p>
          <p className="text-sm text-gray-600">1000</p>
        </div>

        {/* Bagian Kanan */}
        <div className="w-1/2  p-4 flex items-center justify-center gap-3 rounded-l-2xl">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
            Tukar Reward
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
            Belanja Produk Eco
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div data-aos="fade-up" className="flex gap-3 mb-6">
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">
          Semua
        </button>
        <button className="bg-[#BCAAA4] text-white px-4 py-2 rounded-lg">
          Voucher
        </button>
        <button className="bg-[#A1887F] text-white px-4 py-2 rounded-lg">
          Merchandise
        </button>
        <button className="bg-[#8D6E63] text-white px-4 py-2 rounded-lg">
          Produk Eco
        </button>
      </div>

      {/* Katalog Reward */}
      <h2 data-aos="fade-up" className="text-lg font-semibold mb-3">Katalog Reward:</h2>
      <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-gray-200 mb-3"></div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
              Tukar
            </button>
          </div>
        ))}
      </div>

      {/* Rekomendasi Reward */}
      <h2 data-aos="fade-up" className="text-lg font-semibold mb-3">Rekomendasi Reward:</h2>
      <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-[#FFF9F0] shadow-md rounded-xl p-4 flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-gray-200 mb-3"></div>
          </div>
        ))}
      </div>
    </LayoutWhite>
  );
}
