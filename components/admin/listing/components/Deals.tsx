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
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { CiShoppingBasket } from "react-icons/ci";

const AllDeals = () => {
  return (
    <SimpleGrid columns={[1, 2, 2]} py="6" gap="40px" w="full">
      <CurrentDeal />
      <ClosedDealsCard />
    </SimpleGrid>
  );
};
export default AllDeals;

const CurrentDeal = () => {
  return (
    <Card p="2" borderRadius="xl" boxShadow="0px 8px 10px -5px rgba(0,0,0,0.5)">
      <CardBody>
        <Text fontWeight="500" pb="2" w="full">
          Your current plan
        </Text>
        <Divider />
        <SimpleGrid
          pt="4"
          columns={[1, 2, 2]}
          w="full"
          justifyContent="space-between"
        >
          <VStack alignItems="left">
            <Text fontSize="22" fontWeight="500">
              $19
              <Text as="span" fontSize="12" fontWeight="500">
                /month
              </Text>
            </Text>
            <Text color="#8595A6" fontSize="14" fontWeight="500">
              Team plan (4/5) Members
            </Text>
            <VStack lineHeight="1.25" alignItems="left" w="full">
              <Text fontWeight="500" fontSize="14">
                {" "}
                &gt; 2k daily calls
              </Text>
              <Text fontWeight="500" fontSize="14">
                {" "}
                &gt; 2k daily calls
              </Text>
              <Text fontWeight="500" fontSize="14">
                {" "}
                &gt; 2k daily calls
              </Text>
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
            <Button
              mt="2"
              w="32"
              fontSize="14"
              fontWeight="500"
              colorScheme="purple"
            >
              RENEW NOW
            </Button>
          </VStack>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};

const ClosedDealsCard = () => {
  return (
    <Card borderRadius="xl" boxShadow="0px 8px 10px -5px rgba(0,0,0,0.5)">
      <CardHeader>
        <Text fontSize="16" fontWeight="400">
          927 Deals Closed
        </Text>
        <HStack w="full" justifyContent="space-between">
          <Text fontSize="12" color="gray.400" fontWeight="500">
            This year
          </Text>
          <HStack>
            <Box w="2" h="2" bg="blue.400" rounded="full" />
            <Text fontSize="12" fontWeight="500" color="gray.500">
              Queries
            </Text>
            <Box w="2" h="2" bg="red.500" rounded="full" />
            <Text fontSize="12" fontWeight="500" color="gray.500">
              Closed Deals
            </Text>
          </HStack>
        </HStack>
      </CardHeader>
      <CardBody overflow="hidden">
        <DealsClosedChart />
      </CardBody>
    </Card>
  );
};
