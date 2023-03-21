"use client";
import { Fade } from "react-awesome-reveal";

const AboutHero = () => {
  return (
    <div
      className=" relative h-full bg-no-repeat max-w-screen bg-cover overflow-hidden  "
      style={{
        backgroundImage: `url(
            "https://caas.athenahealth.com/sites/default/files/WhoWeAre_Banner_Purple.png"
          )`,
      }}
    >
      <div className="flex flex-col space-y-2 animate-pulse absolute bottom-0 right-0">
        <div className="flex space-x-2">
          <div className="h-8 w-8 bg-buttonColor bg-opacity-20"></div>
          <div className="h-8 w-8 bg-buttonColor bg-opacity-20"></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-8 w-8 "></div>
          <div className="h-8 w-8 bg-buttonColor bg-opacity-20"></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-8 w-8 bg-buttonColor bg-opacity-20"></div>
          <div className="h-8 w-8 "></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-8 w-8 "></div>
          <div className="h-8 w-8 bg-buttonColor bg-opacity-20"></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-8 w-8 bg-buttonColor bg-opacity-20"></div>
          <div className="h-8 w-8 bg-buttonColor bg-opacity-20"></div>
        </div>
      </div>
      <Fade direction="up" triggerOnce duration={2000} cascade={true}>
        <div className="flex lg:max-w-7xl   px-6 py-10 lg:py-32 mx-auto flex-col items-center justify-center relative space-y-5  ">
          <h1 className="lg:text-4xl text-xl text-center font-bold text-buttonColor">
            About Rely Healthcare Technologies
          </h1>
          <p className="max-w-4xl mx-auto lg:text-xl text-base text-buttonColor text-center tracking-wide leading-relaxed">
            We are one of the fastest growing healthcare technology company
            which designs & develop innovative health information systems and
            also provides IT solution & services that transform the
            administrative and clinical operations of healthcare organizations
            of all sizes.
          </p>
          <p className="max-w-4xl lg:text-xl text-base text-buttonColor mx-auto text-center tracking-wide leading-relaxed">
            We are India&apos;s one of the leading IT healthcare technology
            companies with around 5+ years of experience in the single domain of
            healthcare. Specialized in delivering management information systems
            for Hospitals, Clinics, Diagnostic Centers and Pharmacy Chains, we
            have around many projects running across pan India and worldwide.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default AboutHero;
