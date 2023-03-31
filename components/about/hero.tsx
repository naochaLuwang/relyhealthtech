"use client";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="w-full py-10  h-auto ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-brand px-8">About Us</h1>
        <div className="flex flex-col lg:flex-row lg:mt-10 mt-5 ">
          <div className="flex flex-col space-y-5 px-8">
            <p className="text-lg">
              <span>Rely Healthcare Technologies</span> is one of the latest
              growing healthcare technology company which helps to transform the
              administrative and clinical operations for all healthcare
              organizations.
            </p>

            <p className="text-lg">
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
