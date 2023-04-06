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
              Inventory
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Receipts</ListItem>
            <ListItem>Issues</ListItem>
            <ListItem>Returns</ListItem>
            <ListItem>Other Transaction</ListItem>
            <ListItem>Reports</ListItem>
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
              OP Pharmacy
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>OP sale (Cash/Credit)</ListItem>
            <ListItem>OP sale as per prescription</ListItem>
            <ListItem>Medicine dispatch</ListItem>
            <ListItem>Receipts</ListItem>
            <ListItem>Returns</ListItem>
            <ListItem>Other Transactions</ListItem>
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
              IP Pharmacy
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Indent / Indent on ROL</ListItem>
            <ListItem>Receipts</ListItem>
            <ListItem>Returns</ListItem>
            <ListItem>
              Issue to patient (As per type of request) & Bill Update
            </ListItem>
            <ListItem>Return from Patient & Bill Update</ListItem>
            <ListItem>Medicine Dispatch</ListItem>
            <ListItem>Reports</ListItem>
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
            <ListItem>Item Master</ListItem>
            <ListItem>PIS Setup</ListItem>
            <ListItem>Package Management</ListItem>
            <ListItem>Software Management</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Modules;
