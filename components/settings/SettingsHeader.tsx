export default function SettingsHeader() {
  return (
    <nav className="w-full h-16 sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#262626] flex justify-between items-center px-6">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold text-white">Prompt Nest</span>
        <div className="hidden md:flex items-center gap-6">
          <a className="text-gray-400 hover:text-white transition-opacity font-inter text-sm" href="#">Models</a>
          <a className="text-gray-400 hover:text-white transition-opacity font-inter text-sm" href="#">Documentation</a>
          <a className="text-gray-400 hover:text-white transition-opacity font-inter text-sm" href="#">API</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white transition-opacity">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="bg-primary text-on-primary px-4 py-1.5 rounded-lg text-sm font-medium hover:opacity-90 transition-all active:scale-95">
          Share
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#262626]">
          <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDycyOubze5oHcsYQ9SOZMvx2xFGM3DuGR2SYCdj-F-zYJUsOQo7kVbQ5Rbb14a8QlHaZ0QarVpYKmwH_iWAcNlhccaTZebyECRopjdN_guWiUfVf7T2xBqTic4WsqOn8owMlwcCl-ztRkc68qAXCrx6C-XYJVYwGIH-1UcI_jLXFSeKo9WWZ4uIZXmJgQhxsCOAEtQbzemHG4sJ6oLU6-dKn6hniVpZC3Dg4ur7MOGJSAa1cwj8_RsIJ6AAtnHSijUAtW4_VEhxyc" />
        </div>
      </div>
    </nav>
  );
}
