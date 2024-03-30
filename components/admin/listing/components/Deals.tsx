import HorizontalLine from "@/common/HorizontalLine";
import DealsDoneData from "@/common/charts/DealsDoneData";
import DealsClosedChart from "@/custom/DealsClosedChart.tsx";
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
  Box,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import React from "react";
import { CiShoppingBasket } from "react-icons/ci";

const AllDeals = () => {
  return (
    <SimpleGrid columns={[1, 2, 2]} py="6" gap="40px" w="full">
      <CurrentDeal />
      <Card borderRadius="xl" boxShadow="0px 8px 10px -5px rgba(0,0,0,0.5)">
        <CardHeader>
          <Text fontSize="24" fontWeight="600">
            927 Deals Closed
          </Text>
          <HStack w="full" justifyContent="space-between">
            <Text fontSize="18" color="gray.600" fontWeight="600">
              This year
            </Text>
            <HStack>
              <Box w="2" h="2" bg="blue.200" rounded="full" />
              <Text fontSize="18" fontWeight="500" color="gray.600">
                Queries
              </Text>
              <Box w="2" h="2" bg="red.400" rounded="full" />
              <Text fontSize="18" fontWeight="500" color="gray.600">
                Closed Deals
              </Text>
            </HStack>
          </HStack>
        </CardHeader>
        <CardBody overflow="hidden">
          <DealsClosedChart />
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};
export default AllDeals;

const CurrentDeal = () => {
  return (
    <VStack
      bg="white"
      py="4"
      px="4"
      borderRadius="xl"
      boxShadow="0px 8px 10px -5px rgba(0,0,0,0.5)"
    >
      <Text fontWeight="600" w="full">
        Your current Plan
      </Text>
      <HorizontalLine width={{ base: "40", xl: "full" }} color="gray.200" />

      <SimpleGrid
        pt="4"
        columns={[1, 2, 2]}
        w="full"
        justifyContent="space-between"
      >
        <VStack alignItems="left">
          <Text fontSize="20" fontWeight="600">
            $19
            <Text as="span" fontSize="12" fontWeight="400">
              /month
            </Text>
          </Text>
          <Text>Team plan (4/5) Members</Text>
          <VStack lineHeight="1.25" alignItems="left" w="full">
            <Text fontSize="14"> &gt; 2k daily calls</Text>
            <Text fontSize="14"> &gt; 2k daily calls</Text>
            <Text fontSize="14"> &gt; 2k daily calls</Text>
          </VStack>
        </VStack>

        <VStack justifyContent="center" alignItems="center" display="flex">
          <IconButton
            display="flex"
            aria-label="shopping-basket"
            variant="unstyled"
            mb="2"
            icon={<CiShoppingBasket size="80" />}
          />
          <Text fontSize="12" textAlign="center" color="red">
            Expiring soon
          </Text>
          <Button mt="2" w="32" colorScheme="purple">
            RENEW NOW
          </Button>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};
