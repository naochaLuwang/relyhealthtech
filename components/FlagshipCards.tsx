"use client";

import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

import { FaAngleDoubleRight } from "react-icons/fa";
import Image from "next/image";

interface FlagshipProduct {
  title: string;
  icon: string;
  description: string;
}

export default function FlagshipCards({
  title,
  icon,
  description,
}: FlagshipProduct) {
  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={"3xl"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 gray ", "6px 6px 0 cyan")}
      >
        <Box h={"auto"} borderBottom={"1px"} borderColor="black" py={2}>
          <Heading
            textAlign={"center"}
            fontSize={{ base: "xl", md: "3xl" }}
            color={"brand.900"}
          >
            {title}
          </Heading>
        </Box>
        <Box p={4} bg={"brand.700"}>
          <Flex
            mb={2}
            display={"flex"}
            w="full"
            align="center"
            justify="center"
          >
            <Image src={icon} alt="hospital" width={80} height={80} />
          </Flex>

          <Text color={"brand.900"} noOfLines={5}>
            {description}
          </Text>
        </Box>
        <Stack>
          <Flex
            px={4}
            pb={4}
            alignItems="center"
            justifyContent={"end"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
            pt={2}
          >
            <Text fontSize={"md"} fontWeight={"semibold"} mr={2}>
              View more
            </Text>
            <FaAngleDoubleRight />
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
}
