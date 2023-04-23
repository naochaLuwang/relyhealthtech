"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [loading]);
  return (
    <Box display={{ base: "block", lg: "none" }}>
      {!loading ? (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          rewindWithAnimation={true}
          autoPlaySpeed={10000}
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
                loading="eager"
              />
            </Box>
          ))}
        </Carousel>
      ) : (
        // <div className="w-full h-96">
        //   <h1>Loading....</h1>
        // </div>
        <Skeleton height={56} />
      )}
    </Box>
  );
};

export default HomeCarousalMobile;
