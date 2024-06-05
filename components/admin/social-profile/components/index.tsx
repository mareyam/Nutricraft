import React from "react";
import { Box, Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import UserProfile from "@/common/User-Profile";
import Interest from "@/common/Interest";
import Friends from "@/common/Friends";
import Photos from "@/common/Photos";
import Status from "./Status";
import PostCard from "./PostCard";

const SocialProfile = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={12}>
      {/* First column */}
      <GridItem colSpan={3} w="full">
        <UserProfile />
        <Interest />
        <Friends />
        <Photos />
      </GridItem>

      {/* Second column */}
      <GridItem colSpan={6} rowSpan={3} w="full">
        <VStack w="full" gap="4">
          <Status />
          <PostCard />
          <PostCard />
        </VStack>

        {/* Content for the second column */}
      </GridItem>

      {/* Third column */}
      <GridItem colSpan={3} rowSpan={3}>
        <Box w="full">Card</Box>
      </GridItem>
    </Grid>
  );
};

export default SocialProfile;
