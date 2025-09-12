import React from "react";
import Layout from "../layouts/Layout";
import { Leaf, DollarSign, Users } from "lucide-react";
import AboutImage from "../assets/about.png";

export default function AboutUsPage() {
  return (
    <Layout>
      {/* Section Kenal Lebih Dekat */}
      <div data-aos="fade-up" className="flex flex-col lg:flex-row items-center justify-between mt-16">
        {/* Teks */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-6 leading-snug">
            KENAL LEBIH DEKAT<br />DENGAN ECOREWARD
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            EcoReward adalah platform inovatif yang membantu masyarakat menukar
            sampah menjadi poin dan reward nyata. Kami percaya, langkah kecil
            dari setiap orang dapat membawa perubahan besar untuk bumi.
          </p>
        </div>

        {/* Ilustrasi */}
        <div className="lg:w-1/2 flex justify-center">
          <img src={AboutImage} alt="Kenal EcoReward" className="max-w-md" />
        </div>
      </div>

      {/* Visi & Misi */}
      <div data-aos="fade-up" className="mt-16 bg-[#E0E6D8] rounded-2xl p-8 shadow-sm">
        {/* Judul */}
        <div className="inline-block bg-green-700 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
          Visi & Misi
        </div>

        {/* Visi */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-green-700 mb-2">Visi</h3>
          <p className="text-gray-700 leading-relaxed">
            Mewujudkan dunia yang lebih bersih, sehat, dan berkelanjutan
            melalui pengelolaan sampah yang cerdas.
          </p>
        </div>

        {/* Misi (3 card) */}
        <h3 className="text-lg font-semibold text-green-700 mb-4">Misi</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-7 h-7 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-800">Efek Lingkungan</h4>
            <p className="text-sm text-gray-600 mt-2">
              Mengurangi sampah dan menjaga keberlangsungan lingkungan hidup.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-7 h-7 text-yellow-600" />
            </div>
            <h4 className="font-semibold text-gray-800">Poin & Reward</h4>
            <p className="text-sm text-gray-600 mt-2">
              Memberikan penghargaan nyata kepada masyarakat yang berkontribusi.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-800">Komunitas Hijau</h4>
            <p className="text-sm text-gray-600 mt-2">
              Membangun kebiasaan peduli lingkungan bersama komunitas.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
