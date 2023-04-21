"use client";

import urlFor from "@/lib/urlFor";
import { Flex, CardBody, Center, Button, Card, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import Marquee from "react-fast-marquee";
const ClientCardMarquee = ({ CLIENTS }: any) => {
  const [direction, setDirection] = useState("left");
  return (
    <Flex w={"full"} align={"center"}>
      <Button
        onClick={() => setDirection("left")}
        variant="ghost"
        rounded={"full"}
        w="14"
        h="14"
        mr={2}
      >
        <ChevronLeftIcon className="w-8 h-8 font-bold" />
      </Button>
      <Marquee
        gradient={false}
        // gradientWidth={50}
        play={true}
        key="marquee1"
        pauseOnHover={false}
        speed={40}
        direction={direction === "left" ? "left" : "right"}
      >
        {CLIENTS.map((client: any, index: any) => (
          <Center py={6} key={index} mr={{ base: 4, lg: 6 }}>
            <Card maxW="sm" variant={"elevated"} rounded="2xl" boxShadow={"lg"}>
              <CardBody>
                <Image
                  src={urlFor(client.clientImage).url()}
                  alt="card image"
                  w={200}
                  h={140}
                  objectFit={"contain"}
                  loading="eager"
                />
              </CardBody>
            </Card>
          </Center>
        ))}
      </Marquee>
      <Button
        onClick={() => setDirection("right")}
        variant="ghost"
        rounded={"full"}
        w="14"
        h="14"
        ml={2}
      >
        <ChevronRightIcon className="w-8 h-8 text-lg font-bold text-textPrimary" />
      </Button>
    </Flex>
  );
};

export default ClientCardMarquee;
