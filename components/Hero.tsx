"use client";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex   items-center gap-5">
      <div className="flex flex-col max-w-2xl ">
        <Slide direction="down">
          <div className="flex items-center gap-2">
            <div className="w-12 h-2 rounded-xl bg-logo"></div>

            <h1 className="text-lg font-light text-textPrimary">WHO WE ARE</h1>
          </div>
        </Slide>

        <p className="text-4xl font-semibold leading-tight">
          <span className="text-brandColor">
            Specialized in Healthcare IT Solutons
          </span>{" "}
          <br />
          for more than 5 years.
        </p>
        <Slide direction="up" cascade>
          <p className="text-base  leading-relaxed mt-5">
            We are a leading company with 5 years of experience in the
            healthcare domain, specializing in providing management information
            systems for hospitals, medical colleges, clinics, diagnostic
            centers, and pharmacy chains. Our solutions are completely
            web/browser-based and can be hosted on the cloud, offering
            flexibility and accessibility to users from anywhere and at any
            time.
          </p>
          <p className="text-base  leading-relaxed mt-5">
            With a strong presence in cities across India, we have successfully
            implemented our HIS solutions in a wide range of healthcare
            facilities, from hospitals with 20 beds to those with 1800 beds. Our
            innovative approach includes the development of add-on modules such
            as Web-based Electronic Medical Records, Patient Portal, SMS/Email
            Connectivity, Online Lab Results, and a recently launched Mobile
            Application for Doctors & Patients.
          </p>

          <p className="text-base  leading-relaxed mt-5">
            Clients can choose between on-premises or cloud solutions based on
            their organizational needs, as we strive to cater to diverse
            requirements. Our focus on staying updated with the latest
            technological advancements and our commitment to providing excellent
            service have earned us a reputation as a trusted and reliable
            provider of HIS solutions in the healthcare industry.
          </p>
        </Slide>
      </div>
      <div>
        <Image src="/home.svg" alt="home" width={600} height={600} />
      </div>
    </div>
  );
};

export default Hero;
