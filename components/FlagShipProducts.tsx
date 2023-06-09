"use client";

import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import FlagshipCards from "./FlagshipCards";
import { Fade, Slide } from "react-awesome-reveal";

interface FlagshipProduct {
  title: string;
  icon: string;
  description: string;
  slug: string;
}

const FlagshipItems: Array<FlagshipProduct> = [
  {
    title: "Rely HIS",
    icon: "/hospital.png",
    description:
      "Rely HIS is a world class Hospital Management Software. It is a web based ERP developed using latest technologies to manage working at a hospital in a paperless environment trusted by esteemed clients ",
    slug: "rely_his",
  },
  {
    title: "Rely HRM",
    icon: "/resource.png",
    description:
      "Rely HRM is designed to automate the the Human Resources process of an organisation. This software computerises and integrate several HR processes like recruitment, training , payroll leave management. ",
    slug: "rely_hrm",
  },
  {
    title: "Rely LIS",
    icon: "/microscope.png",
    description:
      "Rely LIS is a powerful clinical Laboratory Information System that seamlessly integrates with HIS, Billing, EMR, and reference labs. Its built-in interface engine simplifies the process of accessioning, coding, and reporting of laboratory results. ",
    slug: "rely_lis",
  },
  {
    title: "Rely IVF",
    icon: "/RelyIVF.png",
    description:
      " Rely IVF is a comprehensive software solution that has been designed to simplify the management of infertility-related processes in healthcare organizations. It is an all-in-one package that enables healthcare professionals to easily manage various infertility management tasks from a single platform.",
    slug: "rely_ivf",
  },
];

const FlagShipProducts = () => {
  return (
    <Box maxW="7xl" mx="auto" py={{ lg: 0, base: 10 }} px={{ lg: 0, base: 10 }}>
      <Fade direction="left">
        <Flex align={"center"} gap={2}>
          <Box w={12} h={1} bg="brand.900" rounded={"2xl"}></Box>
          <Text color="brand.900">WHAT WE DO</Text>
        </Flex>
      </Fade>

      <Fade direction="down">
        <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
          <Text color={"black"}>OUR FLAGSHIP PRODUCTS</Text>
        </Heading>
      </Fade>

      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        spacing={{ lg: 6, base: 2 }}
        display={{ base: "none", lg: "grid" }}
      >
        {FlagshipItems.map((flagshipitem) => (
          <Fade
            key={flagshipitem.title}
            direction="right"
            damping={10}
            delay={10}
          >
            <FlagshipCards {...flagshipitem} />
          </Fade>
        ))}
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        spacing={{ lg: 6, base: 2 }}
        display={{ base: "grid", lg: "none" }}
      >
        {FlagshipItems.map((flagshipitem) => (
          <FlagshipCards key={flagshipitem.title} {...flagshipitem} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FlagShipProducts;
