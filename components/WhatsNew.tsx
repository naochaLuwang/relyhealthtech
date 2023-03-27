"use client";

import { useRef } from "react";
import Carousel from "react-elastic-carousel";

const WhatsNew = ({ BANNER_NEW }: any) => {
  const carouselRef = useRef(null);
  let resetTimeout: any;
  return (
    <div className="flex w-full h-10 border-2 border-whatsNew">
      <div className="flex items-center justify-start bg-whatsNew w-56  border-right rounded-tr-full">
        <h1 className="py-1 px-4 font-semibold text-buttonColor">
          What&apos;s New
        </h1>
      </div>
      <div className=" py-2 flex-1 overflow-hidden   bg-buttonColor px-4">
        <Carousel
          verticalMode
          itemsToShow={1}
          showArrows={false}
          enableAutoPlay={true}
          //   @ts-ignore
          itemPosition="consts.START"
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
            <h1 className="text-md " key={banner._id}>
              {banner.banner}
            </h1>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WhatsNew;
