export function Footer() {
  return (
    <footer className="w-full bg-black text-[#f0f0f0] border-t border-white/10 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 font-medium text-sm text-white/50">
        
        <p>© {new Date().getFullYear()} Arman Singh. All rights reserved</p>
        <div className="flex gap-8 uppercase tracking-wider font-bold">
          <a href="#" className="hover:text-[#facc15] transition-colors">Behance</a>
          <a href="#" className="hover:text-[#4ade80] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#b72b2b] transition-colors">Instagram</a>
        </div>
        
      </div>
    </footer>
  );
}  