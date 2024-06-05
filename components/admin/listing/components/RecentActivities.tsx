import React from "react";
import { useQuery } from "react-query";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Box,
  VStack,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { useUsers } from "@/hooks/users";
import DealsClosedChart from "@/custom/DealsClosedChart.tsx";

const RecentActivities = () => {
  return (
    <Card w="2xl" h="xl">
      <CardHeader fontSize="18" fontWeight="500">
        Recent Activities
      </CardHeader>
      <CardBody justifyContent="space-between" h="full">
        <RevenueCard />
        <Customers />
      </CardBody>
    </Card>
  );
};

export default RecentActivities;

const RevenueCard = () => {
  return (
    <HStack
      justifyContent="space-between"
      px="4"
      rounded="xl"
      h="3xs"
      boxShadow="7px 7px 26px -6px rgba(0,0,0,0.2)"
      bg="#FFFFFF"
    >
      <VStack w="full" alignItems="left">
        <Text py="4" fontSize="18" fontWeight="600">
          Total Revenue
        </Text>
        <Box lineHeight="1.5">
          <Text fontSize="20" fontWeight="600">
            $216,759
          </Text>
          <Text fontSize="12" color="gray.600">
            YTD Revenue
          </Text>
        </Box>
      </VStack>
      <DealsClosedChart />
    </HStack>
  );
};

const Customers = () => {
  const { data: users, isLoading, isError } = useQuery("users", useUsers);
  console.log(users);
  return (
    <HStack
      justifyContent="space-between"
      rounded="xl"
      h="3xs"
      boxShadow="7px 7px 26px -6px rgba(0,0,0,0.2)"
      bg="#FFFFFF"
      mt="4"
    >
      <VStack w="full" alignItems="left" mx="6">
        <Text textAlign="left" py="4" fontSize="20" fontWeight="600">
          New Customers
        </Text>
        <HStack mx="4">
          {users?.slice(0, 4).map((item: any, index: number) => (
            <>
              <Avatar
                bg="#F5F7FA"
                pos="relative"
                marginLeft="-6"
                border="2px solid #F5F7FA"
                src={item.image}
                transition="all 0.5s ease"
                _hover={{
                  marginLeft: "0",
                  marginRight: "6",
                }}
                h="12"
                w="12"
              />
            </>
          ))}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            rounded="full"
            boxSize="12"
            border="2px solid #F5F7FA"
            flexDir="column"
            bg="#F5F7FA"
            marginLeft="-6"
            zIndex="1"
            fontSize="10"
          >
            +{users?.length - users?.slice(0, 4).length}
          </Box>
        </HStack>
      </VStack>
    </HStack>
  );
};
