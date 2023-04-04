import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <div className="w-full h-auto bg-backgroundColor lg:pt-20  lg:pb-32 py-10 lg:px-20 px-8">
      <h1 className="lg:text-4xl text-2xl font-semibold  text-brand lg:mb-10 mb-5">
        Our <span className="text-whatsNew">Achievements</span>
      </h1>

      <div className="flex relative">
        <div className="flex flex-col space-y-7">
          <div className="flex items-start mt-3  space-x-2">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className="flex grow-0"
            />
            <p className="lg:text-xl text-sm font-medium text-brand">
              Installed our Software in Over 100+ Hospitals and 200+ Diagnostic
              centre
            </p>
          </div>
          <div className="flex items-start mt-3  space-x-2">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <p className="lg:text-xl text-sm font-medium text-brand">
              Provided Solution from 20 Beds to 1800 Beds Hospital
            </p>
          </div>

          <div className="flex items-start mt-3  space-x-2">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <p className="lg:text-xl text-sm font-medium text-brand">
              Software running 24 x 7 in Hospitals for last 5 years.
            </p>
          </div>

          <div className="flex items-start mt-3  space-x-2">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <p className="lg:text-xl text-sm font-medium text-brand">
              We are ISO, NABL and NABH approved.
            </p>
          </div>
        </div>

        <div className="lg:absolute lg:block hidden -right-20 overflow-hidden  transform -scale-x-100">
          <Image src="/success2.png" alt="success" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
