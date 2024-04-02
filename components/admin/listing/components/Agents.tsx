import React from "react";
import {
  SimpleGrid,
  Box,
  Avatar,
  Text,
  VStack,
  HStack,
  Flex,
  CircularProgress,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useAgents } from "@/hooks/agents";
import { MdOutlineStarPurple500 } from "react-icons/md";

const PopularAgents = () => {
  const { data, isLoading, isError } = useQuery("agents", useAgents);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" h="100vh">
        <CircularProgress isIndeterminate color="purple.500" />
      </Flex>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <>
      <Text py="4" textAlign="left" w="full" color="black" fontWeight="500">
        Popular Agents
      </Text>
      <SimpleGrid columns={[2, null, 4]} spacing="40px" pos="relative" w="full">
        {data?.slice(0, 4).map(({ id, firstName, lastName }: any) => (
          <>
            <VStack
              boxShadow="7px 7px 26px -6px rgba(0,0,0,0.35)"
              bg="#F9F9F9"
              rounded="xl"
              w="full"
              alignItems="left"
              pos="relative"
              p="8"
              pt="12"
              lineHeight="1"
            >
              <Text fontWeight="500" fontSize="13" key={id}>
                {firstName} &nbsp;
                {lastName}
              </Text>
              <HStack>
                <IconButton
                  color="yellow.500"
                  mr="-6" pt='-1'
                  aria-label="rating-star"
                  variant="unstyled"
                  icon={<MdOutlineStarPurple500 size={18} />}
                />
                <Text color="#8595A6" fontWeight="500" fontSize="10">
                  4.3
                </Text>
                <Divider orientation="vertical" h="4" />
                <Text color="#8595A6" fontWeight="500" fontSize="10">
                  23 deals
                </Text>
              </HStack>
              <Avatar
                pos="absolute"
                top="-6"
                src="https://bit.ly/dan-abramov"
                size="lg"
              />
            </VStack>
          </>
        ))}
      </SimpleGrid>
    </>
  );
};

export default PopularAgents;
