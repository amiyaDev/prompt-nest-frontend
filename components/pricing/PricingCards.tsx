export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      {/* Free Plan */}
      <div className="bg-surface-container border border-outline-variant p-8 rounded-2xl flex flex-col">
        <div className="mb-8">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Free</span>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="font-h2 text-h2 text-white">$0</span>
            <span className="text-on-surface-variant font-body-sm text-body-sm">/forever</span>
          </div>
        </div>
        <ul className="space-y-4 mb-10 flex-1">
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">1,000 messages / mo</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">Standard model access</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">Basic context window</span>
          </li>
        </ul>
        <button className="w-full py-3 rounded-xl border border-outline-variant text-white font-label-md text-label-md hover:bg-surface-variant transition-colors">
          Current Plan
        </button>
      </div>

      {/* Pro Plan */}
      <div className="bg-surface-container border-2 border-primary p-8 rounded-2xl flex flex-col relative pro-glow">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
          Most Popular
        </div>
        <div className="mb-8">
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest">Pro</span>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="font-h2 text-h2 text-white">$20</span>
            <span className="text-on-surface-variant font-body-sm text-body-sm">/month</span>
          </div>
        </div>
        <ul className="space-y-4 mb-10 flex-1">
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">Unlimited messages</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">Nexus-4 Turbo access</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">128k context window</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">Priority processing</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">Beta features</span>
          </li>
        </ul>
        <button className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold hover:opacity-90 transition-opacity">
          Upgrade Now
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-surface-container border border-outline-variant p-8 rounded-2xl flex flex-col">
        <div className="mb-8">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Enterprise</span>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="font-h2 text-h2 text-white">Custom</span>
          </div>
        </div>
        <ul className="space-y-4 mb-10 flex-1">
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">Full API access</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">SSO &amp; Advanced Security</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">Custom model fine-tuning</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            <span className="text-on-surface font-body-sm text-body-sm">Dedicated account manager</span>
          </li>
        </ul>
        <button className="w-full py-3 rounded-xl bg-white text-black font-label-md text-label-md font-bold hover:bg-gray-200 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  );
}