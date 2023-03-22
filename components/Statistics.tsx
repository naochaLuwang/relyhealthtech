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
} from "@chakra-ui/react";

import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
  bgc: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon, bgc } = props;
  return (
    <Stat
      pl={2}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("brand.900", "brand.900")}
      rounded={"lg"}
    >
      <Flex justifyContent={"start"}>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>

        <Box pl={{ base: 2, md: 4 }} py={2} bg={bgc} w={"full"}>
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
          icon={<BsPerson size={"3em"} />}
          bgc={"blue.400"}
        />
        <StatsCard
          title={"Clients"}
          stat={"200+"}
          icon={<FiServer size={"3em"} />}
          bgc={"green.400"}
        />
        <StatsCard
          title={"Admission Per Year"}
          stat={"250000+"}
          icon={<GoLocation size={"3em"} />}
          bgc={"orange.400"}
        />
        <StatsCard
          title={"OPD Patients Per Year"}
          stat={"1250000+"}
          icon={<GoLocation size={"3em"} />}
          bgc={"red.300"}
        />
        <StatsCard
          title={"User Per Month"}
          stat={"275000+"}
          icon={<GoLocation size={"3em"} />}
          bgc={"purple.400"}
        />
      </SimpleGrid>
    </Box>
  );
};

export default Statistics;
