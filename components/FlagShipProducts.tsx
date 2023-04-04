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
import Link from "next/link";

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
    title: "Rely PIS",
    icon: "/hospital.png",
    description:
      "Rely PIS (Pharmacy Information System) is a world class pharmacy management software . It is designed for owners,  keeping their requirements in mind. It's designed to eliminate error while dispensing medicines + control over medicines stocks.",
    slug: "rely_pis",
  },
];

const FlagShipProducts = () => {
  const scheme = "purple";
  const step1 = useColorModeValue("900", "300");
  const step2 = useColorModeValue("500", "400");
  const step3 = useColorModeValue("300", "500");
  return (
    <Box maxW="8xl" mx="auto" py={{ lg: 16, base: 10 }} px={8}>
      <Heading pl={{ lg: 6 }} fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
        <Text color={"brand.900"}>OUR FLAGSHIP PRODUCTS</Text>
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ lg: 6, base: 2 }}>
        {FlagshipItems.map((flagshipitem) => (
          <FlagshipCards key={flagshipitem.title} {...flagshipitem} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FlagShipProducts;
