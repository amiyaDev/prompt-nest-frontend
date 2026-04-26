export default function AppearanceSection() {
  return (
    <section className="md:col-span-5 bg-surface-container rounded-xl p-8 border border-[#262626]">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-indigo-500">palette</span>
        <h2 className="font-h3 text-h3 text-white">Appearance</h2>
      </div>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Dark Mode</p>
            <p className="text-on-surface-variant text-xs">Switch between light and dark themes.</p>
          </div>
          <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-white font-medium">Accent Color</p>
          <div className="flex gap-3">
            <button className="w-8 h-8 rounded-full bg-indigo-500 ring-2 ring-white ring-offset-2 ring-offset-[#131313]"></button>
            <button className="w-8 h-8 rounded-full bg-emerald-500 hover:scale-110 transition-transform"></button>
            <button className="w-8 h-8 rounded-full bg-amber-500 hover:scale-110 transition-transform"></button>
            <button className="w-8 h-8 rounded-full bg-rose-500 hover:scale-110 transition-transform"></button>
          </div>
        </div>
      </div>
    </section>
  );
}