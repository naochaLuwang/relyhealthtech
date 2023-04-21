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

const PeopleBreadcrumb: React.FC<NabBreadProps> = ({ title }) => {
  return (
    <Breadcrumb
      spacing="8px"
      maxW={"6xl"}
      mx="auto"
      mt="5"
      bg="gray.100"
      py="2"
      px="4"
      rounded="md"
      color={"brand.800"}
      separator={<ChevronRightIcon color="tomato" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/people">People</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <Text display={{ base: "none", lg: "block" }}>{title}</Text>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default PeopleBreadcrumb;
