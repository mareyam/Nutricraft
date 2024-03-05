import React from "react";
import {
  Button,
  HStack,
  IconButton,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { SiAnydesk } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import DrawerElements from "./DrawerElements";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
const NavbarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button border="2px solid red" colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody overflow="scroll" className="hide-scroll">
            <VStack w="xs">
              <HStack justifyContent="space-between" w="full">
                <HStack>
                  <IconButton
                    bg="none"
                    variant="unstyled"
                    aria-label="website-logo"
                    icon={<SiAnydesk size={20} />}
                    p="none"
                    mr="-4"
                  />
                  <Text color="gray" fontSize="20">
                    jumbo
                  </Text>
                </HStack>
                <IconButton
                  icon={<RxHamburgerMenu size={20} />}
                  aria-label="hamburger-opened"
                  p="none"
                  rounded="full"
                  variant="unstyled"
                  onClick={onClose}
                />
              </HStack>
              <DrawerElements />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
