export default function Features() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-h2 text-h2 mb-4">Architected for Professional Performance</h2>
        <p className="text-neutral-500 font-body-md">Powerful defaults, infinite scalability.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
        {/* Multi-Model */}
        <div className="md:col-span-8 glass-surface rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-indigo-500">hub</span>
            </div>
            <h3 className="font-h3 text-h3 mb-2">Multi-Model Orchestration</h3>
            <p className="text-neutral-400 max-w-md">Toggle between GPT-4o, Claude 3.5 Sonnet, and Gemini Pro 1.5 in a single thread. Compare outputs in real-time.</p>
          </div>
          <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 opacity-10 group-hover:opacity-20 transition-all">
            <span className="material-symbols-outlined text-[200px]" style={{fontVariationSettings: "'wght' 200"}}>architecture</span>
          </div>
        </div>
        {/* Security */}
        <div className="md:col-span-4 bg-surface-container-high rounded-3xl p-8 border border-outline-variant flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-green-500">security</span>
          </div>
          <h3 className="font-h3 text-h3 mb-2 text-lg">Enterprise Security</h3>
          <p className="text-neutral-500 text-sm">SOC2 Type II compliant. Zero-data retention policies for sensitive workloads.</p>
        </div>
        {/* File Uploads */}
        <div className="md:col-span-4 bg-surface-container-high rounded-3xl p-8 border border-outline-variant flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-orange-500">upload_file</span>
          </div>
          <h3 className="font-h3 text-h3 mb-2 text-lg">Context Injection</h3>
          <p className="text-neutral-500 text-sm">Upload massive codebases or PDFs. RAG-as-a-service included out of the box.</p>
        </div>
        {/* Visuals */}
        <div className="md:col-span-8 glass-surface rounded-3xl overflow-hidden relative group">
          <img alt="Abstract digital visualization" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADXoKjUSH-L92b4AZhKyjn0IL75x0Nx0j9tE-qRzjEAOAygca8u2PYu0JxkME0wc60C1xowhfSYijdTi8jY9G77wUJi7PH9AHuTEjFYL-VAp2RX3FBOkQskSGt9tTSPXwDI01rMs3P71GZY3bq3CBo8O8NN38nuZ9CYldEEUs6TtS2r0IGW5ZlaXEAaa1rQickNt_4tjfsLDlbpZMRPl6Vs2dA9rHcUlzglpz7ud0vVL-mknZwOTakpK7f18mJdJRMY_EbmFsR2jc" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
            <h3 className="font-h3 text-h3 mb-2">Advanced Visualizations</h3>
            <p className="text-neutral-400 max-w-sm">Built-in support for Mermaid.js, LaTeX, and interactive charts directly in chat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
