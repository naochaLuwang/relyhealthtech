import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <div className="w-full h-auto bg-backgroundColor pt-20 pb-32 px-20">
      <h1 className="text-4xl font-semibold  text-brand mb-10 ">
        Our <span className="text-whatsNew">Achievements</span>
      </h1>

      <div className="flex relative">
        <div className="flex flex-col space-y-7">
          <div className="flex space-x-3">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <p>
              Installed our Software in Over 100+ Hospitals and 200+ Diagnostic
              centre
            </p>
          </div>
          <div className="flex space-x-3">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <p>Provided Solution from 20 Beds to 1800 Beds Hospital</p>
          </div>
          <div className="flex space-x-3">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <p>Software running 24 x 7 in Hospitals for last 5 years.</p>
          </div>

          <div className="flex space-x-3">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <p>We are ISO, NABL and NABH approved.</p>
          </div>
        </div>

        <div className="lg:absolute lg:block hidden -right-20 overflow-hidden  transform -scale-x-100">
          <Image src="/success.png" alt="success" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
