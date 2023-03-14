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
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 6 }}
      py={"5"}
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

        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
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
      {/* <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Our company is expanding, you could be too.
      </chakra.h1> */}
      <SimpleGrid columns={{ base: 2, md: 5 }} spacing={{ base: 5, lg: 6 }}>
        <StatsCard
          title={"Experience"}
          stat={"5+ Years"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"Clients"}
          stat={"200+"}
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"Admission Per Year"}
          stat={"250000+"}
          icon={<GoLocation size={"3em"} />}
        />
        <StatsCard
          title={"OPD Patients Per Year"}
          stat={"1250000+"}
          icon={<GoLocation size={"3em"} />}
        />
        <StatsCard
          title={"User Per Month"}
          stat={"275000+"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
};

export default Statistics;
