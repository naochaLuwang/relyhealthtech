import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { FaBinoculars } from "react-icons/fa";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <div className=" w-full h-auto bg-backgroundColor py-10 px-20">
      <div className="grid grid-cols-3 max-w-7xl mx-auto ml-10">
        <div className="w-80 h-96  flex flex-col py-8 space-y-4 items-center px-8 bg-buttonColor rounded-lg">
          <h1 className="text-2xl font-semibold text-brand">OUR MISSION</h1>
          <TbTargetArrow className="h-32 w-32 text-brand" />
          <p className="text-justify ">
            Design and develop innovative and affordable world class Healthcare
            IT solutions and services which will enable & empower every person
            and every organization in the healthcare ecosystem
          </p>
        </div>
        <div className="w-80 h-96  flex flex-col py-8 space-y-4 items-center px-8 bg-buttonColor rounded-lg">
          <h1 className="text-2xl font-semibold text-brand">OUR VISION</h1>
          <FaBinoculars className="h-24 w-24 text-brand" />
          <p className="text-justify ">
            We belive in the motto &quot;Be great at what you do&quot;. We
            aspire to be one of the most valuable IT healthcare companies in the
            world
          </p>
        </div>

        <div className="w-80 h-96  flex flex-col py-8 space-y-4 items-center px-8 bg-buttonColor rounded-lg">
          <h1 className="text-2xl font-semibold text-brand">OUR CLIENTS</h1>
          <Image
            src="/adicon/clients.png"
            alt="clients"
            width={80}
            height={80}
          />
          <p className="text-justify ">
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
