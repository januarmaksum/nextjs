"use client";

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const CE_Chart_Bar = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
    colors: ["#008FFB"],
    tooltip: {
      x: {
        show: true,
      },
    },
  };

  const chartSeries = [
    {
      name: "GDP",
      data: [450, 470, 540, 580, 610, 640, 670, 700, 800, 1500],
    },
  ];

  return (
    <div className="bg-white p-4 rounded border">
      <h3 className="font-bold">Country GDP</h3>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default CE_Chart_Bar;
