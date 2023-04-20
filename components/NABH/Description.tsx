import React from "react";

import parse, { attributesToProps } from "html-react-parser";
import Image from "next/image";

const Description = ({ dataContent, eventImage }: any) => {
  const parsed = parse(dataContent);

  return (
    <div className="flex flex-col items-center w-full h-auto space-x-5 lg:items-start lg:flex-row">
      <div className="relative flex-shrink-0 w-56 h-56">
        <Image
          src={`http://admin.relyhealthtech.com/gallery/event/${eventImage}`}
          alt=""
          fill
          style={{ objectFit: "fill" }}
        />
      </div>
      <div className="flex flex-col">{parsed}</div>
    </div>
  );
};

export default Description;