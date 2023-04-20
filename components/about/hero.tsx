"use client";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="w-full h-auto py-10 ">
      <div className="mx-auto max-w-7xl">
        <h1 className="px-8 text-3xl font-semibold lg:text-5xl text-brand">
          About Us
        </h1>
        <div className="flex flex-col mt-5 lg:flex-row lg:mt-10 ">
          <div className="flex flex-col px-8 space-y-5">
            <p className="text-base lg:text-lg text-secondary">
              <span>Rely Healthcare Technologies</span> is one of the fastest
              growing healthcare technology company which helps to transform the
              administrative and clinical operations for all healthcare
              organizations.
            </p>

            <p className="text-base lg:text-lg text-secondary">
              Our simple yet powerful & reliable solutions easily simplify
              decision making, streamline operations, in addition to compliance
              with healthcare standards & practices as a result saving time and
              effort in addition to profits.
            </p>
          </div>

          <Image
            src="/vision.png"
            alt="about image"
            width={500}
            height={500}
            fit-content
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
