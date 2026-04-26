export default function ChatInput() {
  return (
    <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-background via-background/95 to-transparent">
      <div className="max-w-3xl mx-auto relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
        <div className="relative bg-[#171717] border border-[#262626] rounded-2xl p-2 shadow-2xl">
          <div className="flex items-end gap-2">
            <button className="p-3 text-gray-400 hover:text-white hover:bg-[#262626] rounded-xl transition-all">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <textarea
              className="flex-1 bg-transparent border-none focus:ring-0 text-white py-3 resize-none max-h-48 font-body-md placeholder-gray-500"
              placeholder="Message Nexus AI..."
              rows={1}
            />
            <div className="flex items-center gap-2 p-1.5">
              <button className="p-3 text-gray-400 hover:text-white hover:bg-[#262626] rounded-xl transition-all">
                <span className="material-symbols-outlined">mic</span>
              </button>
              <button className="bg-white text-black p-3 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/5">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>send</span>
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-[10px] text-gray-600 mt-3 font-medium uppercase tracking-[0.2em]">PROMPT NEST CAN MAKE MISTAKES. VERIFY IMPORTANT INFORMATION.</p>
      </div>
    </div>
  );
}