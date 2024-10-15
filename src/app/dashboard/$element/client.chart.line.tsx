"use client";

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const CE_Chart_Line = () => {
  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  return (
    <div className="bg-white p-4 rounded border">
      <h3 className="font-bold mb-2">Sales Over Time</h3>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
    </div>
  );
};

export default CE_Chart_Line;
