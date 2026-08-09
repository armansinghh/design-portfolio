export function InstagramCards() {
  return (
    <div className="relative w-full max-w-md mx-auto h-100 flex items-center justify-center">
      <div className="absolute left-0 md:left-4 top-12 bg-white p-4 pb-5 rounded-2xl shadow-[8px_8px_0px_#161616] border-2 border-[#161616] -rotate-12 transition-transform duration-300 hover:-translate-y-4 hover:-rotate-6 z-10 flex flex-col items-center">
        <div className="w-38 h-38 rounded-xl">
          <img
            src="/assets/about/qr1.png"
            alt="Main Account QR"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="mt-4 font-sans font-black text-sm tracking-widest uppercase text-[#161616]">
          @hefy.ae
        </span>
      </div>

      <div className="absolute right-12 md:right-16 top-20 bg-white p-4 pb-5 rounded-2xl shadow-[8px_8px_0px_#161616] border-2 border-[#161616] rotate-3 transition-transform duration-300 hover:-translate-y-4 hover:rotate-[8deg] z-20 flex flex-col items-center">
        <div className="w-38 h-38 rounded-xl">
          <img
            src="/assets/about/qr2.png"
            alt="Second Account QR"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="mt-4 font-sans font-black text-sm tracking-widest uppercase text-[#161616]">
          @hefy.ps
        </span>
      </div>
    </div>
  );
}
