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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import ClientCard from "./ClientCard";
interface Clients {
  name: string;
  image: string;
}

const GOVERNMENT_CLIENTS: Array<Clients> = [
  {
    name: "Jorhat Medical College",
    image: "/JMC.jpeg",
  },
  {
    name: "Sanaka",
    image: "/sanaka.png",
  },
];
const Clients = ({ PRIVATE_CLIENTS }: any) => {
  return (
    <Box maxW="7xl" pt={10} mx="auto">
      <Text align={"center"} fontSize="3xl" mb={"10"} fontWeight={"bold"}>
        Take a look at our Clients
      </Text>

      <Tabs variant="unstyled" size="sm" px={5}>
        <TabList>
          <Tab
            _selected={{ color: "white", bg: "brand.900" }}
            border={"1px solid"}
            w="fit-content"
            rounded="lg"
            px={"3"}
            py={"2"}
            ml={{ lg: 14, sm: 3 }}
          >
            <Text fontWeight={"bold"}>Private Hospitals & Clinics</Text>
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "brand.900" }}
            border={"1px solid"}
            w="fit-content"
            rounded="lg"
            px={"3"}
            py={"2"}
            marginLeft={{ lg: 5, base: 3 }}
          >
            <Text fontWeight={"bold"}>
              Government & Private Medical Colleges
            </Text>
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "brand.900" }}
            border={"1px solid"}
            w="fit-content"
            rounded="lg"
            px={"3"}
            py={"2"}
            marginLeft={{ lg: 5, base: 3 }}
          >
            <Text fontWeight={"bold"}>Diagnostic Centres</Text>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, lg: 4 }}>
              {PRIVATE_CLIENTS.map((client: any) => (
                <Flex key={client.name} direction={"column"}>
                  <Center py={6}>
                    <Card
                      maxW="sm"
                      variant={"elevated"}
                      rounded="2xl"
                      boxShadow={"xl "}
                      border="1px solid"
                      borderColor={"gray.200"}
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
                  <Text align="center">{client.name}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={{ base: 1, lg: 4 }}
              spacing={{ base: 2, lg: 5 }}
              pb={"20"}
            >
              {GOVERNMENT_CLIENTS.map((client: any) => (
                <ClientCard key={client.name} {...client} />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Clients;
