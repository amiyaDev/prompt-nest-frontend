export default function HowItWorks() {
  const steps = [
    {
      title: "Build a prompt flow",
      description:
        "Author prompts with reusable templates, version history, and context variables for consistent results across teams.",
      icon: "rocket_launch",
    },
    {
      title: "Inject context",
      description:
        "Upload documents, code, and knowledge bases so AI responses stay grounded in your proprietary data.",
      icon: "description",
    },
    {
      title: "Compare & deploy",
      description:
        "Run multiple models, review outputs side-by-side, then export or deploy the best-performing flow.",
      icon: "monitor",
    },
  ];

  return (
    <section id="workflow" className="py-28 px-6 bg-neutral-950/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300 font-semibold mb-4">
            How Prompt Nest works
          </p>
          <h2 className="font-h2 text-h2">A simple workflow for complex AI products</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto mt-4">
            From prompt creation to production, every step is visible, secure, and optimized for teams shipping AI-driven features.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="glass-surface rounded-3xl border border-white/10 p-8 shadow-2xl shadow-black/10"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="w-14 h-14 rounded-3xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-indigo-300 text-[28px]">
                  {step.icon}
                </span>
              </div>
              <h3 className="font-h3 text-xl text-white mb-3">{step.title}</h3>
              <p className="text-neutral-400 leading-7">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
