export default function PricingSidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen border-r border-outline-variant w-64 bg-[#171717]/80 backdrop-blur-xl font-inter antialiased py-6 sticky top-0">
      <div className="px-6 mb-8">
        <h2 className="text-lg font-semibold text-white tracking-tight">Prompt Nest</h2>
        <p className="text-sm text-gray-400">Pro Plan</p>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#262626] transition-colors duration-200 cursor-pointer active:scale-95 rounded-lg">
          <span className="material-symbols-outlined">add</span>
          <span className="font-label-md text-label-md">New Chat</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#262626] transition-colors duration-200 cursor-pointer active:scale-95 rounded-lg">
          <span className="material-symbols-outlined">history</span>
          <span className="font-label-md text-label-md">History</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#262626] transition-colors duration-200 cursor-pointer active:scale-95 rounded-lg">
          <span className="material-symbols-outlined">query_stats</span>
          <span className="font-label-md text-label-md">Analytics</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-white font-medium border-r-2 border-indigo-500 bg-indigo-500/10 transition-colors duration-200 cursor-pointer active:scale-95 rounded-lg">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-md text-label-md">Settings</span>
        </div>
      </nav>
      <div className="px-4 mt-auto space-y-4">
        <div className="p-4 rounded-xl bg-primary-container/20 border border-primary-container/30">
          <p className="text-xs font-semibold text-primary mb-2">Upgrade to Plus</p>
          <p className="text-[10px] text-on-surface-variant leading-tight">Unlock advanced models and faster response times.</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#262626] transition-colors duration-200 cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-md text-label-md">Help</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#262626] transition-colors duration-200 cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md text-label-md">Logout</span>
          </div>
        </div>
      </div>
    </aside>
  );
}