"use client";
import { Button } from "@chakra-ui/react";

import { TiChevronLeft } from "react-icons/ti";

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Button
      onClick={() => onClick()}
      className="absolute w-12 h-12 rounded-full lg:flex lg:left-12 left-4 lg:w-14 lg:h-14 bg-purple100 bg-opacity-30"
    >
      <TiChevronLeft className="w-16 h-16 text-card" />
    </Button>
  );
};

export default CustomLeftArrow;
