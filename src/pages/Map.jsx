import React from "react";
import {
<<<<<<< HEAD
    Search,
    MapPin,
    BottleWine,
    Wine,
    StickyNote,
    Anvil,
    CircuitBoard,
=======
  Search,
  MapPin,
  BottleWine,
  Wine,
  StickyNote,
  Anvil,
  CircuitBoard,
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
} from "lucide-react";
import LayoutWhite from "../layouts/LayoutWhite";

export default function Map() {
<<<<<<< HEAD
    return (
        <LayoutWhite>
            <div data-aos="fade-up" className="min-h-screen  p-4">
                {/* Search bar */}
                <div className="flex items-center rounded-xl p-4 shadow-xl bg-white mb-8">
                    <Search className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="cari lokasi penukaran .."
                        className="flex-1 outline-none text-sm"
                    />
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {[
                        { icon: <BottleWine className="w-4 h-4" />, label: "Plastik" },
                        { icon: <StickyNote className="w-4 h-4" />, label: "Kertas" },
                        { icon: <Wine className="w-4 h-4" />, label: "Kaca" },
                        { icon: <Anvil className="w-4 h-4" />, label: "Logam" },
                        { icon: <CircuitBoard className="w-4 h-4" />, label: "Elektronik" },
                    ].map((item) => (
                        <button
                            key={item.label}
                            className="flex items-center gap-4 px-4 py-1 border-green-500 border text-black rounded-full text-sm shadow-sm hover:bg-gray-100 transition"
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Map Section */}
                <div className="mt-4 flex gap-4">
                    {/* Map image */}
                    <div className="flex-1 rounded-lg overflow-hidden shadow">
                        <img
                            src="/map.jpg"
                            alt="Map"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Side card */}
                    <div className="w-56 bg-white rounded-lg shadow p-4 self-start">
                        <div className="flex items-center gap-2 mb-3">
                            <MapPin className="w-4 h-4 text-green-600" />
                            <h2 className="font-semibold text-gray-800 text-sm">
                                Lokasi Terdekat
                            </h2>
                        </div>

                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-3">
                            <li>
                                <div>
                                    <span className="font-medium">Bank Sampah A</span>{" "}
                                    <span className="text-xs text-gray-500">(2 km)</span>
                                </div>
                                <div className="text-xs text-gray-500">
                                    Menerima plastik, kertas
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="font-medium">Bank Sampah B</span>{" "}
                                    <span className="text-xs text-gray-500">(3 km)</span>
                                </div>
                                <div className="text-xs text-gray-500">
                                    Menerima botol, kardus
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="font-medium">Bank Sampah C</span>{" "}
                                    <span className="text-xs text-gray-500">(5 km)</span>
                                </div>
                                <div className="text-xs text-gray-500">
                                    Menerima elektronik bekas
                                </div>
                            </li>
                        </ul>

                        <button className="mt-4 w-full border border-orange-400 text-orange-400 text-sm font-medium py-1.5 rounded-full hover:bg-orange-50 transition">
                            Navigasi
                        </button>
                    </div>
                </div>
            </div>
        </LayoutWhite>
    );
}
=======
  return (
    <LayoutWhite>
      <div className="min-h-screen  p-4">
        {/* Search bar */}
        <div className="flex items-center rounded-xl p-4 shadow-xl bg-white mb-8">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="cari lokasi penukaran .."
            className="flex-1 outline-none text-sm"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: <BottleWine className="w-4 h-4" />, label: "Plastik" },
            { icon: <StickyNote className="w-4 h-4" />, label: "Kertas" },
            { icon: <Wine className="w-4 h-4" />, label: "Kaca" },
            { icon: <Anvil className="w-4 h-4" />, label: "Logam" },
            { icon: <CircuitBoard className="w-4 h-4" />, label: "Elektronik" },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-4 px-4 py-1 border-green-500 border text-black rounded-full text-sm shadow-sm hover:bg-gray-100 transition"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-4 flex gap-4">
          {/* Map image */}
          <div className="flex-1 rounded-lg overflow-hidden shadow">
            <img
              src="/map.jpg"
              alt="Map"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Side card */}
          <div className="w-56 bg-white rounded-lg shadow p-4 self-start">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-green-600" />
              <h2 className="font-semibold text-gray-800 text-sm">
                Lokasi Terdekat
              </h2>
            </div>

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-3">
              <li>
                <div>
                  <span className="font-medium">Bank Sampah A</span>{" "}
                  <span className="text-xs text-gray-500">(2 km)</span>
                </div>
                <div className="text-xs text-gray-500">
                  Menerima plastik, kertas
                </div>
              </li>
              <li>
                <div>
                  <span className="font-medium">Bank Sampah B</span>{" "}
                  <span className="text-xs text-gray-500">(3 km)</span>
                </div>
                <div className="text-xs text-gray-500">
                  Menerima botol, kardus
                </div>
              </li>
              <li>
                <div>
                  <span className="font-medium">Bank Sampah C</span>{" "}
                  <span className="text-xs text-gray-500">(5 km)</span>
                </div>
                <div className="text-xs text-gray-500">
                  Menerima elektronik bekas
                </div>
              </li>
            </ul>

            <button className="mt-4 w-full border border-orange-400 text-orange-400 text-sm font-medium py-1.5 rounded-full hover:bg-orange-50 transition">
              Navigasi
            </button>
          </div>
        </div>
      </div>
    </LayoutWhite>
  );
}
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
