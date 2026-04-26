export default function ProfileSection() {
  return (
    <section className="md:col-span-12 bg-surface-container rounded-xl p-8 border border-[#262626]">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="font-h2 text-h2 text-white mb-1">Profile</h2>
          <p className="text-on-surface-variant font-body-sm">Update your personal information and avatar.</p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all">Save Changes</button>
      </div>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#262626] group-hover:ring-indigo-500/50 transition-all">
            <img alt="Alexander Wright avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy8zib3cTh3htHUbeq8cgfhqQ-owRqH1LM6rWN3Y37Jum_m4-z_MWudBri1L1fNXfwieXvqfhLMlI3E2Sw9NOjFcOWt4yuMPwfRzf6DULBRAMdgPyke3I-I-CqPjLPHgNDlUr2Vh-fH5nAru0uDDQy5ixfx63HZpg0zZN6sg_coU6Q4CrpisCI64W8cbulESDOVUJvH61L9yBXKjdDI7ITYlHtErqn5W3o_ruApVGqTHw9tlXhRm4mUKJ4xv0tCDiX64wMzorUfrw" />
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-surface-container-high rounded-full border border-[#262626] hover:text-indigo-400 transition-colors">
            <span className="material-symbols-outlined text-sm">edit</span>
          </button>
        </div>
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Full Name</label>
            <input className="w-full bg-[#171717] border border-[#262626] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" type="text" defaultValue="Alexander Wright" />
          </div>
          <div className="space-y-2">
            <label className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Email Address</label>
            <input className="w-full bg-[#171717] border border-[#262626] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" type="email" defaultValue="alexander.w@nexus-ai.com" />
          </div>
        </div>
      </div>
    </section>
  );
}
