import SettingsHeader from './SettingsHeader';
import SettingsSidebar from './SettingsSidebar';
import ProfileSection from './ProfileSection';
import SubscriptionSection from './SubscriptionSection';
import AppearanceSection from './AppearanceSection';
import APIKeysSection from './APIKeysSection';
import SettingsFooter from './SettingsFooter';

export default function SettingsPage() {
  return (
    <div className="font-body-md text-on-surface antialiased">
      <SettingsHeader />
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        <SettingsSidebar />
        <main className="flex-1 overflow-y-auto bg-[#0A0A0A] p-8">
          <div className="max-w-4xl mx-auto space-y-12">
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
            <SettingsFooter />
          </div>
        </main>
      </div>
    </div>
  );
}