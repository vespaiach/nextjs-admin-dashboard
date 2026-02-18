"use client";

import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      shape: "circle",
    },
  },
  fill: {
    opacity: 1,
  },
};

export default function AcquisitionChannels() {
  const series = [
    {
      name: "Organic Search",
      data: [44, 55, 41, 67, 22, 43, 65],
    },
    {
      name: "Direct",
      data: [13, 23, 20, 8, 13, 27, 15],
    },
  ];

  return (
    <div className="dashboard-box col-span-12 p-8 xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-base-content">Acquisition Channels</h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select className="select select-bordered select-sm w-full bg-base-100">
              <option value="">This Week</option>
              <option value="">Last Week</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <div id="acquisitionChannels" className="-ml-5 -mb-9">
          <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
      </div>
    </div>
  );
}
