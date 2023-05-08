"use client";

import React, { useEffect } from "react";
import Description from "./Description";

const NabhDetail = ({ article }: any) => {
  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault();
    };

    // attach the event listener to
    // the document object
    document.addEventListener("contextmenu", handleContextMenu);

    // clean up the event listener when
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <>
      {article && (
        <div
          onCopy={(event: React.ClipboardEvent<HTMLDivElement>) =>
            event.preventDefault()
          }
          className="px-4 py-10 mx-auto max-w-7xl"
        >
          <h1 className="mb-5 text-xl font-semibold lg:text-2xl text-textPrimary ">
            {article?.eventName}
          </h1>
          <Description
            dataContent={article.eventContent}
            eventImage={article.eventImage}
          />
        </div>
      )}
    </>
  );
};

export default NabhDetail;
