"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const HomeCarousalMobile = ({ carousalImages }: any) => {
  return (
    <Box display={{ base: "block", lg: "none" }}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        rewindWithAnimation={true}
        autoPlaySpeed={15000}
        arrows={true}
        showDots={true}
        // customTransition="transform 3000 ease-in-out"
        // transitionDuration={3000}
        // partialVisbile={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {carousalImages.map((image: any) => (
          <Box
            key={image._id}
            w={"full"}
            h={{ base: "56", lg: "96" }}
            position="relative"
          >
            <Image
              src={urlFor(image.bannerImage).url()}
              fill
              alt="banner Image"
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default HomeCarousalMobile;
