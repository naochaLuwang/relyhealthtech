import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <div className="w-full  lg:px-20 lg:py-20 px-8 py-8">
      <div className="flex items-center flex-col lg:flex-row lg:h-96 h-auto justify-between">
        <div className="flex flex-col max-w-2xl">
          <div>
            <h1 className="lg:text-lg text-base">Product Overview</h1>
          </div>
          <h1 className="lg:text-4xl text-2xl font-bold">
            Asset Information System (AIS)
          </h1>

          <p className="text-justify mt-5 lg:text-base text-sm leading-relaxed">
            Rely AIS is a web-based Asset Management software designed to
            simplify the tracking, maintenance, and management of assets for
            organizations. The software provides a centralized platform for
            organizations to manage their assets efficiently using a systemized
            approach. With our software, businesses can monitor and manage their
            assets effectively, which can result in improvements to productivity
            and efficiency, thereby increasing their return on investment.
          </p>

          <p className="text-justify lg:text-base mt-5 text-sm leading-relaxed">
            The software&apos;s features include asset tracking, scheduling
            maintenance tasks, and generating reports on asset usage and
            performance. By using our Asset Management software, organizations
            can increase their visibility into asset utilization, reduce
            downtime caused by equipment failure, and improve the accuracy of
            financial reporting. The software can also help companies make
            informed decisions about when to repair or replace assets, as well
            as identify opportunities to optimize asset usage and reduce costs.
          </p>

          {/* <p className="text-justify text-lg mt-5">
            Our software ensures that you stay compliant with medication safety
            regulations and standards, giving you the peace of mind that
            you&apos;re providing safe and effective care to your patients.
            Additionally, Rely PIS provides valuable data and analytics to aid
            in informed decision-making about operations and patient care.
          </p> */}
        </div>
        <div>
          <Image src="/adicon/HR.svg" alt="lab" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
