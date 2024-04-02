import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { deals } from "@/data/listing/deals";

const ChartData = () => {
  const [chart, setChart] = useState({
    labels: deals?.map((data: any) => data.deals),
    datasets: [
      {
        label: "Daily logins",
        data: deals?.map((data: any) => data.queries),
        backgroundColor: [
          "rgba(76, 115, 255, 1)",
          "rgba(158, 198, 0, 1)",
          "white",
          "pink",
        ],
        borderColor: "gray",
        borderWidth: 1,
      },
    ],
  });

  return (
    <>
      <BarChart chartData={chart} />
    </>
  );
};

export default ChartData;

function BarChart({ chartData }: any) {
  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
