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
      className="sm:hidden lg:flex lg:absolute right-12 rounded-full w-14 h-14  bg-purple100 bg-opacity-30"
    >
      <TiChevronRight className="h-16 w-16 text-card " />
    </Button>
  );
};

export default CustomRightArrow;
