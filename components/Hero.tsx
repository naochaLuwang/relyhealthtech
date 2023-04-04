"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack
      minH={"auto"}
      mt={{ lg: 10, base: 0 }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex
        py={8}
        flex={1}
        pl={{ md: 20 }}
        px={{ base: 4 }}
        align={"center"}
        justify={"end"}
      >
        <Stack spacing={{ lg: 6, base: 3 }} w={"2xl"} px={{}}>
          <Heading fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              color={"brand.900"}

              //   _after={{
              //     content: "''",
              //     width: "full",
              //     height: useBreakpointValue({ base: "20%", md: "30%" }),
              //     position: "absolute",
              //     bottom: 1,
              //     left: 0,
              //     bg: "blue.400",
              //     zIndex: -1,
              //   }}
            >
              WHO ARE WE ?
            </Text>
            <br />{" "}
          </Heading>
          <Text
            fontSize={{ base: "sm", lg: "lg" }}
            color={"gray.500"}
            textAlign={{ base: "justify", md: "start" }}
          >
            <Text as={"span"} color="brand.600" fontWeight={"bold"}>
              Rely Healthcare Technologies
            </Text>{" "}
            one of the fastest growing healthcare technology company which
            design and develop innovative health information systems and also
            provides IT solution & services that transform the administrative
            and clinical operations of healthcare organizations of all sizes.
          </Text>
        </Stack>
      </Flex>
      <Flex
        h={450}
        flex={2}
        position={{ lg: "relative" }}
        top={"2"}
        right={"36"}
      >
        <Image alt={"Login Image"} objectFit={"cover"} src={"/banner.png"} />
      </Flex>
    </Stack>
  );
}
