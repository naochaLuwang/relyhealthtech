"use client";
import { Button, Box } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Button
      onClick={() => onClick()}
      className="absolute right-20 rounded-full w-14 h-14 hover:bg-primary hover:bg-opacity-10"
    >
      <ChevronRightIcon className="h-12 w-12 text-primary" />
    </Button>
  );
};

export default CustomRightArrow;
