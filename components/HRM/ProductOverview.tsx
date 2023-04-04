import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <div className="w-full  lg:px-20 lg:py-20 px-8 py-6">
      <div className="flex items-center flex-col lg:flex-row lg:h-96 h-auto justify-between">
        <div className="flex flex-col max-w-2xl">
          <div>
            <h1 className="lg:text-lg text-sm">Product Overview</h1>
          </div>
          <h1 className="lg:text-4xl text-2xl font-bold">
            HR & Payroll Management System(HRM)
          </h1>

          <p className="text-justify mt-5 lg:text-lg text-sm">
            RelyHRM is a software solution that automates and integrates several
            Human Resources processes into a single package. This HR Management
            System includes recruitment, training, payroll, leave management,
            and performance analysis functionalities. Its purpose is to reduce
            the complexity of managing HR operations and provide a centralized
            location for workforce management. RelyHRM saves time and resources
            for the organization while minimizing the risk of errors in employee
            data.
          </p>

          <p className="text-justify lg:text-lg text-sm mt-5">
            The software&apos;s centralized database allows HR managers to
            monitor and manage various employee data points, such as performance
            records, training histories, and payroll information. This data can
            provide insights that can inform strategic decision-making and help
            organizations optimize their workforce management.
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
