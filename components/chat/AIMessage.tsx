interface AIMessageProps {
  message: string;
  codeBlock?: {
    language: string;
    code: string;
  };
}

export default function AIMessage({ message, codeBlock }: AIMessageProps) {
  return (
    <div className="flex flex-col items-start group">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-[14px] text-white" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
        </div>
        <span className="text-[10px] font-bold text-indigo-400 tracking-wider">PROMPT NEST</span>
      </div>
      <div className="relative pl-6 border-l border-indigo-500/30 space-y-4 max-w-[90%]">
        <p className="text-on-surface font-body-md">{message}</p>
        {codeBlock && (
          <div className="rounded-xl overflow-hidden border border-[#262626] bg-[#0A0A0A]">
            <div className="flex items-center justify-between px-4 py-2 bg-[#171717] border-b border-[#262626]">
              <span className="text-[11px] font-code text-gray-500">{codeBlock.language}</span>
              <button className="flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[14px]">content_copy</span>
                Copy
              </button>
            </div>
            <pre className="p-5 overflow-x-auto">
              <code className="font-code text-body-sm text-indigo-200">{codeBlock.code}</code>
            </pre>
          </div>
        )}
        <div className="flex items-center gap-4 pt-2">
          <button className="flex items-center gap-1 text-[11px] text-gray-500 hover:text-white">
            <span className="material-symbols-outlined text-[16px]">thumb_up</span>
          </button>
          <button className="flex items-center gap-1 text-[11px] text-gray-500 hover:text-white">
            <span className="material-symbols-outlined text-[16px]">thumb_down</span>
          </button>
          <button className="flex items-center gap-1 text-[11px] text-gray-500 hover:text-white">
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            Regenerate
          </button>
        </div>
      </div>
    </div>
  );
}