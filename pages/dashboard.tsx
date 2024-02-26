import ClientResult from "@/components/dashboard/ClientResult";
import DailyLogins from "@/components/dashboard/DailyLogins";
import NutritionistResult from "@/components/dashboard/NutritionistResult";
import SystemUptime from "@/components/dashboard/SystemUptime";
import Result from "@/components/dashboard/Result";
import SideBar from "@/components/side-bar";
import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <HStack w="full" alignItems="flex-start" h="full">
      <SideBar />
      <VStack>
        <Result />
        <HStack w="full">
          <ClientResult />
          <NutritionistResult />
        </HStack>
        <HStack w="full">
          <DailyLogins />
          <SystemUptime />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Dashboard;
