"use client";

import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const Modules = () => {
  return (
    // @ts-ignore

    <Accordion
      defaultIndex={[0]}
      allowToggle
      w="2xl"
      borderX="1px solid"
      borderColor={"gray.500"}
      rounded={"md"}
      mt={10}
    >
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{
              bg: "purple.50",
              color: "purple.900",
              fontWeight: "bold",
            }}
          >
            <Box as="span" flex="1" textAlign="left">
              Patient Administration
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Couple Registration</ListItem>
            <ListItem>Appoinment Management</ListItem>
            <ListItem>Patient Complete History Collection Module</ListItem>
            <ListItem>Treatment Plan</ListItem>
            <ListItem>Clinical Module</ListItem>
            <ListItem>ART module</ListItem>
            <ListItem>Patient Consent Forms</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{
              bg: "purple.50",
              color: "purple.900",
              fontWeight: "bold",
            }}
          >
            <Box as="span" flex="1" textAlign="left">
              Billing
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Cash</ListItem>
            <ListItem>Credit</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{
              bg: "purple.50",
              color: "purple.900",
              fontWeight: "bold",
            }}
          >
            <Box as="span" flex="1" textAlign="left">
              Reports
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Daily Collection Report</ListItem>

            <ListItem>MIS Reports</ListItem>
            <ListItem>Graphical Reports</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{
              bg: "purple.50",
              color: "purple.900",
              fontWeight: "bold",
            }}
          >
            <Box as="span" flex="1" textAlign="left">
              Administration
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Role Wise User Management</ListItem>
            <ListItem>Rate Master</ListItem>

            <ListItem>Package Management</ListItem>
            <ListItem>Software Management</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{
              bg: "purple.50",
              color: "purple.900",
              fontWeight: "bold",
            }}
          >
            <Box as="span" flex="1" textAlign="left">
              Interfaces & Integration
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Laboratory Information System (LIS)</ListItem>
            <ListItem>SMS & WhatsApp Integration</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{
              bg: "purple.50",
              color: "purple.900",
              fontWeight: "bold",
            }}
          >
            <Box as="span" flex="1" textAlign="left">
              Deployment
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Cloud Ready</ListItem>
            <ListItem>iOS & Android apps</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Modules;
