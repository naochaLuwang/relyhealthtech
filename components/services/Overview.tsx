import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div className="w-full h-auto px-8 lg:h-96 max-w-7xl mx-auto lg:py-20 py-10">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col space-y-5 flex-1">
          <h1 className="text-brand lg:text-3xl text-2xl font-semibold">
            Services
          </h1>
          <p className="lg:text-lg text-base lg:font-medium text-secondary">
            Transform your business with our expert digital product solutions.
            We help you identify market gaps, target your audience, and create
            products that solve real-world problems. Build your next project
            with us and unlock the full potential of your business.
          </p>
        </div>
        <div className="flex-1 lg:pl-32 lg:pb-36  lg:-mt-20">
          <Image src="/crm.svg" alt="crm" height={500} width={500} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
