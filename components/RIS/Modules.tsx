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
      w={{ lg: "2xl", sm: "base" }}
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
            <ListItem>Patient Registration</ListItem>
            <ListItem>Appoinment Management</ListItem>
            <ListItem>Bar Code/QR Code/SMS Integration</ListItem>
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
              Radiology Reporting
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Radio reports creation/sign-off</ListItem>
            <ListItem>Dispatch Reports</ListItem>
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
            <ListItem>Doctor Commission Report</ListItem>
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
            <ListItem>Integration between RIS & PACS</ListItem>
            <ListItem>Patient Portal / Result uploaded on website</ListItem>
            <ListItem>e-mails</ListItem>
            <ListItem>SMS for various events</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Modules;
