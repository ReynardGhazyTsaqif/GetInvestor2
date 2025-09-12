import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LayoutWhite from "../layouts/LayoutWhite";

export default function Undian() {
<<<<<<< HEAD
    return (
        <LayoutWhite>
            <div data-aos="fade-up" className="flex items-center justify-center  bg-white p-6">
                <div className="bg-[#FFF7E6] rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
                    {/* Bagian Kiri - Gambar + Judul */}
                    <div className="flex-1 flex flex-col items-center md:items-start relative -mt-16 md:-mt-20 pb-20 md:pb-32">
                        <div className="relative w-52 sm:w-64 md:w-72">
                            {/* Gambar Orang */}
                            <img
                                src="/Undian.png"
                                alt="Person"
                                className="w-full rounded-lg"
                            />

                            {/* Teks UNDI UNDI HAPPY */}
                            <h2 className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 left-1/2 -translate-x-1/2 w-full text-xl sm:text-2xl md:text-3xl font-extrabold text-[#5A4A42] leading-tight backdrop-blur-xs py-2 sm:py-3 rounded-lg text-center ">
                                UNDI <br /> UNDI <br /> HAPPY
                            </h2>
                        </div>
                    </div>

                    {/* Bagian Kanan */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Daftar Hadiah */}
                        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-6">
                            <div className="flex flex-col items-center">
                                <img src="/Mobil.png" alt="Mobil" className="w-28 h-20" />
                                <span className="bg-[#C4AFA0] text-white rounded-full px-4 py-2 text-base mt-2">
                                    Mobil
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/Motor.png" alt="Motor" className="w-28 h-20" />
                                <span className="bg-[#C4AFA0] text-white rounded-full px-4 py-2 text-base mt-2">
                                    Motor
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/Laptop.png" alt="Laptop" className="w-28 h-20" />
                                <span className="bg-[#C4AFA0] text-white rounded-full px-4 py-2 text-base mt-2">
                                    Laptop
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/Iphone.png" alt="Iphone" className="w-28 h-20" />
                                <span className="bg-[#C4AFA0] text-white rounded-full px-4 py-2 text-base mt-2">
                                    Iphone
                                </span>
                            </div>
                        </div>

                        {/* Card Undian */}
                        <div className="space-y-4">
                            <Link
                                to="/changereward"
                                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-6 py-4 text-white hover:opacity-90 transition"
                            >
                                <div className="flex flex-col items-start">
                                    <span className="text-lg font-semibold">Dua Mingguan</span>
                                    <ArrowRight className="w-6 h-6 text-black bg-white rounded-full p-1 mt-2" />
                                </div>
                                <img src="/Undi2.png" alt="Hadiah" className="w-14 h-14" />
                            </Link>

                            <Link
                                to="/changereward"
                                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-6 py-4 text-white hover:opacity-90 transition"
                            >
                                <div className="flex flex-col items-start">
                                    <span className="text-lg font-semibold">Bulanan</span>
                                    <ArrowRight className="w-6 h-6 text-black bg-white rounded-full p-1 mt-2" />
                                </div>
                                <img src="/Undi2.png" alt="Hadiah" className="w-14 h-14" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWhite>
    );
}
=======
  return (
    <LayoutWhite>
      <div className="flex items-center justify-center  bg-white p-6">
        <div className="bg-[#FFF7E6] rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
          {/* Bagian Kiri - Gambar + Judul */}
          <div className="flex-1 flex flex-col items-center md:items-start relative -mt-16 md:-mt-20 pb-20 md:pb-32">
            <div className="relative w-52 sm:w-64 md:w-72">
              {/* Gambar Orang */}
              <img
                src="/Undian.png"
                alt="Person"
                className="w-full rounded-lg"
              />

              {/* Teks UNDI UNDI HAPPY */}
              <h2 className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 left-1/2 -translate-x-1/2 w-full text-xl sm:text-2xl md:text-3xl font-extrabold text-[#5A4A42] leading-tight backdrop-blur-xs py-2 sm:py-3 rounded-lg text-center ">
                UNDI <br /> UNDI <br /> HAPPY
              </h2>
            </div>
          </div>

          {/* Bagian Kanan */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Daftar Hadiah */}
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-6">
              <div className="flex flex-col items-center">
                <img src="/Mobil.png" alt="Mobil" className="w-28 h-20" />
                <span className="bg-[#C4AFA0] text-white rounded-full px-4 py-2 text-base mt-2">
                  Mobil
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/Motor.png" alt="Motor" className="w-28 h-20" />
                <span className="bg-[#C4AFA0] text-white rounded-full px-4 py-2 text-base mt-2">
                  Motor
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/Laptop.png" alt="Laptop" className="w-28 h-20" />
                <span className="bg-[#C4AFA0] text-white rounded-full px-4 py-2 text-base mt-2">
                  Laptop
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/Iphone.png" alt="Iphone" className="w-28 h-20" />
                <span className="bg-[#C4AFA0] text-white rounded-full px-4 py-2 text-base mt-2">
                  Iphone
                </span>
              </div>
            </div>

            {/* Card Undian */}
            <div className="space-y-4">
              <Link
                to="/changereward"
                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-6 py-4 text-white hover:opacity-90 transition"
              >
                <div className="flex flex-col items-start">
                  <span className="text-lg font-semibold">Dua Mingguan</span>
                  <ArrowRight className="w-6 h-6 text-black bg-white rounded-full p-1 mt-2" />
                </div>
                <img src="/Undi2.png" alt="Hadiah" className="w-14 h-14" />
              </Link>

              <Link
                to="/changereward"
                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-6 py-4 text-white hover:opacity-90 transition"
              >
                <div className="flex flex-col items-start">
                  <span className="text-lg font-semibold">Bulanan</span>
                  <ArrowRight className="w-6 h-6 text-black bg-white rounded-full p-1 mt-2" />
                </div>
                <img src="/Undi2.png" alt="Hadiah" className="w-14 h-14" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutWhite>
  );
}
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
