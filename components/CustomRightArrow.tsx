"use client";
import { Button, Box } from "@chakra-ui/react";
import { TiChevronRight } from "react-icons/ti";
import React from "react";

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Button
      onClick={() => onClick()}
      className="absolute right-20 rounded-full w-14 h-14 bg-card bg-opacity-30 hover:bg-primary hover:bg-opacity-10"
    >
      <TiChevronRight className="h-16 w-16 text-card " />
    </Button>
  );
};

export default CustomRightArrow;
