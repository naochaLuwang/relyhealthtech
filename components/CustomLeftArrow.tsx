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
      className="absolute left-12 rounded-full w-14 h-14 bg-purple100 bg-opacity-30"
    >
      <TiChevronLeft className="h-16 w-16 text-card" />
    </Button>
  );
};

export default CustomLeftArrow;
