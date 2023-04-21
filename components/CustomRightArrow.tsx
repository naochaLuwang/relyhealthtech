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
      className="absolute w-12 h-12 rounded-full  lg:flex lg:right-12 right-4 lg:w-14 lg:h-14 bg-purple100 bg-opacity-30"
    >
      <TiChevronRight className="w-16 h-16 text-card " />
    </Button>
  );
};

export default CustomRightArrow;
