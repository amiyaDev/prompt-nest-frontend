export default function Hero() {
  return (
    <section id="hero" className="relative hero-gradient pt-28 pb-32 px-6 overflow-hidden" data-aos="fade-up">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-pulse -top-8 left-1/2 -translate-x-1/2" />
        <div className="hero-dot top-24 left-10" />
        <div className="hero-dot bottom-16 right-12" />
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
          <span className="text-xs uppercase tracking-[0.35em] text-indigo-300 font-semibold">
            v2.0 is now live
          </span>
        </div>
        <p className="text-sm uppercase tracking-[0.35em] text-indigo-300 font-semibold mb-4">
          One workspace for prompts, models, and production-ready AI
        </p>
        <h1 className="font-h1 text-h1 md:text-[72px] text-gradient mb-6 leading-tight">
          Build smarter AI workflows with prompt intelligence.
        </h1>
        <p className="typewriter mx-auto max-w-3xl text-body-lg text-neutral-300 mb-10">
          Design prompts. Inject documents. Compare model outputs. Ship AI faster.
        </p>
        <p className="mx-auto max-w-2xl text-neutral-400 text-lg leading-8 mb-12">
          Prompt Nest brings prompt engineering, multi-model orchestration, secure data context, and team governance together in a polished, high-performance interface.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24" data-aos="zoom-in">
          <button className="bg-white text-black px-8 py-4 rounded-3xl font-bold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/15 active:scale-[0.98]">
            Start Building for Free
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <button className="glass-surface px-8 py-4 rounded-3xl font-semibold hover:bg-white/10 transition-all">
            Request Enterprise Demo
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="glass-surface rounded-3xl p-5 border border-white/10 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 mb-3">Prompt Studio</p>
            <h3 className="font-semibold text-white">Author prompts with built-in templates</h3>
          </div>
          <div className="glass-surface rounded-3xl p-5 border border-white/10 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 mb-3">Data Context</p>
            <h3 className="font-semibold text-white">Upload files, notes and docs instantly</h3>
          </div>
          <div className="glass-surface rounded-3xl p-5 border border-white/10 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 mb-3">Model Comparison</p>
            <h3 className="font-semibold text-white">Compare GPT, Claude, Gemini in one thread</h3>
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto group" data-aos="fade-up" data-aos-delay="120">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative glass-surface rounded-[32px] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/8 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              <div className="mx-auto text-xs text-neutral-500 font-code">prompt-nest.ai/chat-session</div>
            </div>
            <div className="p-6 text-left flex flex-col gap-6 h-[420px]">
              <div className="flex gap-4 items-start max-w-[80%]">
                <div className="w-10 h-10 rounded-2xl bg-surface-container-highest flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-400">person</span>
                </div>
                <div className="bg-surface-container-high p-5 rounded-3xl rounded-tl-none text-body-sm text-neutral-300">
                  "Generate a security review for this smart contract and summarize the top 3 risks with mitigation steps."
                </div>
              </div>
              <div className="flex gap-4 items-start self-end max-w-[80%]">
                <div className="bg-indigo-600/20 border border-indigo-500/30 p-5 rounded-3xl rounded-tr-none text-body-sm text-indigo-100">
                  "Reviewed. I found a reentrancy edge case in withdraw() and recommended a guard pattern to preserve gas-efficient loops."
                </div>
                <div className="w-10 h-10 rounded-2xl bg-indigo-500 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                </div>
              </div>
              <div className="mt-auto flex items-center gap-3 p-4 bg-black/40 rounded-2xl border border-white/10">
                <span className="material-symbols-outlined text-neutral-500">attachment</span>
                <span className="text-neutral-400 text-sm">Ask anything or deploy a production prompt.</span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="px-2 py-1 rounded-2xl bg-white/5 text-[10px] text-neutral-500 font-code">CMD + K</span>
                  <span className="material-symbols-outlined text-indigo-400">send</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
