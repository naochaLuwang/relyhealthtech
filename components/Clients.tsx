"use client";

import urlFor from "@/lib/urlFor";
import {
  Box,
  Text,
  SimpleGrid,
  Center,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";

const Clients = ({ PRIVATE_CLIENTS }: any) => {
  return (
    <Box maxW="7xl" pt={10} mx="auto">
      <Text align={"center"} fontSize="3xl" fontWeight={"bold"}>
        Take a look at our Clients
      </Text>

      <SimpleGrid columns={{ base: 1, lg: 5 }}>
        {PRIVATE_CLIENTS.map((client: any) => (
          <Center py={6} key={client.name}>
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
                />
              </CardBody>
            </Card>
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Clients;
