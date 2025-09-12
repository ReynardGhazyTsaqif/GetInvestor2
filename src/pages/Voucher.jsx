import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LayoutWhite from "../layouts/LayoutWhite";

export default function Voucher() {
<<<<<<< HEAD
    return (
        <LayoutWhite>
            <div data-aos="fade-up" className="flex justify-center py-12 bg-white">
                <div className="bg-[#FFF7E6] rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
                    {/* Bagian Kiri - Teks dan Donasi */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[#558B2F] mb-2">
                            POIN REWARD
                        </h2>
                        <p className="text-[#558B2F] mb-6 font-semibold">
                            Tukar poin kamu dengan beragam voucher menarik
                        </p>

                        {/* Card Donasi */}
                        <div className="space-y-4">
                            <Link
                                to="/changereward"
                                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-4 py-3 text-white hover:opacity-90 transition"
                            >
                                <span>Dua Mingguan (20 Point)</span>
                                <div className="bg-white rounded-full p-2">
                                    <ArrowRight className="w-5 h-5 text-black" />
                                </div>
                            </Link>

                            <Link
                                to="/changereward"
                                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-4 py-3 text-white hover:opacity-90 transition"
                            >
                                <span>Bulanan (20 Point)</span>
                                <div className="bg-white rounded-full p-2">
                                    <ArrowRight className="w-5 h-5 text-black" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Bagian Kanan - Gambar */}
                    <div className="relative flex-shrink-0">
                        <img
                            src="/Voucher.png"
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
            <h2 className="text-2xl font-bold text-[#558B2F] mb-2">
              POIN REWARD
            </h2>
            <p className="text-[#558B2F] mb-6 font-semibold">
              Tukar poin kamu dengan beragam voucher menarik
            </p>

            {/* Card Donasi */}
            <div className="space-y-4">
              <Link
                to="/changereward"
                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-4 py-3 text-white hover:opacity-90 transition"
              >
                <span>Dua Mingguan (20 Point)</span>
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </Link>

              <Link
                to="/changereward"
                className="flex justify-between items-center bg-[#C4AFA0] rounded-xl px-4 py-3 text-white hover:opacity-90 transition"
              >
                <span>Bulanan (20 Point)</span>
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </Link>
            </div>
          </div>

          {/* Bagian Kanan - Gambar */}
          <div className="relative flex-shrink-0">
            <img
              src="/Voucher.png"
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
