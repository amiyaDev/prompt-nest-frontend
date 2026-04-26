export default function APIKeysSection() {
  return (
    <section className="md:col-span-12 bg-surface-container rounded-xl p-8 border border-[#262626]">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-indigo-500">key</span>
          <h2 className="font-h3 text-h3 text-white">API Keys</h2>
        </div>
        <button className="flex items-center gap-2 text-primary font-medium hover:text-white transition-colors">
          <span className="material-symbols-outlined text-sm">add</span>
          Create Key
        </button>
      </div>
      <div className="space-y-4">
        {/* Key Entry 1 */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-[#171717] border border-[#262626] group hover:border-indigo-500/30 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded bg-surface-container-high text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">terminal</span>
            </div>
            <div>
              <p className="text-white font-medium">Production Backend</p>
              <code className="font-code text-code text-indigo-400/70">nx_live_••••••••••••••••3a9d</code>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Created</p>
              <p className="text-white text-sm">Nov 12, 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-on-surface-variant hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-error transition-colors">
                <span className="material-symbols-outlined text-sm">delete</span>
              </button>
            </div>
          </div>
        </div>
        {/* Key Entry 2 */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-[#171717] border border-[#262626] group hover:border-indigo-500/30 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded bg-surface-container-high text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">biotech</span>
            </div>
            <div>
              <p className="text-white font-medium">Development Sandbox</p>
              <code className="font-code text-code text-indigo-400/70">nx_test_••••••••••••••••9f2b</code>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Created</p>
              <p className="text-white text-sm">Oct 28, 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-on-surface-variant hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-error transition-colors">
                <span className="material-symbols-outlined text-sm">delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 text-on-surface-variant text-sm">
        <span className="material-symbols-outlined text-sm">info</span>
        <p>API keys provide full access to your account resources. Do not share them.</p>
      </div>
    </section>
  );
}