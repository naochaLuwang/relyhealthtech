"use client";

import VerticalCarousel from "./VerticalCarousal";

const WhatsNew = ({ BANNER_NEW }: any) => {
  return (
    <div className="flex w-full h-12 lg:h-10">
      <div className="flex items-center justify-start relative bg-[#6ebf4b] lg:w-56 w-fit pr-3 lg:pr-0  border-right ">
        <h1 className="px-4 py-1 font-semibold text-buttonColor">
          What&apos;s New
        </h1>
        <div className="absolute bg-[#6ebf4b] right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-t border-[#25D366]"></div>
      </div>
      <div className="items-center justify-center flex-1 px-4 py-1 overflow-hidden lg:py-2 bg-buttonColor">
        <VerticalCarousel items={BANNER_NEW} />
      </div>
    </div>
  );
};

export default WhatsNew;

export const revalidate = 60;

//  border-[#6ebf4b]
