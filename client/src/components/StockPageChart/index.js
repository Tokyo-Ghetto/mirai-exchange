import React from "react";
import { Line, defaults } from "react-chartjs-2";

defaults.plugins.legend = false;

const StockPageChart = (time, data) => {
  return (
    <>
      <Line
        data={{
          labels: time,
          datasets: [
            {
              data: data,
              //   backgroundColor: ["black"],
            },
          ],
        }}
        height={200}
        width={300}
        options={{
          maintainAspectRatio: false,
          borderColor: "black",
          pointRadius: "0",
          hoverPointRadius: "5",
          pointHoverBackgroundColor: "white",
          pointHoverBorderColor: "black",
          pointHoverBorderWidth: "4",
          plugins: {
            tooltip: {
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "nearest",
              displayColors: false,
              titleAlign: "center",
              bodyAlign: "center",
              padding: "5",
              bodyFont: {
                family: "'Encode Sans Expanded', sans-serif",
                weight: 'bold',
                size: '14px'
              },
              titleFont: {
                family: "'Encode Sans Expanded', sans-serif",
                weight: 'normal'
              },
            },
            // legend: {
            //     labels: {
            //         font: {
            //             family: "'Comic Sans', sans-serif",
            //         }
            //     }
            // }
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },

              ticks: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </>
  );
};
export default StockPageChart;
