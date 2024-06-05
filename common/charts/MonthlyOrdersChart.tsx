import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { HStack } from "@chakra-ui/react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const MonthlyOrdersChart = () => {
  const Data = [
    { id: 1, month: "Jan", result: 14 },
    { id: 2, month: "Feb", result: 19 },
    { id: 3, month: "Mar", result: 12 },
    { id: 4, month: "Apr", result: 15 },
    { id: 5, month: "May", result: 15 },
    { id: 6, month: "Jun", result: 12 },
    { id: 7, month: "Jul", result: 17 },
    { id: 8, month: "Aug", result: 14 },
    { id: 9, month: "Sep", result: 17 },
    { id: 10, month: "Oct", result: 14 },
    { id: 11, month: "Nov", result: 12 },
    { id: 12, month: "Dec", result: 16 },
  ];

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: "Daily logins",
        data: Data.map((data) => data.result),
        backgroundColor: ["white"],
        borderColor: "#82CA9D",
        borderWidth: 2,
      },
    ],
  });

  return (
    <HStack h="xs" w="full" pos="relative">
      <BarChart chartData={chartData} />
    </HStack>
  );
};

export default MonthlyOrdersChart;

function BarChart({ chartData }: any) {
  return (
    <Line
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            grid: {
              display: false,
            },
          },
        },
        elements: {
          line: {
            borderWidth: 2, // You can adjust the line width if needed
            borderColor: "#82CA9D", // Border color
            backgroundColor: "transparent", // Remove background color
          },
        },
        interaction: {
          mode: "nearest", // Enable nearest point interaction
        },
      }}
    />
  );
}
