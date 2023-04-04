"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Center, CardBody, Card, Image, Button, Box } from "@chakra-ui/react";
import ClientRightArrow from "./ClientRightArrow";

interface Clients {
  name: string;
  image: string;
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

import React from "react";

import urlFor from "@/lib/urlFor";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import ButtonGroup from "./ClientRightArrow";

const ClientCardCarousel = ({ PRIVATE_CLIENTS }: any) => {
  return (
    <Box w="full" px={10}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        rewindWithAnimation={true}
        autoPlaySpeed={1000}
        arrows={false}
        customTransition="transform 3000ms  ease-in-out"
        transitionDuration={3000}
        partialVisbile={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {PRIVATE_CLIENTS.map((client: any) => (
          <Center py={6} key={client.name} mr={{ base: 2 }}>
            <Card
              maxW="sm"
              variant={"elevated"}
              rounded="2xl"
              boxShadow={"xl "}
            >
              <CardBody>
                <Image
                  src={urlFor(client.clientImage).url()}
                  alt="card image"
                  w={200}
                  h={140}
                  objectFit={"contain"}
                />
              </CardBody>
            </Card>
          </Center>
        ))}
      </Carousel>
    </Box>
  );
};

export default ClientCardCarousel;

const clientLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Button
      onClick={() => onClick()}
      className="absolute right-20 rounded-full w-14 h-14  bg-primary bg-opacity-10"
    >
      <TiChevronLeft className="h-16 w-16 text-card " />
    </Button>
  );
};
