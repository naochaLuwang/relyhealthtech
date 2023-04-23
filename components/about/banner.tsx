import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { FaBinoculars } from "react-icons/fa";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <div className="flex items-center w-full h-auto py-10 bg-backgroundColor lg:justify-between">
      <div className="grid grid-cols-1 px-8 mx-auto lg:grid-cols-3 max-w-7xl gap-y-5 lg:gap-x-10 ">
        <div className="lg:w-96 w-full  h-[27rem] shadow-lg   flex flex-col py-8 space-y-4 items-center   px-8 bg-buttonColor rounded-xl">
          <h1 className="text-2xl font-semibold text-brand">OUR MISSION</h1>
          <TbTargetArrow className="w-32 h-32 text-brand" />
          <p className="text-sm text-justify lg:text-base">
            Design and develop innovative and affordable world class Healthcare
            IT solutions and services which will enable & empower every person
            and every organization in the healthcare ecosystem
          </p>
        </div>
        <div className="lg:w-96 w-full h-[27rem]  flex flex-col py-8 space-y-4 items-center px-8 bg-buttonColor rounded-xl shadow-lg">
          <h1 className="text-2xl font-semibold text-brand">OUR VISION</h1>
          <FaBinoculars className="w-32 h-32 text-brand" />
          <p className="text-sm text-justify lg:text-base">
            We belive in the motto &quot;Be great at what you do&quot;. We
            aspire to be one of the most valuable IT healthcare companies in the
            world
          </p>
        </div>

        <div className="lg:w-96 w-full h-[27rem]  flex flex-col py-8 space-y-4 items-center px-8 bg-buttonColor rounded-xl shadow-lg">
          <h1 className="text-2xl font-semibold text-brand">OUR CLIENTS</h1>
          <div className="relative flex-shrink-0 w-32 h-32">
            <Image src="/handshake.png" alt="clients" fill />
          </div>

          <p className="text-sm text-justify lg:text-base">
            We provide many ways for our clients to give us feedback to improve
            existing functionality and operations, and to add enhancement that
            really matter. We encourage dialogue and exchange of ideas between
            our clients and our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
