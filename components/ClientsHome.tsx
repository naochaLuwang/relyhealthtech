"use client";

import urlFor from "@/lib/urlFor";
import {
  Card,
  CardBody,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box, Stack, Heading, Text, SimpleGrid } from "./ChakraElements";

// @ts-ignore
import ClientCardCarousel from "./ClientCardCarousel";

interface Clients {
  name: string;
  image: string;
}

const ClientsHome = ({
  PRIVATE_CLIENTS,
  GOVERNMENT_CLIENTS,
  DIAGNOSTIC_CLIENTS,
}: any) => {
  return (
    <Box maxW="full" bg="gray.50" py={10}>
      <Stack>
        <Heading
          fontSize={{ lg: "3xl", base: "2xl" }}
          fontWeight={"medium"}
          alignSelf={"center"}
          marginBottom={10}
        >
          OUR HAPPIEST CLIENTS
        </Heading>

        <Tabs variant="unstyled" size="sm">
          <TabList>
            <Tab
              _selected={{ color: "white", bg: "brand.900" }}
              border={"1px solid"}
              w="fit-content"
              rounded="md"
              px={2}
              py={1}
              marginLeft={{ lg: 20, base: 1 }}
            >
              <Text fontSize={{ base: "xs", lg: "md" }} fontWeight={"bold"}>
                Private Hospitals & Clinics
              </Text>
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "brand.900" }}
              border={"1px solid"}
              w="fit-content"
              rounded="md"
              px={2}
              py={1}
              marginLeft={{ lg: 5, base: 1 }}
            >
              <Text fontWeight={"bold"} fontSize={{ base: "xs", lg: "md" }}>
                Government & Private Medical Colleges
              </Text>
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "brand.900" }}
              border={"1px solid"}
              w="fit-content"
              rounded="md"
              px={2}
              py={1}
              marginLeft={{ lg: 5, base: 1 }}
            >
              <Text fontWeight={"bold"} fontSize={{ lg: "md", base: "xs" }}>
                Diagnostic Centres
              </Text>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box px={{ lg: 10, base: 3 }} w="full">
                <ClientCardCarousel PRIVATE_CLIENTS={PRIVATE_CLIENTS} />
              </Box>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                columns={{ base: 2, md: 5 }}
                spacing={{ base: 2, lg: 0 }}
                pl={{ lg: 16, base: 2 }}
                px={{ base: 3 }}
              >
                {GOVERNMENT_CLIENTS.map((client: any) => (
                  <Center py={6} key={client.name}>
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
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                columns={{ base: 2, md: 5 }}
                spacing={{ base: 2, lg: 0 }}
                pl={{ lg: 16, base: 2 }}
                px={{ base: 3 }}
              >
                {DIAGNOSTIC_CLIENTS.map((client: any) => (
                  <Center py={6} key={client.name}>
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
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default ClientsHome;
