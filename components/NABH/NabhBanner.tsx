import React from "react";

const NabhBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 px-4 lg:h-60 h-36 bg-card">
      <h1 className="text-2xl font-semibold lg:text-4xl text-buttonColor">
        NABH CheckList
      </h1>
      <h2 className="text-xl lg:text-3xl font-base text-buttonColor">
        Helpful tips for healthcare facility
      </h2>
    </div>
  );
};

export default NabhBanner;
