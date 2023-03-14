"use client";
import urlFor from "@/lib/urlFor";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const HomeCarousal = ({ carousalImages }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = carousalImages.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex
          pos="relative"
          h={{ md: "400px", base: "200px" }}
          w="full"
          {...carouselStyle}
        >
          {carousalImages.map((slide: any) => (
            <Box key={slide._id} flex="none" boxSize="full" shadow="md">
              <Image
                src={urlFor(slide.bannerImage).url()}
                alt="carousel image"
                boxSize="full"
                backgroundSize="contain"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeCarousal;
