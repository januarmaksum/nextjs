import DashboardLayout from "@/app/dashboard/layout";

export const metadata = {
  title: "Reports",
};

const ReportsPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Reports Content</h1>
      <p>Your reports content goes here.</p>
    </DashboardLayout>
  );
};

export default ReportsPage;
