"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Image } from "@chakra-ui/react";
import urlFor from "@/lib/urlFor";

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

const HomeCarousal = ({ carousalImages }: any) => {
  return (
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
      partialVisbile={true}
    >
      {carousalImages.map((image: any) => (
        <Box key={image._id}>
          <Image src={urlFor(image.bannerImage).url()} alt="banner Image" />
        </Box>
      ))}
    </Carousel>
  );
};

export default HomeCarousal;
