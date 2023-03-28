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
        h="96"
        rounded={"3xl"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        borderRight={"1px solid"}
        borderColor="brand.700"
        boxShadow={useColorModeValue("0 6px 0 tomato  ", "6px 6px 0 cyan")}
      >
        <Box h={"auto"} bg={"brand.700"} py={2}>
          <Heading
            textAlign={"center"}
            fontSize={{ base: "xl", md: "3xl" }}
            color={"brand.900"}
          >
            {title}
          </Heading>
        </Box>
        <Box bg="brand.700">
          <Box
            w="full"
            h="auto"
            bg="white"
            roundedTopLeft="100px"
            py={8}
            borderTop="4px solid"
            borderLeft={"1px solid"}
            borderColor={"brand.600"}
          >
            <Flex
              mb={2}
              display={"flex"}
              roundedTopLeft="full"
              w="full"
              align="center"
              justify="center"
            >
              <Image src={icon} alt="hospital" width={80} height={80} />
            </Flex>
            <Text
              color={"brand.900"}
              fontSize="sm"
              pt={4}
              px={5}
              textAlign="justify"
              noOfLines={6}
            >
              {description}
            </Text>
          </Box>
        </Box>
        <Stack>
          <Flex
            px={4}
            pb={4}
            borderLeft={"1px"}
            borderColor="brand.600"
            alignItems="center"
            justifyContent={"end"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          >
            <Text
              fontSize={"md"}
              color="brand.900"
              fontWeight={"semibold"}
              mr={2}
            >
              Read more
            </Text>
            <FaAngleDoubleRight color="brand.900" />
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
}
