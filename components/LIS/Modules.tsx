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
            <ListItem>Appoinment</ListItem>
            <ListItem>Patient Sticker</ListItem>
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
              Phlebotomy
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Queue Management</ListItem>
            <ListItem>Sample Collection & ID Generation</ListItem>
            <ListItem>Barcode Label Printing</ListItem>
            <ListItem>Sample Dispatch</ListItem>
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
              LIS
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Sample Acknowledgement / Rejection</ListItem>
            <ListItem>Result Entry / Lab result from devices</ListItem>
            <ListItem>Report Finalization</ListItem>
            <ListItem>Report Printing</ListItem>
            <ListItem>Report Dispatch</ListItem>
            <ListItem>LIS Dashboard</ListItem>
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
            <ListItem>LIS Setup</ListItem>
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
            <ListItem>Interfaces (Unidirectional & Biirectional)</ListItem>
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
