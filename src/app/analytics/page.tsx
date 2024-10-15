import DashboardLayout from "@/app/dashboard/layout";
import TitleSection from "@/components/ui/titleSection";

export const metadata = {
  title: "Analytics",
};

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <TitleSection>Analytics Content</TitleSection>
      <p>Your analytics content goes here.</p>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
