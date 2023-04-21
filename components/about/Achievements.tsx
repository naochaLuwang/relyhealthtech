import Image from "next/image";
import React from "react";

const Achievements = () => {
  const achievements = [
    {
      title:
        "Unmatched solutions & customer support.Trusted & appreciated by our clients",
    },
    {
      title:
        "Fastest Implementation in less than 20 days in Seven Sisters Hospital (100+ beded Hospital)",
    },
    {
      title:
        "Successfully implemented HIS in many renowned Medical Colleges in India including a Govt. Hospital (1000+ Bedded)",
    },
    {
      title:
        "Installed more then 100 Hospitals/Clinic/Dianostic Centres in less than 5 years",
    },
    {
      title:
        "Our solutions are easy to use and known for proving clear MIS reports",
    },
    {
      title: "Supports LIS/RIS/PACS integrations",
    },
    {
      title: "Global presence & expanding",
    },
    {
      title: "We are An ISO 27001:2013 & ISO  9001:2015 Certified Organisation",
    },
    {
      title:
        "NABH, NABL, JCI & HIPPA complaint our all applications are secured on HL7 protocols and is ISO/ICEE 27001:2013 certified. It also offers ICD-10 coding along with other international coding formats like CPT and SNOMED.",
    },
    {
      title: "Software running 24 x 7 in Hospitals for last 5 years.",
    },
  ];

  return (
    <div className="w-full h-auto px-8 py-10 bg-backgroundColor lg:pt-20 lg:pb-32 lg:px-20">
      <h1 className="mb-5 text-2xl font-semibold lg:text-4xl text-textGreen lg:mb-10">
        Why Choose Us ?
      </h1>

      <div className="relative flex">
        <div className="flex flex-col space-y-7">
          {achievements.map((achievement) => (
            <div
              className="flex items-start mt-3 space-x-2"
              key={achievement.title}
            >
              <Image
                src="/arrow.png"
                alt="arrow"
                width={20}
                height={20}
                className="flex grow-0"
              />
              <p className="text-sm font-medium lg:text-lg text-secondary">
                {achievement.title}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden overflow-hidden transform lg:absolute lg:block -right-20 -scale-x-100">
          <Image src="/success2.png" alt="success" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
