"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";
import { Message } from "@/typings";
import postMessage from "@/lib/postMessage";
import { useToast } from "@chakra-ui/react";

const ContactHomePage = () => {
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
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.message
      ) {
        setLoading(false);
        toast({
          title: "Invalid Credentials",
          description: "Please enter all the required fields",
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
  return (
    <Flex
      w={{ sm: "full", lg: "6xl" }}
      mx="auto"
      direction={"column"}
      h="auto"
      py={{ lg: 16, base: 10 }}
      px={{ lg: 18, base: 8 }}
      alignItems="center"
    >
      <Box>
        <Text
          fontSize={{ lg: "3xl", base: "2xl" }}
          fontWeight="semibold"
          textColor={"brand.900"}
        >
          GET IN TOUCH WITH US
        </Text>
      </Box>
      <Box w="full" mt="10">
        <form onSubmit={handleSubmit}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ lg: 10, base: 4 }}
          >
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                onChange={handleInputChange}
                name="firstName"
                value={formData.firstName}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                onChange={handleInputChange}
                name="lastName"
                value={formData.lastName}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                onChange={handleInputChange}
                name="email"
                value={formData.email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mobile No.</FormLabel>
              <Input
                type="text"
                onChange={handleInputChange}
                name="phone"
                value={formData.phone}
              />
            </FormControl>
          </SimpleGrid>
          <Box w="full" marginTop={4}>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                size="sm"
                name="message"
                onChange={handleInputChange}
                value={formData.message}
              ></Textarea>
            </FormControl>
          </Box>
          <button
            type="submit"
            className="relative inline-block px-6 py-3 mt-5 text-white font-medium bg-button1 rounded-md focus:outline-none  hover:bg-button3 transition-all duration-300"
          >
            <span className="relative">
              <span className="absolute inset-0 bg-white rounded-md opacity-0 transition-opacity"></span>
              <span className="absolute inset-0 bg-buttonColor bg-opacity-10 rounded-md transform scale-0 transition-transform"></span>
              <span className="relative z-10 text-buttonColor">
                {loading ? "Submitting" : "Submit"}
              </span>
            </span>
          </button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactHomePage;
