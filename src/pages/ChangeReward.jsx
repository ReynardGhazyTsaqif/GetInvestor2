import LayoutWhite from "../layouts/LayoutWhite";
import { Gift, Ticket, FerrisWheel, HandHelping } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChangeReward() {
<<<<<<< HEAD
    return (
        // Halaman dengan banner full width
        <LayoutWhite noContainer>
            {/* Banner */}
            <div data-aos="fade-up" className="w-full bg-[#FFF8E1] py-12 sm:py-20 px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 text-center lg:text-left">
                    {/* Bagian kiri: Gift + Points */}
                    <div className="flex items-center gap-6 sm:gap-8">
                        <div className="bg-orange-300 rounded-full p-6 sm:p-8 shadow-lg flex items-center justify-center">
                            <Gift className="text-white w-12 h-12 sm:w-16 sm:h-16" />
                        </div>
                        <div>
                            <p className="text-[#558B2F] text-base sm:text-lg">
                                Available Points:
                            </p>
                            <p
                                className="text-white text-3xl sm:text-5xl font-bold"
                                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
                            >
                                19,320
                            </p>
                        </div>
                    </div>

                    {/* Bagian tengah: tanda "=" */}
                    <p className="text-[#558B2F] text-3xl sm:text-4xl font-bold hidden lg:block">
                        =
                    </p>

                    {/* Bagian kanan: Rewards */}
                    <div>
                        <p className="text-[#558B2F] text-base sm:text-lg">
                            Available Reward:
                        </p>
                        <p
                            className="text-white text-3xl sm:text-5xl font-bold"
                            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
                        >
                            100.000
                        </p>
                    </div>
                </div>
            </div>

            {/* 3 Pilihan Reward */}
            <div data-aos="fade-up" className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Donasi */}
                <Link
                    to="/donasi"
                    className="flex flex-col items-center justify-center bg-[#558B2F] hover:bg-[#6BAF3E] text-white p-6 rounded-xl shadow-md transition-all"
                >
                    <HandHelping className="w-10 h-10 mb-3" />
                    <span className="font-semibold text-lg sm:text-xl">Donasi</span>
                </Link>

                {/* Undian */}
                <Link
                    to="/undian"
                    className="flex flex-col items-center justify-center bg-[#558B2F] hover:bg-[#6BAF3E] text-white p-6 rounded-xl shadow-md transition-all"
                >
                    <FerrisWheel className="w-10 h-10 mb-3" />
                    <span className="font-semibold text-lg sm:text-xl">Undian</span>
                </Link>

                {/* Voucher */}
                <Link
                    to="/voucher"
                    className="flex flex-col items-center justify-center bg-[#558B2F] hover:bg-[#6BAF3E] text-white p-6 rounded-xl shadow-md transition-all"
                >
                    <Ticket className="w-10 h-10 mb-3" />
                    <span className="font-semibold text-lg sm:text-xl">Voucher</span>
                </Link>
            </div>

            {/* Button Tukarkan dengan Uang */}
            <div data-aos="fade-up" className="mt-6 flex justify-center px-4">
                <Link
                    to="/tukaruang"
                    className="w-full sm:w-auto bg-[#558B2F] hover:bg-[#6BAF3E] text-white px-10 sm:px-16 py-3 sm:py-4 rounded-xl shadow-md font-semibold text-lg transition-all text-center mb-4"
                >
                    Tukarkan dengan Uang
                </Link>
            </div>
        </LayoutWhite>
    );
}
=======
  return (
    // Halaman dengan banner full width
    <LayoutWhite noContainer>
      {/* Banner */}
      <div className="w-full bg-[#FFF8E1] py-12 sm:py-20 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 text-center lg:text-left">
          {/* Bagian kiri: Gift + Points */}
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="bg-orange-300 rounded-full p-6 sm:p-8 shadow-lg flex items-center justify-center">
              <Gift className="text-white w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            <div>
              <p className="text-[#558B2F] text-base sm:text-lg">
                Available Points:
              </p>
              <p
                className="text-white text-3xl sm:text-5xl font-bold"
                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
              >
                19,320
              </p>
            </div>
          </div>

          {/* Bagian tengah: tanda "=" */}
          <p className="text-[#558B2F] text-3xl sm:text-4xl font-bold hidden lg:block">
            =
          </p>

          {/* Bagian kanan: Rewards */}
          <div>
            <p className="text-[#558B2F] text-base sm:text-lg">
              Available Reward:
            </p>
            <p
              className="text-white text-3xl sm:text-5xl font-bold"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
            >
              100.000
            </p>
          </div>
        </div>
      </div>

      {/* 3 Pilihan Reward */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Donasi */}
        <Link
          to="/donasi"
          className="flex flex-col items-center justify-center bg-[#558B2F] hover:bg-[#6BAF3E] text-white p-6 rounded-xl shadow-md transition-all"
        >
          <HandHelping className="w-10 h-10 mb-3" />
          <span className="font-semibold text-lg sm:text-xl">Donasi</span>
        </Link>

        {/* Undian */}
        <Link
          to="/undian"
          className="flex flex-col items-center justify-center bg-[#558B2F] hover:bg-[#6BAF3E] text-white p-6 rounded-xl shadow-md transition-all"
        >
          <FerrisWheel className="w-10 h-10 mb-3" />
          <span className="font-semibold text-lg sm:text-xl">Undian</span>
        </Link>

        {/* Voucher */}
        <Link
          to="/voucher"
          className="flex flex-col items-center justify-center bg-[#558B2F] hover:bg-[#6BAF3E] text-white p-6 rounded-xl shadow-md transition-all"
        >
          <Ticket className="w-10 h-10 mb-3" />
          <span className="font-semibold text-lg sm:text-xl">Voucher</span>
        </Link>
      </div>

      {/* Button Tukarkan dengan Uang */}
      <div className="mt-6 flex justify-center px-4">
        <Link
          to="/tukaruang"
          className="w-full sm:w-auto bg-[#558B2F] hover:bg-[#6BAF3E] text-white px-10 sm:px-16 py-3 sm:py-4 rounded-xl shadow-md font-semibold text-lg transition-all text-center mb-4"
        >
          Tukarkan dengan Uang
        </Link>
      </div>
    </LayoutWhite>
  );
}
>>>>>>> 73cac7b52ffdf9a9e8df99a32bec46fed6bea90f
