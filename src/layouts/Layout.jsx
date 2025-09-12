import React from "react";
import Navbar from "../components/Navbar";

export default function Layout({ children, px = 6, py = 12 }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF3E0] to-[#E6EEDC]">
      <Navbar />
      <main className={`container mx-auto px-${px} py-${py}`}>
        {children}
      </main>
    </div>
  );
}
