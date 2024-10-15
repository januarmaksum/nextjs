import dynamic from "next/dynamic";
import TitleSection from "@/components/ui/titleSection";

const CE_Chart_Bar = dynamic(() => import('./$element/client.chart.bar'), { ssr: false });
const CE_Chart_Column = dynamic(() => import('./$element/client.chart.column'), { ssr: false });
const CE_Chart_Donut = dynamic(() => import('./$element/client.chart.donut'), { ssr: false });
const CE_Chart_Line = dynamic(() => import('./$element/client.chart.line'), { ssr: false });

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
