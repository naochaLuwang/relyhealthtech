import Image from "next/image";
import Link from "next/link";
import React from "react";

const NabhCard = ({ article }: any) => {
  const generateSlug = (name: string) => {
    return name.replace(/\s+/g, "_");
  };

  const formatDate = (dateString: any) => {
    // Parse the input date string to a JavaScript Date object
    const date = new Date(dateString);

    // Extract the day, month, and year from the date object
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    // Format the date in "DD/MM/YYYY" format
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };

  return (
    <div className="flex flex-col items-center w-full px-3 pt-5 pb-10 mt-5 space-x-6 rounded-lg shadow-lg h-96 bg-buttonColor">
      <div className="w-full ">
        <div className="relative flex-shrink-0 w-full h-40">
          <Image
            src={`http://admin.relyhealthtech.com/gallery/event/${article.eventImage}`}
            alt="placeholder"
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>

      <div className="flex flex-col mt-5">
        <h1 className="h-20 text-xl font-semibold text-textPrimary">
          {article.eventName}
        </h1>
        <p className="mt-2 text-sm font-light text-secondary">
          Published on: {formatDate(article.eventDate)}
        </p>

        <Link
          href={`view-NABH-check?id=${article.eventID}&${generateSlug(
            article.eventName
          )}`}
        >
          <p className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 mt-5 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-textPrimary group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-greenBorder"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-lightGreen"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-buttonColor">
              Read More
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NabhCard;
