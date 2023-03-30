import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="max-w-full h-auto bg-bgPrimary lg:px-20 px-10 py-20">
      <div className="flex flex-col ">
        <h1>BENEFITS</h1>
        <h1 className="text-3xl font-bold text-brand">Key Benefits</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Easy to use and customizable
          </h1>
          <p className="text-lg text-justify">
            Rely HIS is designed to be user-friendly and easy to navigate. The
            software can be easily customized to meet the specific needs of
            healthcare providers, which means they can configure it to work the
            way they want it to.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Browser-based interface
          </h1>
          <p className="text-lg text-justify">
            Rely HIS is a browser-based software, which means it can be accessed
            from any device with an internet connection. This feature makes it
            easy to use and increases adoption rates and productivity.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            QR-based patient registration and appointment booking
          </h1>
          <p className="text-lg text-justify">
            Rely HIS offers a quick and efficient registration and appointment
            booking system that reduces waiting time using an ORS system. This
            feature ensures that patients can easily book appointments without
            any hassle and get faster access to medical care.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Integration with other systems
          </h1>
          <p className="text-lg text-justify">
            Rely HIS can be integrated with other healthcare systems like SAP
            ERP, PACS & RIS, and lab equipment & LIS systems. This feature
            ensures seamless data sharing and management across the
            organization.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Compliance with industry standards
          </h1>
          <p className="text-lg text-justify">
            Rely HIS is compliant with HL7, DICOM, ICD-10 standards, which
            ensures that it is interoperable with other healthcare systems and
            can seamlessly share data with other providers.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">Token/queue system</h1>
          <p className="text-lg text-justify">
            Rely HIS offers a token/queue system that helps healthcare providers
            to manage patient flow and reduce wait times. This feature ensures
            that patients are seen in a timely and efficient manner.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Mobile apps for doctors, nurses, and patients
          </h1>
          <p className="text-lg text-justify">
            Rely HIS offers mobile apps for doctors, nurses, and patients, which
            enables them to access the system remotely and stay connected with
            the hospital from anywhere. This feature ensures that medical
            professionals can access critical patient information and stay
            informed about their patients medical needs.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Integration with other systems
          </h1>
          <p className="text-lg text-justify">
            Rely HIS supports barcode, SMS integration, and third-party
            integration with Whatsapp, payment gateways, and other systems. This
            feature ensures that healthcare providers can use the software with
            other systems they use regularly.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">Certifications</h1>
          <p className="text-lg text-justify">
            Rely HIS is CERT-IN certified by the Ministry of Electronics and
            Information Technology, Government of India, which ensures that it
            is secure and meets industry standards. Additionally, it is
            compliant with the latest National Medical Commission (NMC)
            regulations.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Successful implementation
          </h1>
          <p className="text-lg text-justify">
            Rely HIS is running successfully in more than 30 hospitals ranging
            from 50 to 500+ bedded hospitals. It supports multi-center/chain
            hospitals and can be hosted on-premise/MeitY certified cloud. The
            software has a proven track record of successful implementation in
            healthcare facilities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
