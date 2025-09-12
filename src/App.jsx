import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import AOS from "aos";
import "aos/dist/aos.css";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DailyPage from "./pages/DailyPage";
import ChatbotPage from "./pages/ChatbotPage";
import Reward from "./pages/Reward";
import RewardDetail from "./pages/DetailReward";
import ChangeReward from "./pages/ChangeReward";
import Donasi from "./pages/Donasi";
import Voucher from "./pages/Voucher";
import Undian from "./pages/Undian";
import TukarUang from "./pages/TukarUang";
import Belanja from "./pages/Belanja";
import SearchSampah from "./pages/Search";
import Scan from "./pages/Scan";
import Map from "./pages/Map";
import Profile from "./pages/Profil";
import HistoryPage from "./pages/HistoryPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <AuthProvider>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected */}
        <Route
          path="/profile"
          element={
            // <ProtectedRoute>
            <Profile />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/daily"
          element={
            <ProtectedRoute>
              <DailyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <ChatbotPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rewards"
          element={
            <ProtectedRoute>
              <Reward />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rewarddetail"
          element={
            <ProtectedRoute>
              <RewardDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/changereward"
          element={
            <ProtectedRoute>
              <ChangeReward />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tukaruang"
          element={
            <ProtectedRoute>
              <TukarUang />
            </ProtectedRoute>
          }
        />
        <Route
          path="/undian"
          element={
            <ProtectedRoute>
              <Undian />
            </ProtectedRoute>
          }
        />
        <Route
          path="/voucher"
          element={
            <ProtectedRoute>
              <Voucher />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donasi"
          element={
            <ProtectedRoute>
              <Donasi />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchSampah />
            </ProtectedRoute>
          }
        />
        <Route
          path="/scan"
          element={
            <ProtectedRoute>
              <Scan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <Map />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <HistoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/belanja"
          element={
            <ProtectedRoute>
              <Belanja />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}