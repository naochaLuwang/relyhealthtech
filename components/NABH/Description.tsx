import React from "react";

import parse, { attributesToProps } from "html-react-parser";
import Image from "next/image";

const Description = ({ dataContent, eventImage }: any) => {
  const parsed = parse(dataContent);

  return (
    <div className="flex flex-col items-center w-full h-auto px-2 space-x-5 overflow-x-scroll lg:px-0 lg:items-start lg:flex-row">
      <div className="relative flex-shrink-0 w-56 h-56">
        <Image
          src={`http://prewebsite.relyhealthtech.com/gallery/event/${eventImage}`}
          alt=""
          fill
          style={{ objectFit: "fill" }}
        />
      </div>
      <div className="flex flex-col w-full ">{parsed}</div>
    </div>
  );
};

export default Description;
