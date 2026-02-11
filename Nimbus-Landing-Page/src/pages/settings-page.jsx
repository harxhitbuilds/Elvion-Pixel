import { useState } from "react";
import { Wrapper } from "@/components/globals/wrapper";
import { Container } from "@/components/globals/container";
import { useAuthStore } from "@/stores/useAuthStore";
import { toast } from "sonner";
import SettingsSidebar from "@/components/settings-page/sidebar";
import SettingsSections from "@/components/settings-page/setting-section";
import SectionHeading from "@/components/globals/section-heading";

const Setting = () => {
  const { user, logout } = useAuthStore();

  const [settings, setSettings] = useState({
    profileVisibility: "public",
    showEmail: false,
    showLocation: true,
    emailNotifications: true,
    pushNotifications: true,
    travelAlerts: true,
    marketingEmails: false,
    weeklyDigest: true,
    dataCollection: true,
    locationTracking: false,
    analyticsOptIn: true,
    theme: "dark",
    language: "english",
    currency: "inr",
    units: "metric",
    soundEffects: true,
    autoSync: true,
    offlineMode: false,
  });

  const handleToggle = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
    toast.success("Setting updated successfully");
  };

  const handleSelectChange = (setting, value) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: value,
    }));
    toast.success("Setting updated successfully");
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  const handleDeleteAccount = () => {
    toast.error("Account deletion feature coming soon");
  };

  const handleExportData = () => {
    toast.success("Data export initiated. You'll receive an email shortly.");
  };

  return (
    <div className="min-h-screen w-full bg-background ml-34">
      <Wrapper className="pt-6">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div>
             <SectionHeading heading="Settings"/>
              <p className="text-muted-foreground font-robert-regular  mt-1">
                Manage your account and app preferences
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <SettingsSidebar />
            </div>
            <SettingsSections
              settings={settings}
              handleToggle={handleToggle}
              handleSelectChange={handleSelectChange}
              handleLogout={handleLogout}
              handleDeleteAccount={handleDeleteAccount}
              handleExportData={handleExportData}
            />
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Setting;
