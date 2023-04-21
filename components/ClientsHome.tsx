"use client";
import { useTabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
import Marquee from "react-fast-marquee";
import { Box, Stack, Heading, Text, SimpleGrid } from "./ChakraElements";

// @ts-ignore
import ClientCardCarousel from "./ClientCardCarousel";
import ClientCardMarquee from "./ClientCardMarquee";
import DiagnosticCardMarquee from "./DiagnosticCardMarquee";

interface Clients {
  name: string;
  image: string;
}

const ClientsHome = ({
  PRIVATE_CLIENTS,
  GOVERNMENT_CLIENTS,
  DIAGNOSTIC_CLIENTS,
  IVF_CLIENTS,
}: any) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: any) => {
    setActiveTab(index);
  };

  return (
    <Box maxW="full" bg="gray.50" py={16} minHeight={{ lg: "lg" }}>
      <Stack>
        <Heading
          fontSize={{ lg: "3xl", base: "2xl" }}
          fontWeight={"medium"}
          alignSelf={"center"}
          marginBottom={10}
        >
          OUR HAPPIEST CLIENTS
        </Heading>

        <Tabs
          variant="unstyled"
          size="sm"
          index={activeTab}
          onChange={handleTabChange}
        >
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
                IVF Clinics
              </Text>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {activeTab === 0 && (
                <>
                  <Box w="full">
                    <ClientCardMarquee
                      CLIENTS={PRIVATE_CLIENTS}
                      key="Private"
                    />
                  </Box>
                </>
              )}
            </TabPanel>
            <TabPanel>
              {activeTab === 1 && (
                <>
                  <Box display={{ base: "none", lg: "block" }}>
                    <SimpleGrid
                      columns={{ base: 2, md: 5 }}
                      spacing={{ base: 2, lg: 0 }}
                      pl={{ lg: 16, base: 2 }}
                      px={{ base: "16" }}
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
                  </Box>
                  <Box
                    px={{ lg: 0, base: 3 }}
                    w="full"
                    display={{ base: "block", lg: "none" }}
                  >
                    <ClientCardMarquee CLIENTS={GOVERNMENT_CLIENTS} />
                  </Box>
                </>
              )}
            </TabPanel>
            <TabPanel>
              {activeTab === 2 && (
                <Box px={{ lg: 0, base: 3 }} w="full" display={"block"}>
                  <ClientCardMarquee CLIENTS={DIAGNOSTIC_CLIENTS} />
                </Box>
              )}
            </TabPanel>
            <TabPanel>
              {activeTab === 3 && (
                <>
                  <Box px={{ lg: 0, base: 3 }} w="full">
                    {IVF_CLIENTS.length > 3 ? (
                      <ClientCardMarquee CLIENTS={IVF_CLIENTS} />
                    ) : (
                      <SimpleGrid
                        columns={{ base: 2, md: 5 }}
                        spacing={{ base: 2, lg: 0 }}
                        pl={{ base: 2 }}
                        px={{ base: 3 }}
                      >
                        {IVF_CLIENTS.map((client: any) => (
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
                    )}
                  </Box>
                </>
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default ClientsHome;

export const revalidate = 20;
