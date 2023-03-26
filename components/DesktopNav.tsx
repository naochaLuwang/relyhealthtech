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
import { Link } from "@chakra-ui/next-js";

import { ChevronRightIcon } from "@chakra-ui/icons";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Product",
    href: "/products",
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
    href: "#",
  },
  {
    label: "Client",
    href: "/clients",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "People",
    href: "#",
  },
];

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: "brand.900",
                  fontWeight: "bold",
                  transition: "all 5ms ease-in-out",
                }}
              >
                {navItem.label}
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
    <Link
      href={href!}
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
    </Link>
  );
};

export default DesktopNav;
