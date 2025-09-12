import React from "react";
import { ScanLine } from "lucide-react";
import LayoutWhite from "../layouts/LayoutWhite";

export default function Scan() {
<<<<<<< HEAD
    return (
        <LayoutWhite>
            <div data-aos="fade-up" className="min-h-screen flex flex-col items-center bg-white">
                {/* Scan Card Fullscreen */}
                <div className="bg-[#558B2F40] rounded-xl shadow-md p-6 mt-8 w-full max-w-md h-[70vh] flex flex-col">
                    <div className="flex flex-col items-center justify-center border border-green-200 rounded-xl bg-white flex-grow">
                        <ScanLine className="w-24 h-24 text-gray-600 mb-6" />
                        <p className="text-gray-700 text-lg">Scan sampah anda</p>
                    </div>

                    <button className="w-full mt-4 bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition">
                        Scan
                    </button>
                </div>
            </div>
        </LayoutWhite>
    );
}
=======
  return (
    <LayoutWhite>
      <div className="min-h-screen flex flex-col items-center bg-white">
        {/* Scan Card Fullscreen */}
        <div className="bg-[#558B2F40] rounded-xl shadow-md p-6 mt-8 w-full max-w-md h-[70vh] flex flex-col">
          <div className="flex flex-col items-center justify-center border border-green-200 rounded-xl bg-white flex-grow">
            <ScanLine className="w-24 h-24 text-gray-600 mb-6" />
            <p className="text-gray-700 text-lg">Scan sampah anda</p>
          </div>

          <button className="w-full mt-4 bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition">
            Scan
          </button>
        </div>
      </div>
    </LayoutWhite>
  );
}
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
