import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="max-w-full h-auto bg-bgPrimary lg:px-20 px-10 py-20">
      <div className="flex flex-col ">
        <h1 className="lg:text-base text-sm">BENEFITS</h1>
        <h1 className="lg:text-3xl text-2xl font-bold">Key Benefits</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-6">
        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Optimized patient scheduling and workflow
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            Rely RIS is designed to improve patient scheduling and workflow,
            which reduces wait times and enhances overall patient satisfaction.
            With a more efficient and streamlined scheduling process, healthcare
            organizations can ensure that patients receive prompt and
            appropriate care, leading to better outcomes.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Enhanced collaboration
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            Our RIS platform facilitates collaboration between radiologists and
            referring physicians. By providing real-time access to critical data
            and images, physicians can make informed decisions more quickly, and
            radiologists can communicate results more effectively. This leads to
            better patient care and more accurate diagnoses.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Real-time access to critical data and analytics
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            With Rely RIS, healthcare organizations have access to real-time
            data and analytics. This enables better decision-making and process
            improvement. For example, staff can use data to identify bottlenecks
            in the workflow and make adjustments to increase efficiency.
            Additionally, physicians can access patient data quickly and easily,
            which improves overall patient care.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Increased staff productivity
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            Rely RIS is equipped with a range of tools that help increase staff
            productivity. This includes features such as patient and image
            tracking, which streamline workflow and reduce errors. With less
            time spent on administrative tasks, staff can focus on patient care,
            leading to better outcomes and higher levels of patient
            satisfaction.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Streamlined revenue cycle managemen
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            Our RIS platform automates billing and reporting processes, reducing
            errors and improving financial performance. This streamlines the
            revenue cycle management process, which helps organizations manage
            costs and maximize revenue.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="lg:text-xl text-lg font-semibold mb-2">
            Inventory management
          </h1>
          <p className="lg:text-base text-sm leading-relaxed text-justify">
            Rely RIS includes inventory management tools, ensuring that adequate
            supplies are always available when needed. This helps reduce costs
            associated with ordering, storing, and managing inventory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
