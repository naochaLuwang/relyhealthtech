import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="max-w-full h-auto bg-bgPrimary lg:px-20 px-10 py-20">
      <div className="flex flex-col ">
        <h1>BENEFITS</h1>
        <h1 className="text-3xl font-bold">Key Benefits</h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-6">
        <div className="flex flex-col flex-1 ">
          <div className="">
            {/* <Image
              src="/adicon/integration.png"
              height={50}
              width={50}
              alt="integration"
            /> */}
            <h1 className="text-2xl font-semibold text-textPrimary">
              Seamless Integration
            </h1>
          </div>

          <p className="text-base text-justify mt-2">
            Rely LIS features a built-in interface engine that enables seamless
            integration with HIS, Billing, EMR, and reference labs. This
            integration simplifies the process of sharing laboratory results
            across different systems and departments. By leveraging this
            feature, Rely LIS allows labs to work more efficiently and
            eliminates the need for manual data entry.
          </p>

          <h1 className="text-2xl font-semibold text-justify mt-10  text-textPrimary">
            Simplify Laboratory Workflows
          </h1>
          <p className="text-justify text-base mt-2">
            Rely LIS simplifies laboratory workflows by providing a highly
            configurable application that can be customized to fit various
            laboratory workflow models. By leveraging this feature, labs can
            improve efficiency, reduce errors, and deliver accurate results.
            Rely LIS provides a single screen for accessioning, coding, and
            reporting laboratory results, which simplifies the process and
            reduces the time it takes to complete tasks.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center ">
            {/* <Image
              src="/adicon/order-history.png"
              height={40}
              width={40}
              alt="integration"
            /> */}
            <h1 className="text-2xl font-semibold text-textPrimary">
              Store Historical Results
            </h1>
          </div>
          <p className="text-base text-justify mt-2">
            Rely LIS stores all historical laboratory results, which can be
            accessed and viewed instantly on a single screen. This feature
            provides users with a comprehensive view of patient data and helps
            with better patient care. With the ability to access previous
            laboratory results, healthcare providers can make informed decisions
            about diagnosis and treatment plans.
          </p>

          <h1 className="text-2xl font-semibold text-justify mt-10 text-textPrimary">
            Customizable Application
          </h1>
          <p className="text-justify text-base mt-2">
            Rely LIS is a highly configurable application that can be customized
            to fit the needs of different laboratories. The application can be
            configured to match the laboratory&apos;s workflow, making it easier
            for users to navigate and complete tasks. Additionally, Rely LIS
            provides users with a comprehensive set of tools to customize the
            application, including custom reporting, interface mapping, and
            user-defined fields.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
