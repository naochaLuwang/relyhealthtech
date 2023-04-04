import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <div className="w-full relative lg:px-20 lg:py-20 px-8 py-10">
      <div className="flex items-center flex-col lg:flex-row lg:h-96 h-auto justify-between">
        <div className="flex flex-col max-w-2xl">
          <div>
            <h1 className="lg:text-lg text-base">Product Overview</h1>
          </div>
          <h1 className="lg:text-4xl text-2xl font-bold text-brand">
            Hospital information System
          </h1>

          <p className="text-justify mt-5 lg:text-base text-sm leading-2 text-secondary">
            Rely HIS is a world class Hospital Information System & it&apos;s a
            flag-ship unmatched product from Rely Healthcare Technologies . It
            is designed keeping in mind the need of Hospital Owners & Stake
            holders. It a web based Hospital Management Software that is
            developed using latest technologies to manage working of a hospital
            in a paperless environment.
          </p>

          <p className="text-justify lg:text-base text-sm mt-5 text-secondary">
            Being modular in nature it easily integrates various aspects of
            hospital like Patient Registration, OPD, IPD, Billing, OPD Pharmacy
            (Drugs Distribution), Purchase and Stores. It’s ready to use feature
            makes it very suitable for fastest implementation. Whether it is a
            large hospital, small sized hospital, or a nursing home.
          </p>

          <p className="text-justify lg:text-base text-sm mt-5 text-secondary">
            Rely HIS is the perfect healthcare IT solution. A single database is
            used to link patient demographics and medical records to insurance,
            billing, and cases information. These features make this a cutting
            edge HIS, which helps hospital administartors to make better &
            real-time decisions.
          </p>
        </div>
        <div className="lg:absolute lg:flex right-0 -top-7 hidden">
          <Image src="/his.png" alt="lab" width={900} height={900} />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
