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
      border={{ base: "1px solid", lg: "0px" }}
      borderColor={"brand.900"}
      rounded={{ base: "lg", lg: "none" }}
    >
      <Flex justifyContent={"start"}>
        <Box
          display={{ base: "none", lg: "block" }}
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
          px={{ md: 2 }}
        >
          <Image
            src={`/adicon/${icon}`}
            alt="icon"
            w={16}
            h={16}
            objectFit={"contain"}
          />
        </Box>

        <Box
          pl={{ md: 4 }}
          px={{ base: 4 }}
          py={2}
          bg={bgc}
          w={"full"}
          rounded={{ base: "lg", lg: "none" }}
        >
          <StatLabel
            fontWeight={"medium"}
            color={"white"}
            fontSize={{ lg: "md", base: "xs" }}
            isTruncated
          >
            {title}
          </StatLabel>
          <StatNumber
            fontSize={{ lg: "2xl", base: "base" }}
            color={"white"}
            fontWeight={"medium"}
          >
            {stat}
          </StatNumber>
        </Box>
      </Flex>
    </Stat>
  );
}

const Statistics = () => {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 4, md: 0 }} mt={10}>
      <SimpleGrid
        columns={{ base: 2, md: 5 }}
        spacing={{ base: 2, lg: 0 }}
        border={{ base: "0px", lg: "1px solid" }}
        roundedLeft="lg"
        roundedRight={"lg"}
        borderColor={"brand.900"}
      >
        <StatsCard
          title={"Experience"}
          stat={"5+ Years"}
          icon={"rating.png"}
          bgc={"stats.900"}
        />
        <StatsCard
          title={"Clients"}
          stat={"200+"}
          icon={"clients.png"}
          bgc={"stats.800"}
        />
        <StatsCard
          title={"Admission Per Year"}
          stat={"250000+"}
          icon={"id-card.png"}
          bgc={"stats.700"}
        />
        <StatsCard
          title={"OPD Patients Per Year"}
          stat={"1250000+"}
          icon={"opd.png"}
          bgc={"stats.600"}
        />
        <StatsCard
          title={"User Per Month"}
          stat={"275000+"}
          icon={"user.png"}
          bgc={"stats.500"}
        />
      </SimpleGrid>
    </Box>
  );
};

export default Statistics;
