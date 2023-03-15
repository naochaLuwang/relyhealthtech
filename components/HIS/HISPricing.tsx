"use client";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

import {
  hospitalBasicFeatures,
  hospitalHidden,
  hospitalStandard,
  hospitalStandardHidden,
  hospitalPremium,
  premiumHidden,
} from "../../lib/data";

type Feature = {
  name: string;
};

const HISPricing = () => {
  const [basicFeatures, setBasicFeatures] = useState(false);
  const [standard, setStandard] = useState(false);
  const [premium, setPremium] = useState(false);
  return (
    <div className="bg-backgroundColor py-10 ">
      <div
        className={`${
          basicFeatures || standard || premium
            ? "max-w-7xl px-6 py-4 lg:h-auto  mx-auto items-center lg:py-16 "
            : "max-w-7xl px-6 py-4 lg:h-auto  mx-auto items-center lg:py-16 "
        }`}
      >
        <div className="flex  justify-center ">
          <div className="flex-col lg:space-y-3">
            <p className="text-center text-textPrimary lg:text-3xl text-base font-bold">
              Plans
            </p>
            <h1 className="lg:text-4xl text-xl font-extrabold text-textPrimary text-center tracking-wide">
              Choose a plan tailored to your needs
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-2 md:gap-6 lg:mt-10">
          {/* Hospital Basic */}
          <div className="max-w-md lg:flex-col space-y-5 font-Quicksand bg-buttonColor  rounded-xl border border-secondary h-fit transition-transform duration-200 ease-in-out lg:hover:scale-105">
            <div className="pt-8 px-8 pb-5">
              <h1 className="text-xl font-bold text-textPrimary">
                Hospital Basic
              </h1>
              {/* features */}
              <div className="flex-col space-y-4 mt-2">
                {hospitalBasicFeatures.map((feature: Feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center space-x-2 "
                  >
                    <CheckIcon className="w-6 h-6 text-textGreen flex-shrink-0" />
                    <p className="text-base font-medium text-textPrimary">
                      {feature.name}
                    </p>
                  </div>
                ))}

                {hospitalHidden.map((feature) => (
                  <div
                    key={feature.name}
                    className={
                      basicFeatures ? "flex items-center space-x-2 " : "hidden"
                    }
                  >
                    <CheckIcon className="w-6 h-6 text-textGreen flex-shrink-0" />
                    <p className="text-base font-medium text-textPrimary">
                      {feature.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-backgroundColor ">
              <h1
                className="py-2 px-4 text-center text-lg font-bold text-primary cursor-pointer"
                onClick={() => setBasicFeatures(!basicFeatures)}
              >
                See All Features
              </h1>
            </div>
          </div>

          {/* Hospital Standard */}
          <div className="max-w-md lg:flex-col mt-10 lg:mt-0 font-Quicksand space-y-5 bg-buttonColor  rounded-xl border border-secondary h-fit transition-transform duration-200 ease-in-out lg:hover:scale-105">
            <div className="pt-8 px-8 pb-5">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-textPrimary ">
                  Hospital Standard
                </h1>
                <p className="text-sm border px-2 py-1 bg-backgroundColor rounded-2xl font-bold text-primary">
                  Popular
                </p>
              </div>
              <p className="text-md font-medium text-secondary mt-3">
                Everything in Basic, plus
              </p>
              <div className="flex-col space-y-4 mt-2">
                {hospitalStandard.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center space-x-2 "
                  >
                    <CheckIcon className="w-6 h-6 text-textGreen" />
                    <p className="text-base font-medium text-textPrimary">
                      {feature.name}
                    </p>
                  </div>
                ))}

                {hospitalStandardHidden.map((feature) => (
                  <div
                    key={feature.name}
                    className={
                      standard ? "flex items-center space-x-2 " : "hidden"
                    }
                  >
                    <CheckIcon className="w-6 h-6 text-textGreen" />
                    <p className="text-base font-medium text-textPrimary">
                      {feature.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-backgroundColor ">
              <h1
                className="py-2 px-4 text-center text-lg font-bold text-primary cursor-pointer"
                onClick={() => setStandard(!standard)}
              >
                See All Features
              </h1>
            </div>
          </div>

          {/* Hospital Premium */}

          <div className="max-w-md lg:flex-col mt-10 lg:mt-0 font-Quicksand space-y-5 bg-buttonColor  rounded-xl border border-secondary h-fit transition-transform duration-200 ease-in-out hover:scale-105">
            <div className="pt-8 px-8 pb-5">
              <h1 className="text-xl font-bold text-textPrimary">
                Hospital Premium
              </h1>

              <p className="text-md font-medium text-secondary mt-3">
                Everything in Standard, plus
              </p>
              <div className="flex-col space-y-4 mt-6">
                {hospitalPremium.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center space-x-2 "
                  >
                    <CheckIcon className="w-6 h-6 text-textGreen" />
                    <p className="text-base font-medium text-textPrimary">
                      {feature.name}
                    </p>
                  </div>
                ))}

                {premiumHidden.map((feature) => (
                  <div
                    key={feature.name}
                    className={
                      premium ? "flex items-center space-x-2 " : "hidden"
                    }
                  >
                    <CheckIcon className="w-6 h-6 text-textGreen" />
                    <p className="text-base font-medium text-textPrimary">
                      {feature.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-backgroundColor ">
              <h1
                className="py-2 px-4 text-center text-lg font-bold text-primary cursor-pointer "
                onClick={() => setPremium(!premium)}
              >
                See All Features
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HISPricing;
