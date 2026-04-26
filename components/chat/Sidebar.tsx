export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-full py-6 bg-[#171717]/80 backdrop-blur-xl border-r border-[#262626] w-64 font-inter antialiased shadow-none">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white tracking-tight">Prompt Nest</h2>
          <p className="text-[10px] text-indigo-400 font-bold tracking-widest uppercase">Pro Plan</p>
        </div>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {/* Active Item: New Chat */}
        <div className="text-white font-medium border-r-2 border-indigo-500 bg-indigo-500/10 flex items-center gap-3 px-3 py-2.5 rounded-l-lg cursor-pointer active:scale-95 transition-colors duration-200">
          <span className="material-symbols-outlined" data-icon="add">add</span>
          <span className="text-sm">New Chat</span>
        </div>
        <div className="text-gray-400 hover:text-gray-200 hover:bg-[#262626] flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer active:scale-95 transition-colors duration-200">
          <span className="material-symbols-outlined" data-icon="history">history</span>
          <span className="text-sm">History</span>
        </div>
        <div className="text-gray-400 hover:text-gray-200 hover:bg-[#262626] flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer active:scale-95 transition-colors duration-200">
          <span className="material-symbols-outlined" data-icon="query_stats">query_stats</span>
          <span className="text-sm">Analytics</span>
        </div>
        <div className="text-gray-400 hover:text-gray-200 hover:bg-[#262626] flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer active:scale-95 transition-colors duration-200">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="text-sm">Settings</span>
        </div>
      </nav>
      <div className="mt-auto px-3 space-y-4">
        <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-4">
          <p className="text-xs text-indigo-300 mb-2">Unlock advanced models</p>
          <button className="w-full bg-indigo-500 text-white text-xs font-semibold py-2 rounded-lg hover:bg-indigo-400 transition-colors">Upgrade to Plus</button>
        </div>
        <div className="space-y-1">
          <div className="text-gray-400 hover:text-gray-200 hover:bg-[#262626] flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer active:scale-95 transition-colors duration-200">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            <span className="text-sm">Help</span>
          </div>
          <div className="text-gray-400 hover:text-gray-200 hover:bg-[#262626] flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer active:scale-95 transition-colors duration-200">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            <span className="text-sm">Logout</span>
          </div>
        </div>
        <div className="pt-4 mt-2 border-t border-[#262626] flex items-center gap-3 px-3">
          <img alt="User profile avatar" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBFSb4QWo8sqXX4Zg8X5CF6ZfmxWJZ0FEKQWmAkiBGVCGwyE0iXYuO8uBt4JULUt4huRO-wy4T2AWEGBL0aER2aUYfymiWfIOZlWQCzrIFYGoyh4zV5yAZE0sCLO8kaBQ7WjB77T4WGMB2TvwWUh-DkwLmlqsGtNmumKHexgQV8gA5CrPRLG1hEaQDch1OhPJCr1enRGGoUlmtC1XrBbw0ybmxKbYl6peQfB18Z_Lq0LHds6HDIe7tJMiM8Hi7ADfyET3MCLpiSgk" />
          <div className="overflow-hidden">
            <p className="text-sm text-white font-medium truncate">Alex Rivard</p>
            <p className="text-[10px] text-gray-500 truncate">alex@nexus.ai</p>
          </div>
        </div>
      </div>
    </aside>
  );
}