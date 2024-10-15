import DashboardLayout from "@/app/dashboard/layout";

export const metadata = {
  title: "Analytics",
};

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Analytics Content</h1>
      <p>Your analytics content goes here.</p>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
