"use client";
import {
  Text,
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Product",
    href: "#",
    children: [
      {
        label: "Rely HIS",
        subLabel: "Hospital Information System",
        href: "/products/rely_his",
      },
      {
        label: "Rely LIS",
        subLabel: "Laboratory Information System",
        href: "/products/rely_lis",
      },
      {
        label: "Rely PIS",
        subLabel: "Pharmacy Information System",
        href: "/products/rely_pis",
      },
      {
        label: "Rely RIS",
        subLabel: "Radiology Information System",
        href: "/products/rely_ris",
      },
      {
        label: "Rely HRM",
        subLabel: "HR Management System",
        href: "/products/rely_hrm",
      },
      {
        label: "Rely IVF",
        subLabel: "Infertility Management System",
        href: "/products/rely_ivf",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Client",
    href: "/clients",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  // {
  //   label: "People",
  //   href: "#",
  // },
];

export default MobileNav;
