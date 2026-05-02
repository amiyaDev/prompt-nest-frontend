export default function Features() {
  return (
    <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20" data-aos="fade-up">
        <p className="text-sm uppercase tracking-[0.35em] text-indigo-300 font-semibold mb-4">Built for teams and technical workflows</p>
        <h2 className="font-h2 text-h2 mb-4">Architected for powerful prompt engineering</h2>
        <p className="text-neutral-500 font-body-md max-w-2xl mx-auto">
          Everything you need to build, evaluate, and ship AI experiences with confidence. Prompt Nest is designed for reliability, speed, and clarity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
        <div className="md:col-span-8 glass-surface rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative" data-aos="fade-right">
          <div>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-indigo-500">hub</span>
            </div>
            <h3 className="font-h3 text-h3 mb-3">Multi-Model Orchestration</h3>
            <p className="text-neutral-400 max-w-lg">
              Compare GPT-4o, Claude, Gemini, and custom models in one thread with contextual prompt history and real-time output scoring.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 opacity-10 transition-all">
            <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'wght' 200" }}>architecture</span>
          </div>
        </div>
        <div className="md:col-span-4 glass-surface rounded-3xl p-8 border border-outline-variant flex flex-col justify-between" data-aos="fade-left">
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-green-500">security</span>
            </div>
            <h3 className="font-h3 text-h3 mb-3">Enterprise Security</h3>
            <p className="text-neutral-500 text-sm">
              SOC2-ready controls, encrypted storage, private team workspaces, and role-based access that keep AI workflows safe.
            </p>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
              <span className="h-2 w-2 rounded-full bg-green-400" /> Live compliance
            </span>
          </div>
        </div>
        <div className="md:col-span-4 glass-surface rounded-3xl p-8 border border-outline-variant flex flex-col justify-between" data-aos="fade-up">
          <div>
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-orange-500">upload_file</span>
            </div>
            <h3 className="font-h3 text-h3 mb-3">Context Injection</h3>
            <p className="text-neutral-500 text-sm">
              Upload documents, code, sheets, and presentations to enrich prompts with vector search and recall-aware AI reasoning.
            </p>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
              <span className="h-2 w-2 rounded-full bg-orange-400" /> Instant search
            </span>
          </div>
        </div>
        <div className="md:col-span-8 glass-surface rounded-3xl overflow-hidden relative group" data-aos="fade-up">
          <img
            alt="Abstract digital visualization"
            className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
            <h3 className="font-h3 text-h3 mb-2">Data-driven visual insights</h3>
            <p className="text-neutral-400 max-w-sm">
              Built-in support for Mermaid diagrams, interactive charts, and prompt evaluation dashboards directly in the workspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
