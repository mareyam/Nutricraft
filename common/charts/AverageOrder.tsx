import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Box, HStack } from "@chakra-ui/react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const MonthlyOrdersChart = () => {
  return (
    <HStack h="xs" w="full" pos="relative">
      <Box
        justifyContent="center"
        rounded="full"
        border="2px solid red"
        boxSize="52"
        alignItems="center"
        display="flex"
      >
        <Box
          justifyContent="center"
          rounded="full"
          border="2px solid red"
          boxSize="44"
          alignItems="center"
          display="flex"
        >
          <Box
            justifyContent="center"
            rounded="full"
            border="2px solid red"
            boxSize="36"
            alignItems="center"
            display="flex"
          >
            <Box
              justifyContent="center"
              rounded="full"
              border="10px solid purple"
              boxSize="28"
              alignItems="center"
              display="flex"
            ></Box>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
};

export default MonthlyOrdersChart;
