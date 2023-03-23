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
              Front Office / Billing
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Registration</ListItem>
            <ListItem>Appoinment Management</ListItem>
            <ListItem>Queue Management</ListItem>
            <ListItem>IP/Daycare Patient Admission</ListItem>
            <ListItem>OP/IP/Daycare Billing</ListItem>
            <ListItem>Cashless/TPA Billing</ListItem>
            <ListItem>Package Management</ListItem>
            <ListItem>Billing Charge Master</ListItem>
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
              Clinical Modules
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Electronic Medical Report (EMR)</ListItem>
            <ListItem>Laboratory Information System</ListItem>
            <ListItem>Radiology Information System</ListItem>
            <ListItem>OP Clinical Management</ListItem>
            <ListItem>IP Clinical Management</ListItem>
            <ListItem>Discharge Management</ListItem>
            <ListItem>Ward/Bed Management</ListItem>
            <ListItem>OT Management</ListItem>
            <ListItem>Master Health Checkup Management</ListItem>
            <ListItem>Computerized Patient Order</ListItem>
            <ListItem>Antenatal Service Management</ListItem>
            <ListItem>Accident & Emergency Management</ListItem>
            <ListItem>Medical Record Department (MRD)</ListItem>
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
              Ancillary Modules
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Inventory Management Modules</ListItem>
            <ListItem>Purchase Management</ListItem>
            <ListItem>Store Management</ListItem>
            <ListItem>ncident Management</ListItem>
            <ListItem>Drug Stores & Pharmacy Management</ListItem>
            <ListItem>Accounting Management</ListItem>
            <ListItem>Equipment Maintenance</ListItem>
            <ListItem>Doctor Payment Management</ListItem>
            <ListItem>Linen & Laundry Management</ListItem>
            <ListItem>Feedback Management</ListItem>
            <ListItem>Cashless/TPA Accounting Management</ListItem>
            <ListItem>Blood Bank</ListItem>
            <ListItem>E-Prescription</ListItem>
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
              MIS Modules
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Dashboard</ListItem>
            <ListItem>Revenue Reports</ListItem>
            <ListItem>Hospital Performance Reports</ListItem>
            <ListItem>Department Wise MIS Reports</ListItem>
            <ListItem>Inventory Reports</ListItem>
            <ListItem>Pharmacy Reports</ListItem>
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
              Mobile App
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Rely App for CMD</ListItem>
            <ListItem>Rely App for Doctor</ListItem>
            <ListItem>Rely App for Nurse</ListItem>
            <ListItem>Rely App for Patients</ListItem>
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
              Dietary Modules
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList pl={4}>
            <ListItem>Retail Diet Billing</ListItem>
            <ListItem>OP/IP Diet Billing</ListItem>
            <ListItem>Dietary Order Management</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Modules;
