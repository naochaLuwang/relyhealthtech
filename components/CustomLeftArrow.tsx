"use client";
import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Button
      onClick={() => onClick()}
      className="absolute left-20 rounded-full w-14 h-14 hover:bg-primary hover:bg-opacity-10"
    >
      <ChevronLeftIcon className="h-12 w-12 text-primary" />
    </Button>
  );
};

export default CustomLeftArrow;
