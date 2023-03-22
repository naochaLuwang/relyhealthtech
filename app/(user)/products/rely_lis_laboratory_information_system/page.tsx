// @ts-ignore
import Benefits from "@/components/LIS/Benefits";
import LisVideo from "@/components/LIS/LisVideo";

import Modules from "@/components/LIS/Modules";
// @ts-ignore
import ProductOverview from "@/components/LIS/ProductOverview";
import React from "react";

const LISPage = () => {
  return (
    <div>
      <ProductOverview />
      <Benefits />
      <div className="w-full h-auto px-20 pt-10 pb-10">
        <h1 className="text-center text-3xl font-bold">MODULES</h1>

        <Modules />
      </div>
      <LisVideo />
    </div>
  );
};

export default LISPage;
