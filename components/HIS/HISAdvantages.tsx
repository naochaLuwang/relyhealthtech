import Image from "next/image";
const HISAdvantages = () => {
  return (
    <div className="bg-buttonColor pb-10 lg:pb-20">
      <div className=" max-w-7xl px-6 py-4 lg:h-auto  mx-auto items-center  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-y-10 gap-20 mt-10 ">
          <div className="group relative border lg:border-0   col-span-2 lg:col-span-1 lg:h-80 lg:w-80 h-[22rem]   rounded-md flex items-center  justify-center cursor-pointer">
            <div className="w-full object-cover flex flex-col space-y-2 items-center justify-center">
              <div className="  relative h-40 w-40   duration-1000 ">
                <Image src={"/adicon/browser.svg"} alt="" fill />
              </div>
              <p className="relative duration-1000 text-textPrimary text-center  text-2xl font-bold">
                Browser Based
              </p>
            </div>
            <div className="absolute top-0 rounded-md left-0 w-full h-0 flex flex-col py-10 px-8 items-center group-hover:bg-textPrimary opacity-0 group-hover:h-full group-hover:opacity-100 duration-1000 translate-transform ease-in-out">
              <div>
                <h1 className="text-buttonColor text-justify text-lg font-bold">
                  No need to install software in each of the client machines.
                  So, Easy to manage in case of system failures. Just plug &
                  play. Use any linux based OS which is free of cost, no license
                  is required.
                </h1>
              </div>
            </div>
          </div>
          <div className="group relative   col-span-2 lg:col-span-1 lg:h-80 lg:w-80 h-[22rem] border lg:border-0 rounded-md flex items-center  justify-center cursor-pointer">
            <div className="w-full object-cover flex flex-col space-y-2 items-center justify-center">
              <div className="  relative h-40 w-40  duration-1000 ">
                <Image
                  src={"/adicon/billing.svg"}
                  alt=""
                  fill
                  objectFit="contain"
                />
              </div>
              <p className="relative duration-1000 text-textPrimary text-center  text-2xl font-bold">
                World Class Billing System
              </p>
            </div>
            <div className="absolute top-0 rounded-md left-0 w-full h-0 flex flex-col py-10 px-8 items-center group-hover:bg-textPrimary opacity-0 group-hover:h-full group-hover:opacity-100 duration-1000 translate-transform ease-in-out">
              <div>
                <h1 className="text-buttonColor text-justify text-lg font-bold">
                  Easy and smart billing system to remove any complication and
                  mistake. Billing is tightly coupled with services conduction
                  status. Different Rate plan as per patient category.
                </h1>
              </div>
            </div>
          </div>

          <div className="group relative border lg:border-0 col-span-2 lg:col-span-1 lg:h-80 lg:w-80 h-96 rounded-md flex items-center  justify-center cursor-pointer">
            <div className="w-full object-cover flex flex-col space-y-2 items-center justify-center">
              <div className="  relative h-40 w-40  duration-1000 ">
                <Image
                  src={"/adicon/fingerprint.svg"}
                  alt=""
                  fill
                  objectFit="contain"
                />
              </div>
              <p className="relative duration-1000 text-textPrimary text-center  text-2xl font-bold">
                Role wise Access
              </p>
            </div>
            <div className="absolute top-0 rounded-md left-0 w-full h-0 flex flex-col py-10 px-8 items-center group-hover:bg-textPrimary opacity-0 group-hover:h-full group-hover:opacity-100 duration-1000 translate-transform ease-in-out">
              <div>
                <h1 className="text-buttonColor text-justify text-lg font-bold">
                  Give acccess as per user role. So very minimal training is
                  required which helps in faster implementation and also helps
                  to easily manage incase any staff leave the organization.
                </h1>
              </div>
            </div>
          </div>

          <div className="group relative border lg:border-0 h-96  col-span-2 lg:col-span-1 lg:h-80 lg:w-80  rounded-md flex items-center  justify-center cursor-pointer">
            <div className="w-full object-cover flex flex-col space-y-2 items-center justify-center">
              <div className="  relative h-40 w-40  duration-1000 ">
                <Image
                  src={"/adicon/financial.svg"}
                  alt=""
                  fill
                  objectFit="contain"
                />
              </div>
              <p className="relative duration-1000 text-textPrimary text-center w-72 text-2xl font-bold">
                Clear Financial Reports
              </p>
            </div>
            <div className="absolute top-0 rounded-md left-0 w-full h-0 flex flex-col py-10 px-8 items-center group-hover:bg-textPrimary opacity-0 group-hover:h-full group-hover:opacity-100 duration-1000 translate-transform ease-in-out">
              <div>
                <h1 className="text-buttonColor text-justify text-lg font-bold">
                  What is the point of having a feature rich software which does
                  not provide clear financial status. We believe in this
                  philosophy so we have designed all the reports accordingly.
                </h1>
              </div>
            </div>
          </div>

          <div className="group relative border lg:border-0 h-96 col-span-2 lg:col-span-1 lg:h-80 lg:w-80  rounded-md flex items-center  justify-center cursor-pointer">
            <div className="w-full object-cover flex flex-col space-y-2 items-center justify-center">
              <div className="  relative h-40 w-40  duration-1000 ">
                <Image
                  src={"/adicon/discharge.svg"}
                  alt=""
                  fill
                  objectFit="contain"
                />
              </div>
              <p className="relative duration-1000 text-textPrimary text-center w-72  text-2xl font-bold">
                Faster discharge Process
              </p>
            </div>
            <div className="absolute top-0 rounded-md left-0 w-full h-0 flex flex-col py-10 px-8 items-center group-hover:bg-textPrimary opacity-0 group-hover:h-full group-hover:opacity-100 duration-1000 translate-transform ease-in-out">
              <div>
                <h1 className="text-buttonColor text-justify text-lg font-bold">
                  Rely HIS has been designed to keeping this view in mind which
                  is the biggest problems of any hospital
                </h1>
              </div>
            </div>
          </div>

          <div className="group relative border lg:border-0 h-96 col-span-2 lg:col-span-1 lg:h-80 lg:w-80  rounded-md flex items-center  justify-center cursor-pointer">
            <div className="w-full object-cover flex flex-col space-y-2 items-center justify-center">
              <div className="  relative h-40 w-40  duration-1000 ">
                <Image
                  src={"/adicon/room.svg"}
                  alt=""
                  fill
                  objectFit="contain"
                />
              </div>
              <p className="relative duration-1000 text-textPrimary text-center w-72  text-2xl font-bold">
                World Class Room Management System
              </p>
            </div>
            <div className="absolute top-0 rounded-md left-0 w-full h-0 flex flex-col py-10 px-8 items-center group-hover:bg-textPrimary opacity-0 group-hover:h-full group-hover:opacity-100 duration-1000 translate-transform ease-in-out">
              <div>
                <h1 className="text-buttonColor text-justify text-lg font-bold">
                  Rely HIS has an un-matched bed management system which helps
                  to smoothly manage the rooms in your healthcare facility
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HISAdvantages;
