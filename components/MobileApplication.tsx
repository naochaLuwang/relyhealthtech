"use client";
import { Box, Image } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const MobileApplication = () => {
  return (
    <Box w="full" h={{ sm: "md", lg: "3xl" }} bg="brand.700" py={10} mt={20}>
      <Image
        src="/mobile.png"
        alt="Mobile Application"
        boxSize={"full"}
        objectFit={{ sm: "scale-down", lg: "contain" }}
      ></Image>
    </Box>
  );
};

export default MobileApplication;
