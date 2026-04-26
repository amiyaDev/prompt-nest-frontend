export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <span className="text-lg font-black text-white">Prompt Nest</span>
          <p className="text-neutral-600 text-xs tracking-wide">© 2024 Prompt Nest. Built for the future of intelligence.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-indigo-400 transition-colors duration-300" href="#">Privacy</a>
          <a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-indigo-400 transition-colors duration-300" href="#">Terms</a>
          <a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-indigo-400 transition-colors duration-300" href="#">Github</a>
          <a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-indigo-400 transition-colors duration-300" href="#">Documentation</a>
          <a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-indigo-400 transition-colors duration-300" href="#">Status</a>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-neutral-600 hover:text-white cursor-pointer transition-colors">language</span>
          <span className="material-symbols-outlined text-neutral-600 hover:text-white cursor-pointer transition-colors">rss_feed</span>
        </div>
      </div>
    </footer>
  );
}
