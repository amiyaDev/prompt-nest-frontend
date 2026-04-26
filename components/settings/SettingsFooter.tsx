export default function SettingsFooter() {
  return (
    <footer className="pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4 pb-12">
      <p className="text-on-surface-variant text-sm">© 2023 Prompt Nest Platform. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <a className="text-sm text-on-surface-variant hover:text-white" href="#">Privacy Policy</a>
        <a className="text-sm text-on-surface-variant hover:text-white" href="#">Terms of Service</a>
        <a className="text-sm text-on-surface-variant hover:text-white" href="#">Status</a>
      </div>
    </footer>
  );
}