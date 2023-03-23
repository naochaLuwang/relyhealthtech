import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="max-w-full h-auto bg-bgPrimary lg:px-20 px-10 py-20">
      <div className="flex flex-col ">
        <h1>BENEFITS</h1>
        <h1 className="text-3xl font-bold">Key Benefits</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Easy and Smart Employee Management
          </h1>
          <p className="text-lg text-justify">
            RelyHRM provides an easy-to-use and smart employee management system
            that allows organizations to manage their employees more
            efficiently. With a user-friendly interface, it is easy to navigate,
            and the software can be customized to suit specific business
            requirements.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            Clear MIS & Financial Reports
          </h1>
          <p className="text-lg text-justify">
            RelyHRM provides clear MIS and financial reports, which are
            essential for decision-making. The software has been designed to
            provide financial status updates through reports that are easy to
            read and understand. This feature helps organizations to make
            informed decisions based on accurate data
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">Browser-Based Software</h1>
          <p className="text-lg text-justify">
            RelyHRM is a browser-based software, which means that there is no
            need to install the software on each client machine. This makes it
            easy to manage in case of system failures and ensures a
            plug-and-play solution.
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">Role-Wise Access</h1>
          <p className="text-lg text-justify">
            The role-wise access feature ensures that users get access to the
            software as per their role, which requires minimal training and
            faster implementation. This helps organizations to manage their HR
            operations more effectively
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">Reduced Complexity</h1>
          <p className="text-lg text-justify">
            RelyHRM is designed to reduce the complexity of managing HR
            operations. With a comprehensive set of features, the software
            allows organizations to manage multiple HR functions like
            recruitment, training, payroll, leave management, and performance
            analysis in a single, robust package. This helps organizations to
            optimize their workforce management and save time and resources
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-2">
            World-Class Leave Management System:
          </h1>
          <p className="text-lg text-justify">
            RelyHRM has an unmatched employee leave management system, which
            helps to manage employee leaves smoothly. The software provides an
            effective solution for tracking employee leaves and managing their
            work schedules accordingly. With the leave management system,
            organizations can ensure that their employees get the required
            leaves while maintaining a smooth workflow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
