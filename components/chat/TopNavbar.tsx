export default function TopNavbar() {
  return (
    <header className="w-full h-16 sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#262626] flex justify-between items-center px-6 shadow-none">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold text-white font-h2">Prompt Nest</h1>
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#262626] hover:border-indigo-500/50 transition-all">
              <span className="text-xs font-semibold text-white">GPT-4 Turbo</span>
              <span className="material-symbols-outlined text-sm text-gray-500">expand_more</span>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-indigo-400 font-semibold text-sm cursor-pointer">Models</span>
            <span className="text-gray-400 hover:text-white transition-opacity text-sm cursor-pointer">Documentation</span>
            <span className="text-gray-400 hover:text-white transition-opacity text-sm cursor-pointer">API</span>
          </div>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
          <span className="material-symbols-outlined text-sm">share</span>
          Share
        </button>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
}