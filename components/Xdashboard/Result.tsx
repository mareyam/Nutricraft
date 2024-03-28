import { HStack, IconButton, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IoMailOutline } from "react-icons/io5";

const Result = () => {
  return (
    <SimpleGrid
      columns={[2, null, 4]}
      spacing="12"
      w="80dvw"
      h="full"
      pt="8"
      bgGradient="linear(to-r, blue.200,  purple.400)"
    >
      <ResultChild
        icon={<IoMailOutline />}
        title="Total Nutritionist"
        number="345"
      />
      <ResultChild
        icon={<IoMailOutline />}
        title="Total Revenue"
        number="37193.00"
      />
      <ResultChild
        icon={<IoMailOutline />}
        title="Total Clients"
        number="1349"
      />
      <ResultChild
        icon={<IoMailOutline />}
        title="Total Appointements"
        number="3500"
      />
    </SimpleGrid>
  );
};

export default Result;

type ResultsProps = {
  icon: any; //temporary
  title: string;
  price?: string;
  number?: string;
};
const ResultChild = ({ icon, title, price, number }: ResultsProps) => {
  return (
    <VStack
      backdropFilter="blur(100px)"
      bg="rgba(255, 255, 255, 0.5)"
      p="8"
      rounded="lg"
      alignItems="left"
      lineHeight={1}
    >
      {icon && (
        <IconButton
          aria-label="update social profile"
          variant="unstyled"
          icon={icon}
          rounded="xl"
          color="black"
          bg="white"
          w="8"
          display="flex"
        />
      )}

      <Text color="gray.600">{title}</Text>
      <Text fontWeight={700} fontSize="20">
        {number}
      </Text>
    </VStack>
  );
};
