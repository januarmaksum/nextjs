"use client";

import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const CE_Chart_Column = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ["#008FFB", "#00E396", "#FEB019"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      offsetY: 0,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val}k`,
      },
    },
  };

  const chartSeries = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  return (
    <div className="bg-white p-4 rounded border">
      <h3 className="font-bold">Financial Metrics</h3>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default CE_Chart_Column;
