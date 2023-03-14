"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Box, Stack, Heading, Text, SimpleGrid } from "./ChakraElements";
import ClientCard from "./ClientCard";
// @ts-ignore
import ClientCardCarousel from "./ClientCardCarousel";

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

const PRIVATE_CLIENTS: Array<Clients> = [
  {
    name: "Pratiksha hospital",
    image: "/JMC.jpeg",
  },
  {
    name: "Sanaka",
    image: "/sanaka.png",
  },
  {
    name: "Pratiksha hospital",
    image: "/JMC.jpeg",
  },
  {
    name: "Sanaka",
    image: "/sanaka.png",
  },
];

const ClientsHome = ({ PRIVATE_CLIENTS }: any) => {
  return (
    <Box maxW="full" bg="gray.50" py={10}>
      <Stack>
        <Heading
          fontSize={"3xl"}
          fontWeight={"medium"}
          alignSelf={"center"}
          marginBottom={10}
        >
          OUR HAPPIEST CLIENTS
        </Heading>

        <Tabs variant="unstyled" size="sm">
          <TabList>
            <Tab
              _selected={{ color: "white", bg: "blue.500" }}
              border={"1px solid"}
              w="fit-content"
              rounded="lg"
              px={"2"}
              py={"1"}
              marginLeft={{ lg: 20, base: 10 }}
            >
              <Text>Private Hospitals & Clinics</Text>
            </Tab>
            <Tab
              border={"1px solid"}
              w="fit-content"
              rounded="lg"
              px={"2"}
              py={"1"}
              marginLeft={{ lg: 5, base: 10 }}
            >
              <Text>Government & Private Medical Colleges</Text>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box pl={16}>
                <ClientCardCarousel PRIVATE_CLIENTS={PRIVATE_CLIENTS} />
              </Box>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                columns={{ base: 2, md: 5 }}
                spacing={{ base: 2, lg: 0 }}
                pl={{ lg: 16 }}
                px={{ base: 10 }}
              >
                {GOVERNMENT_CLIENTS.map((client: any) => (
                  <ClientCard key={client.name} {...client} />
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
