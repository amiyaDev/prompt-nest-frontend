export default function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto glass-surface rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <h2 className="font-h1 text-h1 mb-6">Ready to upgrade your workflow?</h2>
        <p className="text-neutral-400 mb-10 text-lg">Join 50,000+ developers building the future on Prompt Nest.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-indigo-500/20 active:scale-95">
            Create Free Account
          </button>
          <button className="border border-neutral-700 hover:border-neutral-500 px-10 py-4 rounded-xl font-semibold transition-all">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
