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
            Radiology Information System (RIS)
          </h1>

          <p className="text-justify mt-5 lg:text-lg text-sm leading-relaxed">
            Introducing Rely RIS, a comprehensive platform that optimizes
            patient scheduling and workflow, improves communication between
            radiologists and referring physicians, streamlines revenue cycle
            management, and enhances inventory management. With real-time access
            to critical data and analytics, decision-making is improved, and
            overall process improvement is enabled. Rely RIS offers a more
            intelligent approach to imaging, leveraging the information residing
            in the RIS to improve radiology workflow and department performance,
            making it an essential tool for healthcare organizations looking to
            streamline radiology processes and improve overall patient outcomes.
          </p>
        </div>
        <div>
          <Image
            src="/adicon/Radiography-bro.svg"
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
