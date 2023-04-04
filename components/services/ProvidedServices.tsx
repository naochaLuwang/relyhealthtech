"use client";
import React from "react";

import Lottie from "lottie-react";
import { Box, Card, SimpleGrid, Text } from "@chakra-ui/react";

import design from "../../public/icons/design.json";
import marketing from "../../public/icons/digitalMarketing.json";
import appDesign from "../../public/icons/appDesign.json";
import logoDesign from "../../public/icons/logoDesign.json";
import planning from "../../public/icons/planning.json";
const ProvidedServices = () => {
  return (
    <Box w="full" h="auto" py={16} bg="brand.700">
      <Box maxW="7xl" mx="auto" px={10}>
        <Text fontSize={"sm"}>WHAT WE DO</Text>
        <Text
          fontSize={"3xl"}
          paddingBottom={{ lg: 0, base: 5 }}
          fontWeight="semibold"
          color={"brand.900"}
        >
          Our Provided Services
        </Text>
        <SimpleGrid
          columns={{ lg: 4, sm: 1 }}
          paddingTop={{ lg: 5, sm: 10 }}
          paddingX={{ lg: 0, sm: 10 }}
          gap={6}
          py={{ lg: 16, sm: 10 }}
        >
          <Box w="full" h="96" boxShadow="xl" bg="brand.900" rounded="2xl">
            <Box
              w="full"
              h="auto"
              borderBottom="2px solid"
              roundedBottomLeft={"150px"}
              borderColor="brand.600"
              paddingBottom={10}
              bg="white"
            >
              <Lottie
                animationData={design}
                loop={true}
                className="w-64 h-64 mx-auto"
              />
            </Box>

            <Text
              align={"center"}
              fontSize="large"
              fontWeight={"bold"}
              color="white"
              pt={5}
            >
              Web Design & Development
            </Text>
          </Box>

          <Box w="full" h="96" boxShadow="xl" bg="brand.900" rounded="2xl">
            <Box
              w="full"
              h="auto"
              borderBottom="2px solid"
              roundedBottomLeft={"150px"}
              borderColor="brand.600"
              paddingBottom={10}
              bg="white"
            >
              <Lottie
                animationData={marketing}
                loop={true}
                className="w-64 h-64 mx-auto"
              />
            </Box>

            <Text
              align={"center"}
              fontSize="large"
              fontWeight={"bold"}
              color="white"
              pt={5}
            >
              Digital Marketing
            </Text>
          </Box>
          <Box w="full" h="96" boxShadow="xl" bg="brand.900" rounded="2xl">
            <Box
              w="full"
              h="auto"
              borderBottom="2px solid"
              roundedBottomLeft={"150px"}
              borderColor="brand.600"
              paddingBottom={10}
              bg="white"
            >
              <Lottie
                animationData={logoDesign}
                loop={true}
                className="w-64 h-64 mx-auto"
              />
            </Box>

            <Text
              align={"center"}
              fontSize="large"
              fontWeight={"bold"}
              color="white"
              pt={5}
            >
              Logo Design
            </Text>
          </Box>
          <Box w="full" h="96" boxShadow="xl" bg="brand.900" rounded="2xl">
            <Box
              w="full"
              h="auto"
              borderBottom="2px solid"
              roundedBottomLeft={"150px"}
              borderColor="brand.600"
              bg="white"
              paddingBottom={10}
            >
              <Lottie
                animationData={planning}
                loop={true}
                className="w-52 h-64 mx-auto"
              />
            </Box>

            <Text
              align={"center"}
              fontSize="large"
              fontWeight={"bold"}
              color="white"
              pt={5}
            >
              App Design
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProvidedServices;
