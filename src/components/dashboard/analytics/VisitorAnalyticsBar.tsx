"use client";

import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  colors: ["#3C50E0"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 4,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: (val) => `${val} visitors`,
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
};

export default function VisitorAnalyticsBar() {
  const series = [
    {
      name: "Visitors",
      data: [
        168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212, 270, 190, 310, 115,
        90, 380, 112, 223, 292, 170, 290, 110, 115, 290, 380, 312,
      ],
    },
  ];

  return (
    <div className="dashboard-box col-span-12 px-5 pt-8 pb-5 xl:col-span-12">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex">
            <div className="w-full">
              <p className="text-xl font-bold text-base-content">
                Visitor analytics of last 30 days
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-44 justify-end">
          <div className="relative z-20 inline-block">
            <select className="select select-bordered select-sm w-full bg-base-100">
              <option value="">Last 30 days</option>
              <option value="">Last 90 days</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <div id="visitorAnalyticsBar" className="-ml-5">
          <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
      </div>
    </div>
  );
}
