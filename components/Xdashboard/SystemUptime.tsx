import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { ChartOptions, ChartTypeRegistry } from "chart.js";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie, Line } from "react-chartjs-2";
Chart.register(CategoryScale);

const SystemUptime = () => {
  const Data = [
    { id: 1, month: "Jan", result: 2500 },
    { id: 2, month: "Feb", result: 3200 },
    { id: 3, month: "Mar", result: 1800 },
    { id: 4, month: "Apr", result: 4200 },
    { id: 5, month: "May", result: 3800 },
    { id: 6, month: "Jun", result: 2900 },
    { id: 7, month: "Jul", result: 4700 },
    { id: 8, month: "Aug", result: 1400 },
    { id: 9, month: "Sep", result: 2700 },
    { id: 10, month: "Oct", result: 4800 },
    { id: 11, month: "Nov", result: 3900 },
    { id: 12, month: "Dec", result: 5000 },
  ];

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: "Daily logins",
        data: Data.map((data) => data.result),
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
    <HStack w="full" pos="relative">
      <BarChart chartData={chartData} />
    </HStack>
  );
};

export default SystemUptime;

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
