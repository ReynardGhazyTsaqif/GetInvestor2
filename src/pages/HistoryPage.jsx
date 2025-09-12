import React from "react";
import Layout from "../layouts/Layout";
import { Calendar, CheckCircle } from "lucide-react";

const histories = [
  {
    id: 1,
    date: "12 Sept 2025 - 14:30",
    title: "Judul Event",
    description: "Deskripsi singkat mengenai event atau aktivitas yang dilakukan.",
  },
  {
    id: 2,
    date: "10 Sept 2025 - 09:15",
    title: "Judul Event",
    description: "Deskripsi lain mengenai aktivitas yang sudah dilakukan sebelumnya.",
  },
  {
    id: 3,
    date: "05 Sept 2025 - 18:45",
    title: "Judul Event",
    description: "Event atau aktivitas berhasil diselesaikan sesuai jadwal.",
  },
  {
    id: 4,
    date: "01 Sept 2025 - 11:00",
    title: "Judul Event",
    description: "Deskripsi singkat untuk aktivitas terakhir di bulan ini.",
  },
];

export default function HistoryPage() {
  return (
    <Layout>

      <div className="min-h-screen bg-[#FFF6E0] flex justify-center py-10 px-4">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-center text-2xl font-bold text-brown-700 mb-6">
            History
          </h1>
          <div className="space-y-6">
            {histories.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b pb-4"
              >
                {/* Thumbnail / Placeholder */}
                <div className="w-full md:w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Calendar className="text-gray-400 w-8 h-8" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-md font-medium">
                    {item.date}
                  </span>
                  <h2 className="mt-2 text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>

                {/* Status */}
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center gap-1 bg-orange-500 text-white text-sm px-4 py-2 rounded-full font-medium shadow-sm">
                    <CheckCircle size={16} /> Sukses
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
