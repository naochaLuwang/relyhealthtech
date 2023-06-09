import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="max-w-full h-auto bg-bgPrimary lg:px-20 px-10 py-20">
      <div className="flex flex-col ">
        <h1 className="text-sm lg:text-base">BENEFITS</h1>
        <h1 className="lg:text-3xl text-2xl font-bold">Key Benefits</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-6">
        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Improved Infertility Management
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            RelyIVF enables healthcare organizations to manage
            infertility-related processes with ease. From patient registration
            to treatment planning, visit history, and billing, RelyIVF
            simplifies the entire process.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Paperless Process
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            With RelyIVF, healthcare organizations can move to a paperless
            process, reducing the need for manual paperwork, which can be
            time-consuming and error-prone.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Anytime, Anywhere Access
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            RelyIVF is a web-based software solution that can be accessed from
            anywhere, at any time, with just a single click. This means that
            healthcare professionals can easily manage infertility-related
            processes even when they are not physically present in the office.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Enhanced Patient Experience
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            With RelyIVF, healthcare organizations can provide their patients
            with a better experience. The software enables easy appointment
            management, reduces wait times, and simplifies billing processes,
            ensuring a hassle-free experience for patients.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Streamlined Back-Office Operations
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            RelyIVF streamlines back-office operations by integrating various
            infertility management tasks into a single platform. This reduces
            the need for manual data entry and enhances productivity.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Customizable
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            RelyIVF is a highly customizable software solution. Healthcare
            organizations can tailor the software to meet their specific needs,
            ensuring that the software aligns with their unique workflows and
            processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
