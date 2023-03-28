"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import CustomRightArrow from "./CustomRightArrow";
import CustomLeftArrow from "./CustomLeftArrow";

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

const ClientTestimonial = () => {
  return (
    <Box
      w="full"
      h={"auto"}
      py={20}
      backgroundImage="url('/blur-hospital.jpg')"
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <Text
        align="center"
        fontSize={"4xl"}
        fontWeight="bold"
        color={"brand.900"}
      >
        Testimonials
      </Text>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        rewindWithAnimation={true}
        autoPlaySpeed={15000}
        arrows={true}
        // customTransition="transform 10000ms  ease-in-out"
        // transitionDuration={10000}
        partialVisbile={false}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        <div className="lg:max-w-6xl mx-auto lg:h-96 h-[44rem] bg-secondary bg-opacity-0   justify-center   space-y-5 flex flex-col py-8 px-8 ">
          <div className="flex justify-between items-center flex-col lg:flex-row space-y-8 lg:space-y-0">
            <div className="lg:pl-16">
              <div className="relative ">
                <div className="w-44 h-44 bg-gradient-to-tr from-fuchsia400 to-purple100 absolute rounded-full  -left-6 -top-4 z-20"></div>
                <div className="w-40 h-40 bg-gradient-to-bl from-fuchsia400  to-purple100 absolute rounded-full  top-5 left-1 z-10"></div>
                <Image
                  className="border-0 rounded-full flex-shrink-0  relative z-30"
                  src="https://relyhealthtech.com/gallery/testimony/admin_202001140657344574_mpwguvko.jpg"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="max-w-3xl lg:pr-8">
              <div className="flex flex-col space-y-5">
                <p className="font-medium  text-base text-black text-justify">
                  We have been using RelyHIS for more than four years and very
                  satisfied with the product.
                </p>
                <p className="font-medium  text-base text-black text-justify">
                  Previously we had a software which was a nightmare to the
                  management, we faced critical issues like service rate
                  variation, application downtime, manual billing and
                  wasn&apos;t user friendly. With RelyHIS, the billing and the
                  workflow has become fast, and patients get the right
                  information at the right time. The management and financial
                  reports are very accurate. We are overall very satisfied with
                  the product and service.
                </p>

                <p className="font-medium  text-base text-black text-justify">
                  We are overall very satisfied with the product and service.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col flex py-2 rounded-lg bg-testimonial  px-8  w-fit">
            <h1 className="lg:text-xl text-lg font-bold text-buttonColor">
              Dr. Pramod Kr. Shrama
            </h1>
            <p className="text-sm font-medium text-buttonColor">
              CMD , W Pratiksha Hospital
            </p>
          </div>
        </div>
        <div className="lg:max-w-6xl mx-auto lg:h-96 h-[44rem] bg-secondary bg-opacity-0  justify-center   space-y-10 flex flex-col py-8 px-8">
          <div className="flex justify-between items-center flex-col lg:flex-row space-y-8 lg:space-y-0">
            <div className="lg:pl-16">
              <div className="relative ">
                <div className="w-44 h-44 bg-gradient-to-tr from-fuchsia400 to-purple100 absolute rounded-full  -left-6 -top-4 z-20"></div>
                <div className="w-40 h-40 bg-gradient-to-bl from-fuchsia400  to-purple100 absolute rounded-full  top-5 left-1 z-10"></div>
                <Image
                  className="border-0 rounded-full flex-shrink-0  relative z-30"
                  src="https://relyhealthtech.com/gallery/testimony/admin_202001140732467870_wn5a1aap.png"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="max-w-3xl lg:pr-8">
              <div className="flex flex-col space-y-5">
                <p className="font-medium  text-base text-black text-justify">
                  We are really happy & satisfied with RelyHIS hospital
                  management software and the support.The software is very user
                  friendly, easily customizable and it gives clear report of
                  hospital operations. As a result, we are able to make our
                  operatons more efficient using this software.
                </p>
                <p className="font-medium  text-base text-black text-justify">
                  We truly appreciate Rely Team for customer centric approach
                  unlike many other competitors. We are proud to be associated
                  with Rely Healthcare Technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col flex lg:py-2 rounded-lg lg:pl-8 bg-testimonial w-fit lg:pr-8 ">
            <h1 className="lg:text-xl text-lg font-bold text-buttonColor">
              Mr. Altaf Hussain Ahmed
            </h1>
            <p className="text-sm font-medium text-buttonColor">
              Managing Director, Seven Sisters Hospital
            </p>
          </div>
        </div>
        <div className="lg:max-w-6xl mx-auto lg:h-96 h-[44rem] bg-secondary bg-opacity-0 justify-center  rounded-2xl flex flex-col py-8 px-8 space-y-10">
          <div className="flex justify-between items-center flex-col lg:flex-row space-y-8 lg:space-y-0">
            <div className="lg:pl-16">
              <div className="relative ">
                <div className="w-44 h-44 bg-gradient-to-tr from-fuchsia400 to-purple100 absolute rounded-full  -left-6 -top-4 z-20"></div>
                <div className="w-40 h-40 bg-gradient-to-bl from-fuchsia400  to-purple100 absolute rounded-full  top-5 left-1 z-10"></div>
                <Image
                  className="border-0 rounded-full flex-shrink-0  relative z-30"
                  src="https://relyhealthtech.com/gallery/testimony/admin_202001140742464649_li123qld.png"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="max-w-3xl lg:pr-8">
              <div className="flex flex-col space-y-5">
                <p className="font-medium  text-base text-black text-justify">
                  If you are looking for a top class software for hospital, then
                  RelyHIS Hospital Management Software is the answer. It is very
                  user friendly and helps in controlling pilferage in the
                  hospital, which is one of the top challenges most hospitals
                  face, apart from making operations & process efficient.
                </p>
                <p className="font-medium  text-base text-black text-justify">
                  Thank you so much for being our healthcare IT partner and
                  looking forward to working with you for many years to come
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col flex lg:py-2 lg:pl-8 w-fit bg-testimonial rounded-lg lg:pr-8 ">
            <h1 className="lg:text-xl text-lg font-bold text-buttonColor">
              Dr. Junamoni Borgohain
            </h1>
            <p className="text-sm font-medium text-buttonColor">
              MD, Kumar Nursing Home
            </p>
          </div>
        </div>
      </Carousel>
    </Box>
  );
};

export default ClientTestimonial;
