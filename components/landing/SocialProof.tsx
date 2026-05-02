export default function SocialProof() {
  const logos = [
    { name: "Stripe", mark: "S" },
    { name: "Vercel", mark: "▲" },
    { name: "Notion", mark: "N" },
    { name: "Linear", mark: "L" },
    { name: "Github", mark: "G" },
  ];

  return (
    <section className="py-16 border-y border-neutral-900 bg-neutral-950/50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-indigo-300 font-semibold mb-12">
          Trusted by technical teams and AI-first product groups
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} aria-label={`${logo.name} Logo`} className="flex h-10 min-w-[56px] items-center justify-center rounded-2xl bg-white/5 backdrop-blur-sm px-3 py-2 shadow-sm border border-white/10">
              <span className="text-[12px] font-semibold text-neutral-200 tracking-[0.15em]">{logo.mark}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
