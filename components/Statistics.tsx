"use client";

import {
  Box,
  Stack,
  Flex,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  chakra,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: string;
  bgc: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon, bgc } = props;
  return (
    <Stat
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("brand.900", "brand.900")}
      rounded={"lg"}
    >
      <Flex justifyContent={"start"}>
        <Box
          display={{ base: "none", lg: "block" }}
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
          px={{ md: 2 }}
        >
          <Image src={`/${icon}`} alt="icon" objectFit={"contain"} />
        </Box>

        <Box pl={{ md: 4 }} px={{ base: 4 }} py={2} bg={bgc} w={"full"}>
          <StatLabel fontWeight={"medium"} color={"white"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} color={"white"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
      </Flex>
    </Stat>
  );
}

const Statistics = () => {
  return (
    <Box maxW="full" mx={"auto"} pt={8} px={{ base: 2, sm: 4, md: 12 }}>
      <SimpleGrid columns={{ base: 2, md: 5 }} spacing={{ base: 5, lg: 6 }}>
        <StatsCard
          title={"Experience"}
          stat={"5+ Years"}
          icon={"experience.png"}
          bgc={"blue.400"}
        />
        <StatsCard
          title={"Clients"}
          stat={"200+"}
          icon={"client.png"}
          bgc={"green.400"}
        />
        <StatsCard
          title={"Admission Per Year"}
          stat={"250000+"}
          icon={"admission.png"}
          bgc={"orange.400"}
        />
        <StatsCard
          title={"OPD Patients Per Year"}
          stat={"1250000+"}
          icon={"experience.png"}
          bgc={"red.300"}
        />
        <StatsCard
          title={"User Per Month"}
          stat={"275000+"}
          icon={"experience.png"}
          bgc={"purple.400"}
        />
      </SimpleGrid>
    </Box>
  );
};

export default Statistics;
