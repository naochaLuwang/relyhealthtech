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
      py={16}
      px={{ base: 4 }}
      backgroundImage="url('/blur-hospital.jpg')"
      backgroundPosition={{ sm: "bottom", lg: "top" }}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <Text
        align="center"
        fontSize={"4xl"}
        fontWeight="bold"
        color={"brand.900"}
        mb={5}
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
        showDots={true}
        // customTransition="transform 10000ms  ease-in-out"
        // transitionDuration={10000}
        partialVisbile={false}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        removeArrowOnDeviceType="mobile"
      >
        <div className="lg:max-w-6xl mx-auto py-20  lg:h-96 h-[40rem] bg-buttonColor bg-opacity-100 lg:bg-opacity-100 rounded-xl lg:rounded-xl lg:shadow-xl shadow-lg  justify-center mb-10  space-y-5 flex flex-col lg:py-8 px-8 ">
          <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:pl-16">
              <div className="relative ">
                <div className="absolute z-20 rounded-full w-44 h-44 bg-gradient-to-tr from-fuchsia400 to-purple100 -left-6 -top-4"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full bg-gradient-to-bl from-fuchsia400 to-purple100 top-5 left-1"></div>
                <Image
                  className="relative z-30 flex-shrink-0 border-0 rounded-full"
                  src="/test1.jpeg"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="max-w-3xl lg:pr-8">
              <div className="flex flex-col space-y-5">
                <p className="text-sm text-justify text-black lg:font-medium lg:text-base">
                  We have been using RelyHIS for more than four years and very
                  satisfied with the product.
                </p>
                <p className="text-sm text-justify text-black lg:font-medium lg:text-base">
                  Previously we had a software which was a nightmare to the
                  management, we faced critical issues like service rate
                  variation, application downtime, manual billing and
                  wasn&apos;t user friendly. With RelyHIS, the billing and the
                  workflow has become fast, and patients get the right
                  information at the right time. The management and financial
                  reports are very accurate. We are overall very satisfied with
                  the product and service.
                </p>

                <p className="text-sm text-justify text-black lg:font-medium lg:text-base">
                  We are overall very satisfied with the product and service.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-8 py-2 rounded-lg bg-testimonial w-fit">
            <h1 className="text-base font-bold lg:text-xl text-buttonColor">
              Dr. Pramod Kr. Shrama
            </h1>
            <p className="text-sm font-medium text-buttonColor">
              CMD , W Pratiksha Hospital
            </p>
          </div>
        </div>
        <div className="lg:max-w-6xl  mx-auto lg:h-96 h-[40rem] bg-buttonColor bg-opacity-100 lg:bg-opacity-100   rounded-xl lg:rounded-xl shadow-lg lg:shadow-xl  justify-center   space-y-10 flex flex-col py-8 px-8">
          <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:pl-16">
              <div className="relative ">
                <div className="absolute z-20 rounded-full w-44 h-44 bg-gradient-to-tr from-fuchsia400 to-purple100 -left-6 -top-4"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full bg-gradient-to-bl from-fuchsia400 to-purple100 top-5 left-1"></div>
                <Image
                  className="relative z-30 flex-shrink-0 border-0 rounded-full"
                  src="/test2.png"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="max-w-3xl lg:pr-8">
              <div className="flex flex-col space-y-5">
                <p className="text-sm text-justify text-black lg:font-medium lg:text-base">
                  We are really happy & satisfied with RelyHIS hospital
                  management software and the support.The software is very user
                  friendly, easily customizable and it gives clear report of
                  hospital operations. As a result, we are able to make our
                  operatons more efficient using this software.
                </p>
                <p className="text-sm text-justify text-black lg:font-medium lg:text-base">
                  We truly appreciate Rely Team for customer centric approach
                  unlike many other competitors. We are proud to be associated
                  with Rely Healthcare Technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-2 pl-4 pr-4 rounded-lg lg:py-2 lg:pl-8 bg-testimonial w-fit lg:pr-8">
            <h1 className="text-base font-bold lg:text-xl text-buttonColor">
              Mr. Altaf Hussain Ahmed
            </h1>
            <p className="text-sm font-medium text-buttonColor">
              Managing Director, Seven Sisters Hospital
            </p>
          </div>
        </div>
        <div className="lg:max-w-6xl  mx-auto lg:h-96 h-[40rem] bg-buttonColor bg-opacity-100 lg:bg-opacity-100 lg:rounded-xl lg:shadow-xl rounded-xl shadow-lg justify-center   flex flex-col py-8 px-8 space-y-10">
          <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:pl-16">
              <div className="relative ">
                <div className="absolute z-20 rounded-full w-44 h-44 bg-gradient-to-tr from-fuchsia400 to-purple100 -left-6 -top-4"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full bg-gradient-to-bl from-fuchsia400 to-purple100 top-5 left-1"></div>
                <Image
                  className="relative z-30 flex-shrink-0 border-0 rounded-full"
                  src="/test3.png"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="max-w-3xl lg:pr-8">
              <div className="flex flex-col space-y-5">
                <p className="text-sm text-justify text-black lg:font-medium lg:text-base">
                  If you are looking for a top class software for hospital, then
                  RelyHIS Hospital Management Software is the answer. It is very
                  user friendly and helps in controlling pilferage in the
                  hospital, which is one of the top challenges most hospitals
                  face, apart from making operations & process efficient.
                </p>
                <p className="text-sm text-justify text-black lg:font-medium lg:text-base">
                  Thank you so much for being our healthcare IT partner and
                  looking forward to working with you for many years to come
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-2 pl-4 pr-8 rounded-lg lg:py-2 lg:pl-8 w-fit bg-testimonial lg:pr-8">
            <h1 className="text-base font-bold lg:text-xl text-buttonColor">
              Dr. Junamoni Borgohain
            </h1>
            <p className="text-sm font-medium text-buttonColor">
              MD, Kumar Nursing Home
            </p>
          </div>
        </div>

        <div className="lg:max-w-6xl  mx-auto lg:h-96 h-[40rem] bg-buttonColor bg-opacity-100 lg:bg-opacity-100 lg:rounded-xl lg:shadow-xl rounded-xl shadow-lg justify-center   flex flex-col py-8 px-8 space-y-10">
          <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:pl-16">
              <div className="relative ">
                <div className="absolute z-20 rounded-full w-44 h-44 bg-gradient-to-tr from-fuchsia400 to-purple100 -left-6 -top-4"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full bg-gradient-to-bl from-fuchsia400 to-purple100 top-5 left-1"></div>
                <Image
                  className="relative z-30 flex-shrink-0 border-0 rounded-full"
                  src="/test4.jpeg"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="max-w-3xl lg:pr-8">
              <div className="flex flex-col space-y-5">
                <p className="text-sm text-justify text-black lg:font-medium lg:text-base">
                  We have been working for over two years with Rely Healthcare
                  Technologies , and have been using their HMS. I have found it
                  user friendly. The support team understands our requirements
                  well.
                </p>
                <p className="text-sm text-justify text-black lg:font-medium lg:text-base">
                  We appreciate their attenton and availability towards our
                  organisation. Best wishes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-2 pl-4 pr-8 rounded-lg lg:py-2 lg:pl-8 w-fit bg-testimonial lg:pr-8">
            <h1 className="text-base font-bold lg:text-xl text-buttonColor">
              Dr. Deepak Goenka
            </h1>
            <p className="text-sm font-medium text-buttonColor">
              Director, IHR
            </p>
          </div>
        </div>
      </Carousel>
    </Box>
  );
};

export default ClientTestimonial;
