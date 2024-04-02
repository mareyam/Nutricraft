import { useFriends } from "@/hooks/friends";
import {
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import FriendsModal from "./FriendsModal";

const Friends = () => {
  const { data: friends, isLoading, isError } = useQuery("friends", useFriends);
  console.log(friends);
  const { onOpen, isOpen } = useDisclosure();

  return (
    <>
      <Text>Friends</Text>
      <Grid px="2" templateColumns="repeat(3, 1fr)" gap={4}>
        {friends?.slice(0, 6).map((item: any) => (
          <GridItem w="100%">
            <Image
              rounded="full"
              h="16"
              w="16"
              objectFit="cover"
              src={item.avatar}
            />
            <Text
              w="full"
              pl="4"
              textAlign="left"
              fontSize="12"
              color="gray.500"
            >
              {item.name.split(" ")[0].length > 8
                ? `${item.name.split(" ")[0].substring(0, 6)}...`
                : item.name.split(" ")[0]}
            </Text>
          </GridItem>
        ))}
      </Grid>
      <Button
        w="full"
        bg="transparent"
        border="1px solid purple"
        onClick={onOpen}
      >
        VIEW ALL
      </Button>
      {isOpen && <FriendsModal />}
    </>
  );
};

export default Friends;
