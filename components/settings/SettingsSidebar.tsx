export default function SettingsSidebar() {
  return (
    <aside className="h-screen border-r border-[#262626] w-64 bg-[#171717]/80 backdrop-blur-xl flex flex-col py-6 shrink-0">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
            <span className="material-symbols-outlined">smart_toy</span>
          </div>
          <div>
            <p className="text-lg font-semibold text-white tracking-tight">AI Assistant</p>
            <p className="text-xs text-indigo-400">Pro Plan</p>
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 space-y-1">
        <a className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#262626] transition-colors duration-200 cursor-pointer active:scale-95 rounded-lg" href="#">
          <span className="material-symbols-outlined">add</span>
          <span className="font-inter text-sm">New Chat</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#262626] transition-colors duration-200 cursor-pointer active:scale-95 rounded-lg" href="#">
          <span className="material-symbols-outlined">history</span>
          <span className="font-inter text-sm">History</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#262626] transition-colors duration-200 cursor-pointer active:scale-95 rounded-lg" href="#">
          <span className="material-symbols-outlined">query_stats</span>
          <span className="font-inter text-sm">Analytics</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-white font-medium border-r-2 border-indigo-500 bg-indigo-500/10 transition-colors duration-200 cursor-pointer active:scale-95" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-inter text-sm">Settings</span>
        </a>
      </div>
      <div className="px-4 mb-6">
        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/40 to-surface-container border border-indigo-500/20">
          <p className="text-white text-xs font-semibold mb-2">Upgrade to Plus</p>
          <p className="text-gray-400 text-[11px] mb-3 leading-relaxed">Get access to GPT-4o, DALL-E 3, and priority support.</p>
          <button className="w-full py-1.5 bg-primary text-on-primary text-[11px] font-bold rounded-md hover:opacity-90">Upgrade Now</button>
        </div>
      </div>
      <div className="px-4 border-t border-[#262626] pt-6 space-y-1">
        <a className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#262626] transition-colors duration-200 cursor-pointer active:scale-95 rounded-lg" href="#">
          <span className="material-symbols-outlined">help</span>
          <span className="font-inter text-sm">Help</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#262626] transition-colors duration-200 cursor-pointer active:scale-95 rounded-lg" href="#">
          <span className="material-symbols-outlined">logout</span>
          <span className="font-inter text-sm">Logout</span>
        </a>
      </div>
    </aside>
  );
}