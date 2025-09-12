import LayoutWhite from "../layouts/LayoutWhite";
import { Gift, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Reward() {
  return (
    <LayoutWhite>
      {/* Header */}
<<<<<<< HEAD
      <div data-aos="fade-up" className="mb-6">
=======
      <div className="mb-6">
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
        {/* Judul + Gift */}
        <div className="flex items-center gap-3 mb-2 ">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#795548] leading-snug flex items-center ">
            Reward Kamu
          </h1>
          {/* Icon gift */}
          <Gift className="text-black w-8 h-8 lg:w-12 lg:h-12 font-bold" />
        </div>
<<<<<<< HEAD

        {/* Deskripsi */}
        <p className="text-sm lg:text-base text-[#795548]">
          Tukar point hasil pedulimu dengan berbagai produk ramah lingkungan
        </p>
      </div>



      {/* Ringkasan Point */}
      <div data-aos="fade-up" className="flex mb-6 rounded-2xl overflow-hidden shadow bg-[#FFF8E1]">
=======

        {/* Deskripsi */}
        <p className="text-sm lg:text-base text-[#795548]">
          Tukar point hasil pedulimu dengan berbagai produk ramah lingkungan
        </p>
      </div>

      {/* Ringkasan Point */}
      <div className="flex my-12 rounded-2xl overflow-hidden shadow bg-[#FFF8E1]">
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
        {/* Bagian Kiri */}
        <div className="w-1/2 bg-[#8D6E6326] p-6 rounded-r-2xl text-[#795548]">
          <h2 className="text-xl lg:text-2xl font-bold">Ringkasan Point</h2>

          <p className="text-xl lg:text-2xl font-bold mb-2">
            Total Point Kamu: <span className="font-bold">1000</span>
          </p>

          {/* Garis + Bintang */}
          <div className="flex items-center">
            <div className="h-[2px] flex-1 bg-[#795548]" />
            <Star className="ml-2 text-yellow-500 w-6 h-6" />
          </div>

          <p className="text-xl lg:text-2xl font-bold ">1000</p>
        </div>

        {/* Bagian Kanan */}
        <div className="w-1/2  p-4 flex items-center justify-center gap-3 rounded-l-2xl">
          <Link to="/changereward" className="bg-[#FB8C00] hover:bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg">
            Tukar Reward
          </Link>
          <Link to="/belanja" className="bg-[#FB8C00] hover:bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg">
            Belanja Produk Eco
          </Link>
        </div>
      </div>

      {/* Filter Tabs */}
<<<<<<< HEAD
      <div data-aos="fade-up" className="flex gap-3 mb-6">
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">
=======
      <div className="flex gap-4 mb-6">
        <button className="flex-1 bg-[#FB8C00] text-white px-4 py-2 rounded-full">
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
          Semua
        </button>
        <button className="flex-1 bg-[#8D6E63] text-white px-4 py-2 rounded-full">
          {/* nanti isi dari backend */}
        </button>
        <button className="flex-1 bg-[#8D6E63] text-white px-4 py-2 rounded-full">
          {/* nanti isi dari backend */}
        </button>
        <button className="flex-1 bg-[#8D6E63] text-white px-4 py-2 rounded-full">
          {/* nanti isi dari backend */}
        </button>
        <button className="flex-1 bg-[#8D6E63] text-white px-4 py-2 rounded-full">
          {/* nanti isi dari backend */}
        </button>
      </div>

      {/* Bawah Katalog */}
      <div className="bg-[#FFF8E1] rounded-lg">
        <div className="p-6">
          <h2 className="text-xl text-[#558B2F] font-semibold  mb-4">
            Katalog Reward:
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center"
              >
                {/* Gambar placeholder */}
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>

                {/* Button dengan lebar sama gambar */}
                <Link
                  to="/rewarddetail"
                  className="w-24 bg-[#FB8C00] hover:bg-orange-600 text-white h-8 rounded-full text-xs font-semibold truncate flex items-center justify-center"
                >
                  Tukar
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Rekomendasi Reward */}
        <div className="px-6 pb-6">
          <h2 className="text-xl text-[#558B2F] font-semibold  mb-4">
            Rekomendasi Reward:
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center"
              >
                {/* Gambar placeholder */}
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Katalog Reward */}
<<<<<<< HEAD
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
=======
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
    </LayoutWhite>
  );
}
