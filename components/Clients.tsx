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

interface Clients {
  name: string;
  image: string;
}

const Clients = ({
  PRIVATE_CLIENTS,
  DIAGNOSTIC_CLIENTS,
  GOVERNMENT_CLIENTS,
  IVF_CLIENTS,
}: any) => {
  return (
    <Box maxW="7xl" pt={10} mx="auto" pb={10}>
      <Text align={"center"} fontSize="3xl" mb={"10"} fontWeight={"bold"}>
        Our Happiest Clients
      </Text>

      <Tabs variant="unstyled" size="sm" px={{ lg: 5, base: 2 }}>
        <TabList>
          <Tab
            _selected={{ color: "white", bg: "brand.900" }}
            border={"1px solid"}
            w="fit-content"
            rounded="lg"
            px={2}
            py={1}
            ml={{ lg: 14, sm: 1 }}
          >
            <Text fontWeight={"semibold"} fontSize={{ lg: "md", base: "sm" }}>
              Private Hospitals & Clinics
            </Text>
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "brand.900" }}
            border={"1px solid"}
            w="fit-content"
            rounded="lg"
            px={2}
            py={1}
            marginLeft={{ lg: 5, base: 1 }}
          >
            <Text fontWeight={"semibold"} fontSize={{ lg: "md", base: "sm" }}>
              Government & Private Medical Colleges
            </Text>
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "brand.900" }}
            border={"1px solid"}
            w="fit-content"
            rounded="lg"
            px={2}
            py={1}
            marginLeft={{ lg: 5, base: 1 }}
          >
            <Text fontWeight={"semibold"} fontSize={{ lg: "md", base: "sm" }}>
              Diagnostic Centres
            </Text>
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "brand.900" }}
            border={"1px solid"}
            w="fit-content"
            rounded="lg"
            px={2}
            py={1}
            marginLeft={{ lg: 5, base: 1 }}
          >
            <Text fontWeight={"semibold"} fontSize={{ lg: "md", base: "sm" }}>
              IVF Clinics
            </Text>
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
          <TabPanel minH="xl">
            <SimpleGrid columns={{ base: 1, lg: 4 }}>
              {GOVERNMENT_CLIENTS.map((client: any) => (
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
          <TabPanel minH="xl">
            <SimpleGrid columns={{ base: 1, lg: 4 }}>
              {DIAGNOSTIC_CLIENTS.map((client: any) => (
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

          <TabPanel minH="xl">
            <SimpleGrid columns={{ base: 1, lg: 4 }}>
              {IVF_CLIENTS.map((client: any) => (
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
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Clients;
