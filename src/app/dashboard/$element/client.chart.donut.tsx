"use client";

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const CE_Chart_Donut = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: [
      "Clothing",
      "Food Products",
      "Electronics",
      "Kitchen Utility",
      "Gardening",
    ],
    colors: ["#00BFFF", "#FF6347", "#FFA500", "#32CD32", "#8A2BE2"],
    responsive: [
      {
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartSeries = [44, 55, 13, 43, 22];

  return (
    <div className="bg-white p-4 rounded border">
      <h3 className="font-bold mb-2">Department Sales</h3>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        height={250}
      />
    </div>
  );
};

export default CE_Chart_Donut;
