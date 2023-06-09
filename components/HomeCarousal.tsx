"use client";
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

const loadingImage = () => {
  return (
    <div>
      <h1>Loading Image</h1>
    </div>
  );
};

const HomeCarousal = ({ carousalImages, loadingImage }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [loading]);

  return (
    <Box display={{ base: "none", lg: "block" }}>
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
                priority={true}
                loader={loadingImage}
              />
            </Box>
          ))}
        </Carousel>
      ) : (
        <Skeleton height={96} isLoaded={loading} fadeDuration={1} />
      )}
    </Box>
  );
};

export default HomeCarousal;
