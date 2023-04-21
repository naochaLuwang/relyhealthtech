"use client";

import urlFor from "@/lib/urlFor";
import { Box, CardBody, Center, Card, Image } from "@chakra-ui/react";

import Marquee from "react-fast-marquee";
const DiagnosticCardMarquee = ({ CLIENTS }: any) => {
  return (
    <Box w="full" px={8}>
      <Marquee
        gradient={false}
        play={true}
        key="marquee2"
        loop={20}
        pauseOnHover={false}
        speed={30}
      >
        {CLIENTS.map((client: any, index: any) => (
          <Center py={6} key={index} mr={{ base: 2 }}>
            <Card
              maxW="sm"
              variant={"elevated"}
              rounded="2xl"
              boxShadow={"xl "}
            >
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
    </Box>
  );
};

export default DiagnosticCardMarquee;
