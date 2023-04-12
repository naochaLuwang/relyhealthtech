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
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

interface FlagshipProduct {
  title: string;
  icon: string;
  description: string;
  slug: string;
}

export default function FlagshipCards({
  title,
  icon,
  description,
  slug,
}: FlagshipProduct) {
  return (
    <Center py={6}>
      <Box
        w="xs"
        h="96"
        rounded={"3xl"}
        my={{ lg: 5 }}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        borderRight={"1px solid"}
        borderColor="brand.700"
        boxShadow="0 6px 0 green"
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
            borderColor={"brand.400"}
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
          <Link href={`/products/${slug}`}>
            <Flex
              px={4}
              pt={1}
              pb={4}
              borderLeft={"1px"}
              borderColor="brand.400"
              alignItems="center"
              justifyContent={"end"}
              roundedBottom={"sm"}
              cursor={"pointer"}
              w="full"
              bg="brand.700"
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
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}
