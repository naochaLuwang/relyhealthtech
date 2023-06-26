import React from "react";

const Counter = () => {
  return (
    <div className="w-full h-auto mt-10 bg-buttonColor ">
      <div className="w-full h-auto pt-20 mx-auto max-w-7xl">
        <div className="grid w-full grid-cols-5 gap-4">
          <div className="w-full relative  bg-[#110ab1] flex flex-col items-center justify-center rounded-md  h-44 text-buttonColor">
            <div className="absolute w-20 h-20 border-2 rounded-full -top-10 border-buttonColor bg-[#110ab1]"></div>
            <h1 className="text-xl font-medium">5+ Years</h1>
            <h1 className="text-2xl font-medium">Experience</h1>
          </div>
          <div className="w-full relative  bg-[#78b8ae] flex flex-col items-center justify-center rounded-md  h-44 text-buttonColor">
            <div className="absolute w-20 h-20 border-2 rounded-full -top-10 border-buttonColor bg-[#78b8ae]"></div>
            <h1 className="text-xl font-medium">5+ Years</h1>
            <h1 className="text-2xl font-medium">Experience</h1>
          </div>
          <div className="w-full relative  bg-[#669ebb] flex flex-col items-center justify-center rounded-md  h-44 text-buttonColor">
            <div className="absolute w-20 h-20 border-2 rounded-full -top-10 border-buttonColor bg-[#669ebb]"></div>
            <h1 className="text-xl font-medium">5+ Years</h1>
            <h1 className="text-2xl font-medium">Experience</h1>
          </div>
          <div className="w-full relative  bg-[#e5ae35] flex flex-col items-center justify-center rounded-md  h-44 text-buttonColor">
            <div className="absolute w-20 h-20 border-2 rounded-full -top-10 border-buttonColor bg-[#e5ae35]"></div>
            <h1 className="text-xl font-medium">5+ Years</h1>
            <h1 className="text-2xl font-medium">Experience</h1>
          </div>
          <div className="w-full relative  bg-[#5b37c7] flex flex-col items-center justify-center rounded-md  h-44 text-buttonColor">
            <div className="absolute w-20 h-20 border-2 rounded-full -top-10 border-buttonColor bg-[#5b37c7]"></div>
            <h1 className="text-xl font-medium">5+ Years</h1>
            <h1 className="text-2xl font-medium">Experience</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
