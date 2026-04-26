export default function SocialProof() {
  const logos = [
    { name: "Stripe", mark: "S" },
    { name: "Vercel", mark: "▲" },
    { name: "Notion", mark: "N" },
    { name: "Linear", mark: "L" },
    { name: "Github", mark: "G" },
  ];

  return (
    <section className="py-16 border-y border-neutral-900 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-neutral-600 font-bold mb-12">Trusted by Technical Teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo) => (
            <div key={logo.name} aria-label={`${logo.name} Logo`} className="flex h-8 min-w-16 items-center justify-center">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-white/80 text-[11px] font-black leading-none text-black shadow-sm">
                {logo.mark}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
