import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bot, Send } from "lucide-react";

export default function ChatbotPage() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div data-aos="fade-up" className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md rounded-b-2xl">
        <div onClick={handleBack} className="flex items-center space-x-2">
          <ArrowLeft className="w-6 h-6 text-gray-700 cursor-pointer hover:text-green-600 transition" />
          <img src="/Logo.svg" alt="EcoReward Logo" className="h-8" />
        </div>
        <div className="flex flex-col items-center flex-1">
          <h1 className="text-lg font-semibold text-gray-800">
            EcoBot — Asisten Ramah Lingkungan
          </h1>
          <p className="text-sm text-gray-500">Tanya apa saja tentang sampah</p>
        </div>
        <div className="w-6" /> {/* spacer biar balance */}
      </header>

      {/* Chat Area */}
      <main className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
        {/* Chat bubble bot */}
        <div className="flex items-start space-x-3 animate-fadeIn">
          <div className="flex-shrink-0 bg-[#FFA000] p-2 rounded-full shadow-md">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-md max-w-sm border border-gray-100">
            <p>
              Halo, saya <span className="font-semibold text-green-600">EcoBot</span>.
              Siap bantu kamu tukar sampah jadi manfaat. Mau mulai dari mana?
            </p>
          </div>
        </div>

        {/* Chat bubble user (contoh) */}
        <div className="flex items-start justify-end space-x-3 animate-fadeIn">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-2xl shadow-md max-w-sm">
            <p>Saya mau tahu cara menukar botol plastik.</p>
          </div>
        </div>
      </main>

      {/* Input */}
      <footer className="px-4 py-3 bg-white shadow-inner">
        <div className="flex items-center bg-gray-100 rounded-full px-4 shadow-sm">
          <input
            type="text"
            placeholder="Ketik pertanyaan di sini..."
            className="flex-1 py-3 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <button className="flex items-center justify-center w-11 h-11 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-md hover:scale-105 transition">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </footer>
    </div>
  );
}
