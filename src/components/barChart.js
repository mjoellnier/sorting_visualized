import React from "react";
import BarCreator from "./chartCreator";

const BarChart = props => {
  let series = [
    {
      name: "series-1",
      data: props.numbers
    }
  ];

  let options = {
    chart: {
      width: "100vw",
      toolbar: {
        show: false
      },
      tools: {
        download: false
      }
    },
    grid: {
      show: false
    },
    theme: {
      mode: "dark",
      palette: "palette1",
      monochrome: {
        enabled: false,
        color: "#255aee",
        shadeTo: "light",
        shadeIntensity: 0.65
      }
    },
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };

  return (
    <div id="chartWrapper">
      {/* <Chart options={options} series={series} type="bar" width="500" /> */}
      <BarCreator />
    </div>
  );
};

export default BarChart;
