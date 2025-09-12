import React from "react";
import Navbar from "../components/Navbar";

export default function LayoutWhite({ children, noContainer = false }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {noContainer ? (
        <main>{children}</main>
      ) : (
        <main className="container mx-auto px-6 py-12">{children}</main>
      )}
    </div>
  );
}
