import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <div className="w-full  lg:px-20 lg:py-20 px-8 py-10">
      <div className="flex items-center flex-col lg:flex-row lg:h-96 h-auto justify-between">
        <div className="flex flex-col max-w-2xl">
          <div>
            <h1 className="lg:text-lg text-sm">Prodct Overview</h1>
          </div>
          <h1 className="lg:text-4xl text-2xl font-bold">
            Pharmacy Information System (PIS)
          </h1>

          <p className="text-justify mt-5 lg:text-base text-sm">
            Introducing Rely PIS, the world-class pharmacy management software
            designed for pharmacy owners. Our software is designed to eliminate
            errors while dispensing medicines and provide complete control over
            medication stocks.
          </p>

          <p className="text-justify lg:text-base text-sm mt-5">
            Rely PIS is customizable to meet the unique requirements of your
            pharmacy, ensuring that you have a system that is tailored to your
            needs. With our automated ordering, dispensing, and inventory
            management processes, our software helps improve the efficiency of
            your pharmacy staff.
          </p>

          <p className="text-justify lg:text-base text-sm mt-5">
            Our software ensures that you stay compliant with medication safety
            regulations and standards, giving you the peace of mind that
            you&apos;re providing safe and effective care to your patients.
            Additionally, Rely PIS provides valuable data and analytics to aid
            in informed decision-making about operations and patient care.
          </p>
        </div>
        <div>
          <Image
            src="/adicon/Pharmacist-bro.svg"
            alt="lab"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
