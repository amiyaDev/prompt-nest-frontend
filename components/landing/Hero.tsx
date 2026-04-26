export default function Hero() {
  return (
    <section className="relative hero-gradient pt-24 pb-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-label-md font-label-md text-primary tracking-wider uppercase">
            v2.0 is now live
          </span>
        </div>
     <h1 className="font-h1 text-h1 md:text-[72px] text-gradient mb-8 leading-none">The Next Frontier of Intelligence</h1>
<p className="font-body-lg text-body-lg text-neutral-400 max-w-2xl mx-auto mb-12">
                    A unified workspace for engineers and innovators. Orchestrate multiple LLMs, process massive datasets, and deploy enterprise-grade AI in minutes.
                </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
            Start Building for Free
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
          <button className="glass-surface px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all">
            Request Enterprise Demo
          </button>
        </div>
        {/* Glassmorphic Chat Preview */}
        <div className="relative max-w-4xl mx-auto group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative glass-surface rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="mx-auto text-xs text-neutral-500 font-code">
                nexus-ai-interface-v2.ts
              </div>
            </div>
            <div className="p-6 text-left flex flex-col gap-6 h-[400px]">
              <div className="flex gap-4 items-start max-w-[80%]">
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-400 text-sm">
                    person
                  </span>
                </div>
                <div className="bg-surface-container-high p-4 rounded-2xl rounded-tl-none text-body-sm text-neutral-300">
                  Analyze the security implications of this smart contract and
                  optimize the gas usage.
                </div>
              </div>
              <div className="flex gap-4 items-start self-end max-w-[80%]">
                <div className="bg-indigo-600/20 border border-indigo-500/30 p-4 rounded-2xl rounded-tr-none text-body-sm text-indigo-100">
                  I&apos;ve audited the contract. Found a potential reentrancy
                  vulnerability in the{" "}
                  <code className="bg-black/30 px-1 rounded">withdraw()</code>{" "}
                  function. I suggest implementing an OpenZeppelin
                  ReentrancyGuard. Gas optimization applied to loops reducing
                  costs by 14%.
                </div>
                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-white text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bolt
                  </span>
                </div>
              </div>
              <div className="mt-auto flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-white/5">
                <span className="material-symbols-outlined text-neutral-500">
                  attachment
                </span>
                <span className="text-neutral-500 text-sm">
                  Type your command here...
                </span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-white/5 text-[10px] text-neutral-500 font-code">
                    CMD + K
                  </span>
                  <span className="material-symbols-outlined text-indigo-500">
                    send
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
