export default function PricingFooter() {
  return (
    <footer className="mt-32 pt-12 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-white">Prompt Nest</span>
        <span className="text-on-surface-variant font-body-sm text-body-sm">© 2024. All rights reserved.</span>
      </div>
      <div className="flex gap-8">
        <a className="text-on-surface-variant font-label-md text-label-md hover:text-white transition-colors" href="#">Privacy Policy</a>
        <a className="text-on-surface-variant font-label-md text-label-md hover:text-white transition-colors" href="#">Terms of Service</a>
        <a className="text-on-surface-variant font-label-md text-label-md hover:text-white transition-colors" href="#">Security</a>
      </div>
    </footer>
  );
}