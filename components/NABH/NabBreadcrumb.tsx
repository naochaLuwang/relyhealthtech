"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Text,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

interface NabBreadProps {
  title: string;
}

const NabBreadcrumb: React.FC<NabBreadProps> = ({ title }) => {
  return (
    <Breadcrumb
      spacing="8px"
      maxW={"7xl"}
      mx="auto"
      mt="5"
      bg="gray.100"
      py="2"
      px="4"
      rounded="md"
      separator={<ChevronRightIcon color="tomato" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/nabh_checklist">Nabh Checklists</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <Text display={{ base: "none", lg: "block" }}>{title}</Text>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default NabBreadcrumb;
