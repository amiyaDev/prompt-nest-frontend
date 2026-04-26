export default function AuthHeader() {
  return (
    <header className="w-full h-16 flex items-center px-6 sticky top-0 z-50 bg-transparent">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-xl">blur_on</span>
        </div>
        <span className="font-h2 text-body-lg text-white font-bold tracking-tight">Prompt Nest</span>
      </div>
    </header>
  );
}