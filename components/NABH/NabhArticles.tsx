import React from "react";
import NabhCard from "./NabhCard";

const NabhArticles = ({ nabhArticles }: any) => {
  return (
    <div className="w-full h-fit bg-backgroundColor">
      <div className="h-auto py-10 mx-auto max-w-7xl">
        <h1 className="px-6 text-base font-semibold text-primary">
          Total Records: {nabhArticles.length}
        </h1>
        <div className="grid h-auto grid-cols-1 gap-6 px-6 lg:grid-cols-3">
          {nabhArticles.map((article: any) => (
            <NabhCard key={article.eventID} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NabhArticles;
