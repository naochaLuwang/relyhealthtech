import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { FaFacebookF, FaTwitter, FaLinkedin, FaMobile } from "react-icons/fa";

const Location = ({ locations }: any) => {
  return (
    <div className="bg-buttonColor h-auto">
      <div className="max-w-7xl mx-auto py-8 lg:py-16 px-8 relative ">
        <div className="hidden lg:block lg:absolute lg:h-[50rem] lg:w-[70rem] lg:-top-20  lg:opacity-20">
          <Image
            src={"/map.svg"}
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="mb-5">
          <h1 className="text-3xl font-semibold text-textPrimary">
            OUR PRESENCE
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 z-20">
          {locations.map((location: any) => (
            <div
              key={location._id}
              className="flex flex-col bg-buttonColor w-fit h-56 px-10 items-center py-10 rounded-md shadow-lg bg-opacity-80"
            >
              <h1 className="text-2xl font-bold text-textPrimary border-b-2">
                {location.city}
              </h1>
              <p className="text-lg font-medium text-secondary">
                Rely Healthcare Technologies
              </p>
              <div className="flex items-start mt-3  space-x-2 text-center">
                {/* <MapPinIcon className="h-6 w-6 flex-shrink-0" /> */}
                <p className="text-sm font-medium text-textPrimary">
                  {location.addressLine1} {location.addressLine2}{" "}
                  {location.addressLine3}
                </p>
              </div>
              {/* <div className="flex items-center mt-3 space-x-2">
                <FaMobile className="h-6 w-6" />
                <p className="text-base font-medium text-secondary">
                  {location.phone}
                </p>
              </div> */}
              {/* <div className="flex items-center mt-3 space-x-2">
                <PhoneIcon className="h-6 w-6" />
                <p className="text-base font-medium text-secondary">
                  {location.phone}
                </p>
              </div>
              <div className="flex items-center mt-3 space-x-2">
                <EnvelopeIcon className="h-6 w-6" />
                <p className="text-base font-medium text-secondary">
                  {location.email}
                </p>
              </div> */}
            </div>
          ))}
        </div>
        {/* <div className="flex flex-col mt-20">
          <h1 className="text-xl font-bold text-primary">
            Company Bank Details
          </h1>
          <p className="text-base font-bold mt-5 text-secondary">
            RELY HEALTHCARE TECHNOLOGIES
          </p>
          <div className="flex text-base font-medium text-secondary space-x-4">
            <p className="font-bold">Bank Name</p>
            <p>HDFC BANK</p>
          </div>
          <div className="flex text-base font-medium text-secondary space-x-10 ">
            <p className="font-bold">BRANCH</p>
            <p>FANCY BAZAR-GUWAHATI-ASSAM</p>
          </div>
          <div className="flex text-base font-medium text-secondary space-x-12">
            <p className="font-bold">A/c No.</p>
            <p>50200027845141</p>
          </div>
          <div className="flex text-base font-medium text-secondary space-x-7">
            <p className="font-bold">IFSC Code</p>
            <p>HDFC0000399</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Location;
