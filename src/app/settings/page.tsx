import DashboardLayout from "@/app/dashboard/layout";
import TitleSection from "@/components/ui/titleSection";

export const metadata = {
  title: "Settings",
};

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <TitleSection>Settings Content</TitleSection>
      <p>Your settings content goes here.</p>
    </DashboardLayout>
  );
};

export default SettingsPage;
