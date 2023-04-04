"use client";

import { useRef } from "react";
import Carousel from "react-elastic-carousel";

const WhatsNew = ({ BANNER_NEW }: any) => {
  const carouselRef = useRef(null);
  let resetTimeout: any;
  return (
    <div className="flex w-full h-10 border-2 border-whatsNew">
      <div className="flex items-center justify-start relative bg-whatsNew lg:w-56 w-fit pr-3 lg:pr-0  border-right ">
        <h1 className="py-1 px-4 font-semibold text-buttonColor">
          What&apos;s New
        </h1>
        <div className="absolute bg-whatsNew right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-t border-indigo-500"></div>
      </div>
      <div className=" lg:py-2 py-1 flex-1 overflow-hidden items-center justify-center   bg-buttonColor px-4">
        <Carousel
          verticalMode
          itemsToShow={1}
          showArrows={false}
          enableAutoPlay={true}
          //   @ts-ignore
          itemPosition="flex-start"
          autoTabIndexVisibleItems={false}
          ref={carouselRef}
          isRTL={false}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              // @ts-ignore
              carouselRef?.current?.goTo(0);
            }, 4000); // same time
          }}
        >
          {BANNER_NEW.map((banner: any) => (
            <h1
              className="text-xs  lg:text-base font-medium text-textPrimary "
              key={banner._id}
            >
              {banner.banner}
            </h1>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WhatsNew;
