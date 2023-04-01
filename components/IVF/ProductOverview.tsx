import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <div className="w-full  lg:px-20 lg:py-20 px-8 py-10">
      <div className="flex items-center flex-col lg:flex-row lg:h-96 h-auto justify-between">
        <div className="flex flex-col max-w-2xl">
          <div>
            <h1 className="text-lg">Prodct Overview</h1>
          </div>
          <h1 className="text-4xl font-bold">
            Infertility Management Software (IVF)
          </h1>

          <p className="text-justify mt-5 text-lg">
            Introducing Rely IVF,a comprehensive software solution that has been
            designed to simplify the management of infertility-related processes
            in healthcare organizations. It is an all-in-one package that
            enables healthcare professionals to easily manage various
            infertility management tasks from a single platform. With RelyIVF,
            healthcare organizations can streamline their back-office
            operations, reducing the need for paperwork and enhancing
            productivity.
          </p>
        </div>
        <div>
          <Image
            src="/adicon/Infertility.svg"
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
