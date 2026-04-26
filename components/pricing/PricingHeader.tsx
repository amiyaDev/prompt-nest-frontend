export default function PricingHeader() {
  return (
    <header className="w-full h-16 sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#262626] flex justify-between items-center px-6">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold text-white">Prompt Nest</span>
        <nav className="hidden lg:flex items-center gap-6">
          <a className="text-gray-400 font-inter text-sm hover:text-white transition-opacity" href="#">Models</a>
          <a className="text-gray-400 font-inter text-sm hover:text-white transition-opacity" href="#">Documentation</a>
          <a className="text-gray-400 font-inter text-sm hover:text-white transition-opacity" href="#">API</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="bg-primary text-on-primary px-4 py-1.5 rounded-full font-label-md text-label-md font-semibold hover:opacity-90 transition-opacity">
          Share
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
          <img alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBugrsBBR4xHUZyM1FZqpP-yAZd47AR4U-er93BcHiMIAAuVNMUtJhjhxJCzYcRa5bv35H-gp2ftQA5gFcL6YiBA0xDwzyYgWfSY8x97PfkadPh_dPh5iBEhtAkDGWK8bSQxuAVUUPXx25ZXvU6LpLECHhbmUseVZ9FL7jK22iyEzNBjXHMTuAlnxJdq-4ldAwessOfrmRLZvHFF_rdybyKlBS4N2QwgfhTGaYM1u6DRef6NJ9CMKuvi_CtAkfNbUM66emTdGMcdFw" />
        </div>
      </div>
    </header>
  );
}