"use client";
import {
  Box,
  Flex,
  IconButton,
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
import { Message } from "@/typings";
import postMessage from "@/lib/postMessage";
import { useToast } from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<Message>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!formData.firstName || !formData.phone || !formData.message) {
        setLoading(false);
        toast({
          title: "Invalid Credentials",
          description: "Please enter all the required fields",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else if (formData.phone.length < 10) {
        setLoading(false);
        toast({
          title: "Invalid Credentials",
          description: "Please enter valid mobile number",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        setLoading(true);
        postMessage(formData, setFormData, toast, setLoading);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onOpenClick = () => {
    setOpen(!open);
  };

  const onCloseClick = () => {
    setOpen(false);
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
            className="bg-gradient-to-b from-[#297d05] to-[#6ebf4b]  hover:from-[#6ebf4b] hover:to-[#297d05] transition-all duration-200 ease-in-out lg:text-sm text-xs lg:w-36 w-fit px-3 lg:px-0 rounded-md text-buttonColor lg:py-2 py-1 font-semibold  block "
          >
            BOOK A DEMO
          </button>
        </Stack>

        <Modal
          isOpen={open}
          onClose={onCloseClick}
          isCentered
          size={{ base: "sm", lg: "4xl" }}
        >
          <ModalOverlay>
            <ModalContent>
              <ModalHeader px={10}>Book a Demo</ModalHeader>
              <ModalCloseButton />
              <ModalBody px={10}>
                <form onSubmit={handleSubmit}>
                  <SimpleGrid w="full" columns={{ base: 1, lg: 2 }} gap={5}>
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type={"text"}
                        name="firstName"
                        onChange={handleInputChange}
                        value={formData.firstName}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type={"text"}
                        name="lastName"
                        onChange={handleInputChange}
                        value={formData.lastName}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type={"email"}
                        name="email"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Mobile No.</FormLabel>
                      <Input
                        type={"text"}
                        name="phone"
                        onChange={handleInputChange}
                        value={formData.phone}
                        rounded="lg"
                        maxLength={15}
                      />
                    </FormControl>
                  </SimpleGrid>
                  <FormControl isRequired mt="5">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      noOfLines={3}
                      name="message"
                      onChange={handleInputChange}
                      value={formData.message}
                    ></Textarea>
                  </FormControl>
                  <button
                    className="w-full px-4 py-2 mt-5 mb-10 font-semibold rounded-md lg:w-fit bg-whatsNew text-buttonColor"
                    type="submit"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
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
