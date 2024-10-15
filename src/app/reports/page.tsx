import DashboardLayout from "@/app/dashboard/layout";
import TitleSection from "@/components/ui/titleSection";

export const metadata = {
  title: "Reports",
};

const ReportsPage = () => {
  return (
    <DashboardLayout>
      <TitleSection>Reports Content</TitleSection>
      <p>Your reports content goes here.</p>
    </DashboardLayout>
  );
};

export default ReportsPage;
