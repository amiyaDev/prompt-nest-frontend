import Link from "next/link";
import type { ReactNode } from "react";

type DashboardPage = "chat" | "pricing" | "settings";
type DashboardNavItem = "new-chat" | "history" | "analytics" | "settings";

type DashboardWrapperProps = {
  activePage: DashboardPage;
  activeItem?: DashboardNavItem;
  children: ReactNode;
  bottomSlot?: ReactNode;
  contentClassName?: string;
  footer?: ReactNode;
  innerClassName?: string;
};

const navItems: Array<{
  href: string;
  icon: string;
  id: DashboardNavItem;
  label: string;
}> = [
  { href: "/chat", icon: "add", id: "new-chat", label: "New Chat" },
  { href: "/chat", icon: "history", id: "history", label: "History" },
  { href: "/pricing", icon: "query_stats", id: "analytics", label: "Analytics" },
  { href: "/settings", icon: "settings", id: "settings", label: "Settings" },
];

export default function DashboardWrapper({
  activeItem,
  activePage,
  bottomSlot,
  children,
  contentClassName = "bg-surface-container-lowest",
  footer,
  innerClassName = "max-w-6xl mx-auto px-6 py-16",
}: DashboardWrapperProps) {
  const selectedItem = activeItem ?? getDefaultActiveItem(activePage);

  return (
    <div className="bg-background text-on-surface font-body-md h-screen overflow-hidden flex antialiased">
      <DashboardSidebar activeItem={selectedItem} />
      <main className="relative flex-1 flex flex-col min-w-0 bg-background overflow-hidden">
        <DashboardHeader />
        <div className={`flex-1 overflow-y-auto ${contentClassName}`}>
          <div className={innerClassName}>
            {children}
            {footer === undefined ? <DashboardFooter /> : footer}
          </div>
        </div>
        {bottomSlot}
      </main>
    </div>
  );
}

function getDefaultActiveItem(activePage: DashboardPage): DashboardNavItem {
  if (activePage === "pricing") {
    return "analytics";
  }

  return activePage === "settings" ? "settings" : "new-chat";
}

function DashboardHeader() {
  return (
    <header className="w-full h-16 sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#262626] flex justify-between items-center px-6 shadow-none">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-bold text-white font-h2">
          Prompt Nest
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#262626] hover:border-indigo-500/50 transition-all">
              <span className="text-xs font-semibold text-white">GPT-4 Turbo</span>
              <span className="material-symbols-outlined text-sm text-gray-500">expand_more</span>
            </div>
          </div>
          <Link className="text-indigo-400 font-semibold text-sm" href="/pricing">
            Models
          </Link>
          <a className="text-gray-400 hover:text-white transition-opacity text-sm" href="#">
            Documentation
          </a>
          <a className="text-gray-400 hover:text-white transition-opacity text-sm" href="#">
            API
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
          <span className="material-symbols-outlined text-sm">share</span>
          Share
        </button>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-white transition-colors" aria-label="Notifications">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors" aria-label="Account">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function DashboardSidebar({ activeItem }: { activeItem: DashboardNavItem }) {
  return (
    <aside className="hidden md:flex flex-col h-full py-6 bg-[#171717]/80 backdrop-blur-xl border-r border-[#262626] w-64 shrink-0 font-inter antialiased shadow-none">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
            bolt
          </span>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white tracking-tight">Prompt Nest</h2>
          <p className="text-[10px] text-indigo-400 font-bold tracking-widest uppercase">Pro Plan</p>
        </div>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = item.id === activeItem;

          return (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg active:scale-95 transition-colors duration-200 ${
                isActive
                  ? "text-white font-medium border-r-2 border-indigo-500 bg-indigo-500/10 rounded-l-lg"
                  : "text-gray-400 hover:text-gray-200 hover:bg-[#262626]"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto px-3 space-y-4">
        <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-4">
          <p className="text-xs text-indigo-300 mb-2">Unlock advanced models</p>
          <Link
            href="/pricing"
            className="block w-full bg-indigo-500 text-white text-xs font-semibold py-2 rounded-lg hover:bg-indigo-400 transition-colors text-center"
          >
            Upgrade to Plus
          </Link>
        </div>
        <div className="space-y-1">
          <a className="text-gray-400 hover:text-gray-200 hover:bg-[#262626] flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="text-sm">Help</span>
          </a>
          <a className="text-gray-400 hover:text-gray-200 hover:bg-[#262626] flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm">Logout</span>
          </a>
        </div>
        <div className="pt-4 mt-2 border-t border-[#262626] flex items-center gap-3 px-3">
          <img
            alt="User profile avatar"
            className="w-8 h-8 rounded-full border border-outline-variant"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBFSb4QWo8sqXX4Zg8X5CF6ZfmxWJZ0FEKQWmAkiBGVCGwyE0iXYuO8uBt4JULUt4huRO-wy4T2AWEGBL0aER2aUYfymiWfIOZlWQCzrIFYGoyh4zV5yAZE0sCLO8kaBQ7WjB77T4WGMB2TvwWUh-DkwLmlqsGtNmumKHexgQV8gA5CrPRLG1hEaQDch1OhPJCr1enRGGoUlmtC1XrBbw0ybmxKbYl6peQfB18Z_Lq0LHds6HDIe7tJMiM8Hi7ADfyET3MCLpiSgk"
          />
          <div className="overflow-hidden">
            <p className="text-sm text-white font-medium truncate">Alex Rivard</p>
            <p className="text-[10px] text-gray-500 truncate">alex@nexus.ai</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function DashboardFooter() {
  return (
    <footer className="mt-32 pt-12 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-white">Prompt Nest</span>
        <span className="text-on-surface-variant font-body-sm text-body-sm">&copy; 2026. All rights reserved.</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        <a className="text-on-surface-variant font-label-md text-label-md hover:text-white transition-colors" href="#">
          Privacy Policy
        </a>
        <a className="text-on-surface-variant font-label-md text-label-md hover:text-white transition-colors" href="#">
          Terms of Service
        </a>
        <a className="text-on-surface-variant font-label-md text-label-md hover:text-white transition-colors" href="#">
          Status
        </a>
      </div>
    </footer>
  );
}
