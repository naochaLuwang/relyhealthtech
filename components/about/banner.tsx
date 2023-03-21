import React from "react";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <div className="relative bg-white lg:h-80 flex items-center h-fit py-8 px-8 lg:py-0 lg:px-0 ">
      <div className="lg:max-w-5xl max-w-sm  flex flex-col lg:flex-row mx-auto lg:space-x-14 items-center justify-center relative">
        <div className="hidden lg:block absolute -top-28 -left-24 h-96 w-96">
          <Image
            src={"/sideblob.svg"}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="md:flex-col space-x-2 md:space-x-0 flex md:justify-between  mt-2 px-6  py-4 lg:py-16 ">
          <h1 className="text-2xl font-bold lg:text-buttonColor text-primary relative z-10">
            Our
          </h1>
          <h1 className=" text-2xl  md:mt-2 font-bold relative z-10 lg:text-buttonColor text-primary ">
            Mission
          </h1>
        </div>
        <div>
          <h1 className="lg:text-xl text-base  font-medium text-secondary text-justify leading-8 lg:p-6">
            Design & develop innovative and affordable world class healthcare IT
            solutions and services which will enable & empower every person &
            every organization in the healthcare ecosystem
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
