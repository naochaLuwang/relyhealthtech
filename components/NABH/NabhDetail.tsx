import React from "react";
import Description from "./Description";

const NabhDetail = ({ article }: any) => {
  return (
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <h1 className="mb-5 text-xl font-semibold lg:text-2xl text-textPrimary ">
        {article?.eventName}
      </h1>
      <Description
        dataContent={article?.eventContent}
        eventImage={article?.eventImage}
      />
    </div>
  );
};

export default NabhDetail;
