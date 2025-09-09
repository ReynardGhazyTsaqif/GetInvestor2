import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DailyPage from "./pages/DailyPage";
import ChatbotPage from "./pages/ChatbotPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/daily" element={<DailyPage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/rewards" element={<div className="p-6">Rewards Page</div>} />
      <Route path="/search" element={<div className="p-6">Search Page</div>} />
      <Route path="/history" element={<div className="p-6">History Page</div>} />
      <Route path="/belanja" element={<div className="p-6">Belanja Page</div>} />
    </Routes>
  );
}
