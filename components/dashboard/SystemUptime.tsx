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
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
  ];
  const Nutritionist = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
  ];

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(76, 115, 255, 1)",
          "rgba(158, 198, 0, 1)",
          "white",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [nutritionistData, setNutritionistData] = useState({
    labels: Nutritionist.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Nutritionist.map((data) => data.userGain),
        backgroundColor: ["rgba(76, 115, 255, 1)", "white"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <HStack w="full" pos="relative">
      <DoughnutChart chartData={chartData} />
      <DoughnutChartNutritionist chartData={nutritionistData} />
    </HStack>
  );
};

export default SystemUptime;

function DoughnutChart({ chartData }: any) {
  return (
    <Box>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </Box>
  );
}

function DoughnutChartNutritionist({ chartData }: any) {
  return (
    <Box boxSize="32">
      <HStack>
        <Doughnut
          data={chartData}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
        <Text
          pos="absolute"
          top="24"
          right="12"
          rounded="full"
          p="8"
          color="black"
          fontWeight="800"
        >
          +18% <br />{" "}
          <Text as="span" fontSize="12" color="gray.800" fontWeight="400">
            Daily clients
          </Text>
        </Text>
      </HStack>
    </Box>
  );
}
