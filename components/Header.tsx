"use client";
import {
  Text,
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Image,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import DesktopNav from "./DesktopNav";
// @ts-ignore
import MobileNav from "./MobileNav";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);

  const onOpenClick = () => {
    setOpen(!open);
  };

  return (
    <Box width="100%" as="header" position={"fixed"} zIndex={50}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-between" }}
          align={"center"}
        >
          {/* <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text> */}

          <Box>
            <Link href="/">
              <Image src="/logo.jpg" alt="logo" h={10} />
            </Link>
          </Box>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          ml={6}
        >
          <button
            onClick={onOpenClick}
            className="bg-button1 hover:bg-button2 text-sm w-36 rounded-md text-buttonColor py-1 hidden lg:block "
          >
            REQUEST DEMO
          </button>
        </Stack>
        <Modal isOpen={open} onClose={onClose} isCentered size={"4xl"}>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>Book Demo</ModalHeader>
              <ModalCloseButton />
              <ModalBody px={10}>
                <SimpleGrid w="full" columns={2} gap={5}>
                  <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input type={"text"} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input type={"text"} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type={"text"} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mobile No.</FormLabel>
                    <Input type={"text"} variant="outline" rounded={"2xl"} />
                  </FormControl>
                </SimpleGrid>
                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea noOfLines={3}></Textarea>
                </FormControl>
                <button className="mt-5 mb-10 w-fit px-4 py-2 bg-whatsNew rounded-md text-buttonColor font-semibold">
                  Submit
                </button>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;
