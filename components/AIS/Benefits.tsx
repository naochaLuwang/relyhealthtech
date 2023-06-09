import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="max-w-full h-auto bg-bgPrimary lg:px-20 px-8 py-20">
      <div className="flex flex-col ">
        <h1 className="lg:text-base text-xs">BENEFITS</h1>
        <h1 className="lg:text-3xl text-2xl font-bold">Key Benefits</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-10 mt-5 gap-6">
        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Improved Productivity and Efficiency
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            Our Asset Management software helps businesses improve their
            productivity and efficiency by providing a systemized approach to
            asset management. This results in reduced downtime caused by
            equipment failure and optimized asset usage.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Increased Return on Investment (ROI)
          </h1>
          <p className="lg:text-base text-sm text-justify leading-relaxed">
            By using our software, businesses can make informed decisions about
            their assets, such as when to repair or replace them. This can help
            them optimize their asset usage and reduce costs, resulting in
            increased ROI.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Centralized Platform
          </h1>
          <p className="lg:text-base text-sm text-justify leading-relaxed">
            Our software provides a centralized platform for managing assets,
            which makes it easier for organizations to track and manage their
            assets efficiently.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Accurate Financial Reporting
          </h1>
          <p className="lg:text-base text-sm text-justify leading-relaxed">
            Our Asset Management software helps organizations improve the
            accuracy of their financial reporting by providing detailed reports
            on asset usage and performance.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Informed Decision Making
          </h1>
          <p className="lg:text-base text-sm text-justify leading-relaxed">
            By using our software, businesses can make informed decisions about
            their assets based on real-time data, which helps them stay
            competitive in today&apos;s market.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Reduced Maintenance Costs
          </h1>
          <p className="lg:text-base text-sm text-justify leading-relaxed">
            Our Asset Management software helps organizations reduce maintenance
            costs by scheduling maintenance tasks and identifying opportunities
            to optimize asset usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
