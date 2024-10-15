import DashboardLayout from "@/app/dashboard/layout";

export const metadata = {
  title: "Settings",
};

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Settings Content</h1>
      <p>Your settings content goes here.</p>
    </DashboardLayout>
  );
};

export default SettingsPage;
