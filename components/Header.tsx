"use client";
import {
  Box,
  Flex,
  IconButton,
  Collapse,
  Image,
  useColorModeValue,
  useDisclosure,
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
    <Box
      width="100%"
      as="header"
      position={"fixed"}
      zIndex={50}
      // borderBottom={1}
      // borderStyle={"solid"}
      // borderColor={useColorModeValue("gray.200", "gray.900")}
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        width={"100%"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "start", md: "space-between" }}
          align={"center"}
        >
          <Box ml={{ base: 0, lg: 20 }}>
            <Link href="/">
              <Image src="/logo.jpg" alt="logo" h={{ lg: "20", base: "14" }} />
            </Link>
          </Box>

          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            mr={{ lg: "12" }}
          >
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 0, md: "auto" }}
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
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;
