export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800 shadow-2xl shadow-indigo-500/10">
      <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white tracking-tighter leading-none">
            Prompt Nest
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-indigo-500 font-semibold border-b-2 border-indigo-500 pb-1 font-sans text-sm tracking-tight leading-none" href="#features">Features</a>
          <a className="text-neutral-400 hover:text-white transition-colors font-sans text-sm font-medium tracking-tight leading-none" href="#workflow">How it Works</a>
          <a className="text-neutral-400 hover:text-white transition-colors font-sans text-sm font-medium tracking-tight leading-none" href="#pricing">Pricing</a>
          <a className="text-neutral-400 hover:text-white transition-colors font-sans text-sm font-medium tracking-tight leading-none" href="#enterprise">Enterprise</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-neutral-400 hover:text-white transition-all text-sm font-medium leading-none">Login</button>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold leading-none transition-all active:scale-95 duration-200">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
