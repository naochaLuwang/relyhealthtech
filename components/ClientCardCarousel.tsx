"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Center, CardBody, Card, Image } from "@chakra-ui/react";

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
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

import React from "react";

import urlFor from "@/lib/urlFor";

const ClientCardCarousel = ({ PRIVATE_CLIENTS }: any) => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      rewindWithAnimation={true}
      autoPlaySpeed={1000}
      arrows={false}
      customTransition="transform 3000ms  ease-in-out"
      transitionDuration={3000}
      partialVisbile={true}
    >
      {PRIVATE_CLIENTS.map((client: any) => (
        <Center py={6} key={client.name} mr={{ base: 2 }}>
          <Card maxW="sm" variant={"elevated"} rounded="2xl" boxShadow={"xl "}>
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
  );
};

export default ClientCardCarousel;
