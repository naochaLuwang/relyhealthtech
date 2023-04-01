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

const ContactHomePage = () => {
  return (
    <Flex
      w={{ sm: "full", lg: "6xl" }}
      mx="auto"
      direction={"column"}
      h="auto"
      py={16}
      px={16}
      alignItems="center"
    >
      <Box>
        <Text fontSize={"3xl"} fontWeight="semibold" textColor={"brand.900"}>
          GET IN TOUCH WITH US
        </Text>
      </Box>
      <Box w="full" mt="10">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Mobile No.</FormLabel>
            <Input />
          </FormControl>
        </SimpleGrid>
        <Box w="full" marginTop={10}>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea size="sm"></Textarea>
          </FormControl>
        </Box>
        <button className="relative inline-block px-6 py-3 mt-5 text-white font-medium bg-button1 rounded-md focus:outline-none  hover:bg-button3 transition-all duration-300">
          <span className="relative">
            <span className="absolute inset-0 bg-white rounded-md opacity-0 transition-opacity"></span>
            <span className="absolute inset-0 bg-buttonColor bg-opacity-10 rounded-md transform scale-0 transition-transform"></span>
            <span className="relative z-10 text-buttonColor">Submit</span>
          </span>
        </button>
      </Box>
    </Flex>
  );
};

export default ContactHomePage;
