"use client";

import {
  Text,
  Box,
  Flex,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { useState } from "react";
import { braceExpand } from "minimatch";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
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
      {
        label: "Rely AIS",
        subLabel: "Asset Information System",
        href: "/products/rely_ais",
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
  {
    label: "NABH Checklist",
    href: "/nabh_checklist",
  },
];

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [active, setActive] = useState("");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link href={navItem.href ?? "#"}>
                <Flex
                  px={4}
                  py={1}
                  fontSize={"md"}
                  fontWeight={500}
                  color={linkColor}
                  onClick={() => setActive(navItem.label)}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.900",
                    fontWeight: "semibold",
                    transition: "all 5ms ease-in-out",
                    bg: "gray.50",
                    rounded: "lg",
                  }}
                >
                  <Text
                    color={active == navItem.label ? "brand.900" : "gray.700"}
                    fontWeight={active == navItem.label ? "semibold" : "base"}
                  >
                    {navItem.label}
                  </Text>
                  <Box
                    w={navItem.label == "Product" ? 3 : 0}
                    h={navItem.label == "Product" ? 3 : 0}
                  >
                    {navItem.label == "Product" ? (
                      <ChevronDownIcon className="w-6 h-6 hover:rotate-180" />
                    ) : (
                      ""
                    )}
                  </Box>
                </Flex>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link href={href!}>
      <Box
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("purple.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "purple.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
};

export default DesktopNav;
