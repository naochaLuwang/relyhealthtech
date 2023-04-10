"use client";

import { Button } from "@chakra-ui/react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="w-full relative">
      <button
        className="absolute w-fit -top-32 -left-12"
        onClick={() => previous()}
      >
        <TiChevronLeft className="h-8 w-8" />
      </button>

      <button
        className="absolute w-fit -top-32 -right-12"
        onClick={() => next()}
      >
        <TiChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
};
export default ButtonGroup;
