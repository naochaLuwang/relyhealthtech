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
    <div
      className="relative w-full px-6 pt-10 pb-20 mt-10 border-2 rounded-lg service-item h-96 border-[#25d366]"
      style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
    >
      <Image src={icon} alt="service" width={100} height={100} />
      <h1 className="mt-3 text-xl font-semibold tracking-wider lg:text-2xl">
        {title}
      </h1>
      <p className="h-20 mt-3 mb-5 overflow-hidden text-sm text-neutral-600 line-clamp-3">
        {description}
      </p>

      <Link href={`/products/${slug}`}>
        <div className="absolute bottom-5 w-fit h-fit">
          <div className="relative px-6 py-3 mt-10 font-bold text-white group w-fit ">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-greenBorder bg-opacity-90 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span className="relative">Learn More</span>
          </div>
        </div>
      </Link>
    </div>
    // <Center py={6}>
    //   <Box
    //     w="xs"
    //     h="96"
    //     rounded={"3xl"}
    //     my={{ lg: 5 }}
    //     mx={[0, 5]}
    //     overflow={"hidden"}
    //     bg="white"
    //     borderRight={"1px solid"}
    //     borderColor="brand.700"
    //     boxShadow="0 6px 0 green"
    //   >
    //     <Box h={"auto"} bg={"brand.700"} py={2}>
    //       <Heading
    //         textAlign={"center"}
    //         fontSize={{ base: "xl", md: "3xl" }}
    //         color={"brand.900"}
    //       >
    //         {title}
    //       </Heading>
    //     </Box>
    //     <Box bg="brand.700">
    //       <Box
    //         w="full"
    //         h="auto"
    //         bg="white"
    //         roundedTopLeft="100px"
    //         py={8}
    //         borderTop="4px solid"
    //         borderLeft={"1px solid"}
    //         borderColor={"brand.400"}
    //       >
    //         <Flex
    //           mb={2}
    //           display={"flex"}
    //           roundedTopLeft="full"
    //           w="full"
    //           align="center"
    //           justify="center"
    //         >
    //           <Image src={icon} alt="hospital" width={80} height={80} />
    //         </Flex>
    //         <Text
    //           color={"brand.900"}
    //           fontSize="sm"
    //           pt={4}
    //           px={5}
    //           textAlign="justify"
    //           noOfLines={6}
    //         >
    //           {description}
    //         </Text>
    //       </Box>
    //     </Box>
    //     <Stack>
    //       <Link href={`/products/${slug}`}>
    //         <Flex
    //           px={4}
    //           pt={1}
    //           pb={4}
    //           borderLeft={"1px"}
    //           borderColor="brand.400"
    //           alignItems="center"
    //           justifyContent={"end"}
    //           roundedBottom={"sm"}
    //           cursor={"pointer"}
    //           w="full"
    //           bg="brand.700"
    //         >
    //           <Text
    //             fontSize={"md"}
    //             color="brand.900"
    //             fontWeight={"semibold"}
    //             mr={2}
    //           >
    //             Read more
    //           </Text>
    //           <FaAngleDoubleRight color="brand.900" />
    //         </Flex>
    //       </Link>
    //     </Stack>
    //   </Box>
    // </Center>
  );
}
