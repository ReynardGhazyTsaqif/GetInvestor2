import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LayoutWhite from "../layouts/LayoutWhite";

export default function Donasi() {
<<<<<<< HEAD
    return (
        <LayoutWhite>
            <div data-aos="fade-up" className="flex justify-center py-12 bg-white">
                <div className="bg-[#FFF7E6] rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
                    {/* Bagian Kiri - Teks dan Donasi */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-green-700 mb-2">
                            DONASI REWARD
                        </h2>
                        <p className="text-green-700 mb-6">
                            Tukar poin kamu dengan seribu donasi demi kesejahteraan masyarakat
                        </p>

                        {/* Card Donasi */}
                        <div className="space-y-4">
                            <Link
                                to="/changereward"
                                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-4 py-3 text-white hover:opacity-90 transition"
                            >
                                <span>Donasi konservasi terumbu karang (5 Point)</span>
                                <div className="bg-white rounded-full p-2">
                                    <ArrowRight className="w-5 h-5 text-black" />
                                </div>
                            </Link>

                            <Link
                                to="/changereward"
                                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-4 py-3 text-white hover:opacity-90 transition"
                            >
                                <span>Donasi konservasi lamun (5 Point)</span>
                                <div className="bg-white rounded-full p-2">
                                    <ArrowRight className="w-5 h-5 text-black" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Bagian Kanan - Gambar */}
                    <div className="relative flex-shrink-0">
                        <img
                            src="/Donasi.png"
                            alt="Person"
                            className="w-56 rounded-lg mx-auto"
                        />


                    </div>
                </div>
            </div>
        </LayoutWhite>
    );
}
=======
  return (
    <LayoutWhite>
      <div className="flex justify-center py-12 bg-white">
        <div className="bg-[#FFF7E6] rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
          {/* Bagian Kiri - Teks dan Donasi */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              DONASI REWARD
            </h2>
            <p className="text-green-700 mb-6">
              Tukar poin kamu dengan seribu donasi demi kesejahteraan masyarakat
            </p>

            {/* Card Donasi */}
            <div className="space-y-4">
              <Link
                to="/changereward"
                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-4 py-3 text-white hover:opacity-90 transition"
              >
                <span>Donasi konservasi terumbu karang (5 Point)</span>
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </Link>

              <Link
                to="/changereward"
                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-4 py-3 text-white hover:opacity-90 transition"
              >
                <span>Donasi konservasi lamun (5 Point)</span>
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </Link>
            </div>
          </div>

          {/* Bagian Kanan - Gambar */}
          <div className="relative flex-shrink-0">
            <img
              src="/Donasi.png"
              alt="Person"
              className="w-56 rounded-lg mx-auto"
            />
            
            
          </div>
        </div>
      </div>
    </LayoutWhite>
  );
}
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
