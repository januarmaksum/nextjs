import TitleSection from "@/components/ui/titleSection";
import CE_Chart_Bar from "./$element/client.chart.bar";
import CE_Chart_Column from "./$element/client.chart.column";
import CE_Chart_Donut from "./$element/client.chart.donut";
import CE_Chart_Line from "./$element/client.chart.line";

export const metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return (
    <>
      <TitleSection>Dashboard</TitleSection>
      <div className="grid grid-cols-1 gap-4">
        <CE_Chart_Column />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <CE_Chart_Donut />
        <CE_Chart_Bar />
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <CE_Chart_Line />
      </div>
    </>
  );
};

export default DashboardPage;
