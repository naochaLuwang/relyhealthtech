"use client";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { BiChevronRightCircle } from "react-icons/bi";

const data = [
  {
    title: "Over 5 years of experience in the healthcare domain",
  },
  {
    title:
      "Specializing in web/browser-based solutions for hospitals, medical colleges, clinics, diagnostic centers, and pharmacy chains",
  },
  {
    title: "Cloud-based hosting for flexible and accessible user experience",
  },
  {
    title: "Strong presence in cities across India",
  },
  {
    title:
      "Successfully implemented solutions in hospitals ranging from 20 to 1000 beds",
  },
  {
    title:
      "Innovative add-on modules including Electronic Medical Records, Patient Portal, SMS/Email Connectivity, Online Lab Results, and Mobile Application for Doctors & Patients",
  },
  {
    title:
      "On-premises and cloud solutions available to meet diverse organizational needs",
  },
  {
    title:
      "Committed to staying updated with the latest technological advancements",
  },
  {
    title:
      "Reputation for excellent service and trusted reliability in the healthcare industry",
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-5 px-8 py-10 lg:flex-row lg:py-0 lg:px-16">
      <div className="flex flex-col max-w-2xl ">
        <Slide direction="down">
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 lg:w-12 lg:h-1 rounded-xl bg-logo"></div>

            <h1 className="text-base font-light lg:text-lg text-textPrimary">
              ABOUT RELY
            </h1>
          </div>
        </Slide>

        <p className="text-2xl antialiased font-semibold leading-tight tracking-tight lg:text-4xl text-secondary">
          <span className="antialiased text-brandColor">
            Specialized in Healthcare IT Solutions
          </span>{" "}
          <br />
          for more than 5 years.
        </p>

        {data.map((item, index) => (
          <Fade direction="up" triggerOnce key={index}>
            <div className="flex items-start mt-4 space-x-3 leading-2">
              <BiChevronRightCircle className="flex-shrink-0 w-6 h-6 text-greenBorder" />
              <p className="font-medium leading-0">{item.title}</p>
            </div>
          </Fade>
        ))}
        {/* <Fade direction="up" triggerOnce>
          <p className="mt-5 text-sm leading-relaxed lg:text-base">
            We are a leading company with more than 5 years of experience in the
            healthcare domain, specializing in providing management information
            systems for hospitals, medical colleges, clinics, diagnostic
            centers, and pharmacy chains. Our solutions are completely
            web/browser-based and can be hosted on the cloud, offering
            flexibility and accessibility to users from anywhere and at any
            time.
          </p>
        </Fade>

        <Fade direction="up" triggerOnce>
          <p className="mt-5 text-sm leading-relaxed lg:text-base">
            With a strong presence in cities across India, we have successfully
            implemented our HIS solutions in a wide range of healthcare
            facilities, from hospitals with 20 beds to those with 1000 beds. Our
            innovative approach includes the development of add-on modules such
            as Web-based Electronic Medical Records, Patient Portal, SMS/Email
            Connectivity, Online Lab Results, and a recently launched Mobile
            Application for Doctors & Patients.
          </p>
        </Fade>

        <Fade direction="up" triggerOnce>
          <p className="mt-5 text-sm leading-relaxed lg:text-base">
            Clients can choose between on-premises or cloud solutions based on
            their organizational needs, as we strive to cater to diverse
            requirements. Our focus on staying updated with the latest
            technological advancements and our commitment to providing excellent
            service have earned us a reputation as a trusted and reliable
            provider of HIS solutions in the healthcare industry.
          </p>
        </Fade> */}
      </div>

      <Fade direction="right" triggerOnce>
        <div>
          <Image src="/home.svg" alt="home" width={600} height={600} />
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
