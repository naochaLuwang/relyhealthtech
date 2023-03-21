import React from "react";

const HRMHero = () => {
  return (
    <div className="flex  max-w-7xl lg:h-full px-6 py-4 mx-auto items-center justify-between space-x-5 lg:flex  lg:py-24">
      <div className="flex-col max-w-2xl lg:space-y-5 space-y-2">
        <h1 className="text-2xl font-bold text-primary">
          Rely HRM <br className="lg:hidden" />
          <span className="text-sm lg:text-xl font-medium">
            (HR & Payroll Management System)
          </span>
        </h1>
        <p className="lg:text-lg text-base font-medium text-secondary text-justify leading-8">
          RelyHRM software is designed to automate the Human Resources process
          of an organisation. This software computerises and integrate several
          HR processes like recruitment, training, payroll, leave management,
          performance analysis etc., into a single robust package.
        </p>
        <p className="lg:text-lg text-base font-medium text-secondary text-justify leading-8">
          An HR Management System should ease complexities in managing HR
          operations and contain all vital elements of workforce management. The
          purpose of an HRM is to pass on greater benefits for any enterprise
          via automation and reducing data redundancy.
        </p>
      </div>
    </div>
  );
};

export default HRMHero;
