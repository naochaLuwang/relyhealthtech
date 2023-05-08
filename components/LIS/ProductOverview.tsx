import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <div className="w-full  lg:px-20 lg:py-20 px-8 py-10">
      <div className="flex items-center flex-col lg:flex-row lg:h-96 h-auto justify-between">
        <div className="flex flex-col max-w-2xl">
          <div>
            <h1 className="lg:text-lg text-sm">Product Overview</h1>
          </div>
          <h1 className="lg:text-4xl text-2xl font-bold">
            Laboratory Information System (LIS)
          </h1>

          <p className="text-justify mt-5 lg:text-base text-sm leading-relaxed">
            Rely Laboratory Information System (LIS) is a powerful clinical
            laboratory software designed to streamline laboratory workflows,
            store historical laboratory results, and simplify the process of
            accessioning, coding, and reporting laboratory results. Rely LIS is
            a highly configurable application that is customized to facilitate a
            wide variety of laboratory workflow models.
          </p>

          <p className="text-justify lg:text-base text-sm leading-relaxed mt-5">
            Rely LIS is a cloud based lab application with complete lab
            interfaces for diagnostic centre.By leveraging Rely LIS, labs can
            improve efficiency, reduce errors, and deliver accurate results.
          </p>
        </div>
        <div>
          <Image
            src="/adicon/Laboratory-bro.svg"
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
