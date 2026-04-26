export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="font-h2 text-h2 text-white mb-10 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-surface-container border border-outline-variant p-6 rounded-xl">
          <h4 className="font-h3 text-body-lg font-semibold text-white mb-2">Can I cancel my subscription anytime?</h4>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Yes, you can cancel your subscription at any time from your settings page. You will continue to have access to the Pro features until the end of your current billing period.
          </p>
        </div>
        <div className="bg-surface-container border border-outline-variant p-6 rounded-xl">
          <h4 className="font-h3 text-body-lg font-semibold text-white mb-2">Is there a limit on API requests?</h4>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Free and Pro plans have rate limits optimized for individual use. For high-volume production needs, our Enterprise plan offers customizable rate limits and dedicated infrastructure.
          </p>
        </div>
        <div className="bg-surface-container border border-outline-variant p-6 rounded-xl">
          <h4 className="font-h3 text-body-lg font-semibold text-white mb-2">How do you handle data privacy?</h4>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            We take privacy seriously. Pro and Free tier data is used to improve our models unless you opt-out. Enterprise tier data is strictly private and never used for training.
          </p>
        </div>
        <div className="bg-surface-container border border-outline-variant p-6 rounded-xl">
          <h4 className="font-h3 text-body-lg font-semibold text-white mb-2">What models are available on the Pro plan?</h4>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Pro users get early access to our latest models, including Nexus-4 Turbo and Nexus-Vision, with higher token limits and faster response speeds compared to the Free tier.
          </p>
        </div>
      </div>
    </section>
  );
}