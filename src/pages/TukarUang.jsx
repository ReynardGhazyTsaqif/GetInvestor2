import LayoutWhite from "../layouts/LayoutWhite";

export default function TukarUang() {
    return (
        <LayoutWhite>
            <div data-aos="fade-up" className="mx-auto px-6 text-center">
                {/* Saldo Anda */}
                <p className="text-[#558B2F] text-xl font-medium mb-2">Saldo Anda</p>
                <p className="text-[#8D6E63] text-5xl font-bold mb-24">Rp100.000</p>

                {/* Input sandi */}
                <div className="mb-8">
                    <p className="text-[#558B2F80] text-base mb-2"></p>
                    <input
                        type="password"
                        placeholder="Masukkan sandi anda"
                        className="w-full border-b-2 border-[#8D6E63] focus:outline-none  text-lg py-2"
                    />
                </div>

                {/* Button Tarik */}
                <button className="w-auto px-24 bg-[#FFF8E1] hover:bg-[#e4d9b5] text-[#8D6E63] py-3 rounded-xl shadow-md font-semibold text-lg transition-all mx-auto">
                    Tarik
                </button>
            </div>
        </LayoutWhite>
    );
}
