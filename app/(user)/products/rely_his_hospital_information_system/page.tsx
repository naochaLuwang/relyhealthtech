import HISAdvantages from "@/components/HIS/HISAdvantages";
import HISPricing from "@/components/HIS/HISPricing";
import React from "react";

const HisPage = () => {
  return (
    <div>
      {/* Hero Body */}
      <div className="bg-buttonColor ">
        {/* hero container */}
        <div className="flex  lg:max-w-7xl lg:h-full px-8 lg:px-6 py-10 mx-auto items-center justify-between space-x-5 lg:flex  lg:py-20 lg:mb-20">
          {/* left */}
          <div className="flex-col max-w-2xl space-y-5">
            <h1 className="lg:text-3xl text-xl font-bold text-textPrimary">
              Rely HIS (Hospital Management System)
            </h1>
            <p className="lg:text-lg  text-base font-medium text-secondary text-justify leading-8">
              Rely HIS is a world class Hospital Information System & it&apos;s
              a flag-ship unmatched product from Rely Healthcare Technologies .
              It is designed keeping in mind the need of Hospital Owners & Stake
              holders. It a web based Hospital Management Software that is
              developed using latest technologies to manage working of a
              hospital in a paperless environment.
            </p>
            <p className="lg:text-lg text-base font-medium text-secondary text-justify leading-8">
              Being modular in nature it easily integrates various aspects of
              hospital like Patient Registration, OPD, IPD, Billing, OPD
              Pharmacy (Drugs Distribution), Purchase and Stores. It&apos;s
              ready to use feature makes it very suitable for fastest
              implementation. Whether it is a large hospital, small sized
              hospital, or a nursing home
            </p>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className="bg-textPrimary h-fit">
        <div className="flex-col  lg:max-w-7xl  px-8 lg:px-6 py-10 mx-auto items-center justify-center space-y-5 lg:flex  lg:py-16">
          <h1 className="lg:text-3xl text-xl text-buttonColor font-bold">
            Why choose Rely HIS ?
          </h1>
          <p className="lg:text-lg text-base font-medium text-buttonColor lg:leading-loose text-justify lg:text-center">
            Rely HIS is the perfect healthcare IT solution. A single database is
            used to link patient demographics and medical records to insurance,
            billing, and cases information. These features make this a cutting
            edge HIS, which helps hospital administartors to make better &
            real-time decisions.
          </p>
        </div>
      </div>

      {/* Advantages */}
      <HISAdvantages />

      {/* pricing */}
      <HISPricing />
    </div>
  );
};

export default HisPage;
