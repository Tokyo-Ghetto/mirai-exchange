import React, { useState } from "react";
import { Line, defaults } from "react-chartjs-2";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../themes";

defaults.plugins.legend = false;

const StockPageChartDark = (time, data) => {
  // const [theme, setTheme] = useState("light");

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
          borderColor: "white",
          pointRadius: "0",
          hoverPointRadius: "5",
          pointHoverBackgroundColor: "black",
          pointHoverBorderColor: "white",
          pointHoverBorderWidth: "4",
          plugins: {
            tooltip: {
              backgroundColor: "rgba(255,255,255,0.5)",
              position: "nearest",
              displayColors: false,
              titleAlign: "center",
              bodyAlign: "center",
              padding: "5",
              bodyFont: {
                family: "'Encode Sans Expanded', sans-serif",
                weight: "bold",
                size: "14px",
              },
              titleFont: {
                family: "'Encode Sans Expanded', sans-serif",
                weight: "normal",
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
                display: true,
              },
            },
          },
        }}
      />
    </>
  );
};
export default StockPageChartDark;
