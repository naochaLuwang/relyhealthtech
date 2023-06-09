// @ts-ignore
import Benefits from "@/components/LIS/Benefits";
import LisVideo from "@/components/LIS/LisVideo";

import Modules from "@/components/LIS/Modules";
// @ts-ignore
import ProductOverview from "@/components/LIS/ProductOverview";
import React from "react";

export const metadata = {
  title: "Rely LIS | Rely Healthcare Technologies",
  icons: {
    icon: "/rfavicon.png",
  },
};

const LISPage = () => {
  return (
    <div>
      <ProductOverview />
      <Benefits />
      <div className="w-full h-auto lg:px-20 px-10 pt-10 pb-10">
        <h1 className="text-center text-3xl font-bold mb-10">MODULES</h1>

        <Modules />
      </div>
      <LisVideo />
    </div>
  );
};

export default LISPage;
