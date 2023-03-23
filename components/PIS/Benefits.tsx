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
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Enhanced Patient Safety
          </h1>
          <p className="text-lg text-justify">
            Rely PIS reduces medication dispensing errors, ensures timely
            administration, and reconciles medication on admission and
            discharge, leading to improved patient safety.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Improved Pharmacy Efficiency
          </h1>
          <p className="text-lg text-justify">
            Rely PIS system automates ordering, dispensing, and inventory
            management processes, which improves the efficiency of pharmacy
            staff.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Customizable to Organizational Needs
          </h1>
          <p className="text-lg text-justify">
            Rely PIS can be adapted to accommodate workflow, standards, and
            practices with less disruption and higher user adoption.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Reduced Medication Cost
          </h1>
          <p className="text-lg text-justify">
            Efficient inventory management, waste reduction, and optimized drug
            usage lead to cost savings.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Improved communication and collaboration
          </h1>
          <p className="text-lg text-justify">
            Rely PIS can facilitate communication between pharmacists,
            physicians, nurses, and other healthcare providers, leading to
            better coordination of care.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Enhanced regulatory compliance
          </h1>
          <p className="text-lg text-justify">
            Rely PIS helps pharmacies stay compliant with medication safety
            regulations and standards.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Improved patient outcomes
          </h1>
          <p className="text-lg text-justify">
            By reducing medication errors, ensuring timely medication
            administration, and optimizing medication usage, Rely PIS can
            contribute to improved patient outcomes and satisfaction.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Analytics and reporting
          </h1>
          <p className="text-lg text-justify">
            The system can provide valuable data and analytics on medication
            usage, dispensing patterns, and other key performance indicators,
            helping pharmacies make informed decisions about their operations
            and patient care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
