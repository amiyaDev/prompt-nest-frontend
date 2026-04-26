export default function SubscriptionSection() {
  return (
    <section className="md:col-span-7 bg-surface-container rounded-xl p-8 border border-[#262626] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-indigo-500">workspace_premium</span>
          <h2 className="font-h3 text-h3 text-white">Subscription</h2>
        </div>
        <div className="p-6 rounded-xl bg-indigo-500/5 border border-indigo-500/20 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-white font-semibold">Pro Plan</p>
              <p className="text-on-surface-variant text-sm">$20 / month</p>
            </div>
            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded text-[10px] font-bold uppercase tracking-widest">Active</span>
          </div>
          <p className="text-body-sm text-on-surface-variant mb-4">Your next billing date is December 12, 2023.</p>
          <div className="w-full bg-[#262626] h-1.5 rounded-full overflow-hidden">
            <div className="bg-indigo-500 h-full w-[75%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-2 text-right">15,420 / 20,000 tokens used</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="flex-1 py-2 text-sm font-medium text-white bg-[#262626] rounded-lg hover:bg-[#323232] transition-colors">Manage Billing</button>
        <button className="flex-1 py-2 text-sm font-medium text-white border border-[#262626] rounded-lg hover:border-white transition-colors">Compare Plans</button>
      </div>
    </section>
  );
}