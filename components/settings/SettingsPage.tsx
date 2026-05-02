import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import ProfileSection from "./ProfileSection";
import SubscriptionSection from "./SubscriptionSection";
import AppearanceSection from "./AppearanceSection";
import APIKeysSection from "./APIKeysSection";

export default function SettingsPage() {
  return (
    <DashboardWrapper
      activePage="settings"
      contentClassName="bg-[#0A0A0A]"
      innerClassName="max-w-4xl mx-auto space-y-12 p-8"
    >
      <header>
        <h1 className="font-h1 text-h1 text-white mb-2">Settings</h1>
        <p className="font-body-md text-on-surface-variant">Manage your account settings and preferences.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <ProfileSection />
        <SubscriptionSection />
        <AppearanceSection />
        <APIKeysSection />
      </div>
    </DashboardWrapper>
  );
}
