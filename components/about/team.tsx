import Image from "next/image";
import TeamCard from "./teamCard";

const Team = ({
  founder,
  advisor,
  management,
  technology,
  design,
  marketing,
  support,
}: any) => {
  return (
    <div className="bg-primary h-auto relative overflow-hidden">
      <div className="hidden lg:block absolute w-[800px] h-[418px] -right-32 top-40 -rotate-90">
        <Image
          src={"/circuitxl.svg"}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* Founder and leadership team */}
      <div className="lg:max-w-6xl max-w-sm flex items-center mx-auto    lg:pt-6 justify-center lg:pb-3">
        <h1 className="lg:text-3xl text-xl font-bold text-center text-buttonColor mt-10">
          Founder & Leadership Team
        </h1>
      </div>
      <div className="px-20 lg:px-0 max-w-6xl mx-auto mt-7 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  ">
          {founder.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* Advisor team */}
      <div className="max-w-6xl flex items-center mx-auto mt-5  lg:mt-5 lg:pt-6 justify-center lg:pb-3">
        <h1 className="lg:text-3xl text-xl font-bold text-buttonColor">
          Advisors
        </h1>
      </div>
      <div className="px-20 lg:px-0 max-w-6xl mx-auto mt-7 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  ">
          {advisor.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* Management team */}
      <div className="max-w-6xl flex items-center mx-auto  mt-5 lg:pt-6 justify-center lg:pb-3">
        <h1 className="lg:text-3xl text-xl font-bold text-buttonColor">
          Management Team
        </h1>
      </div>
      <div className="px-20 lg:px-0 max-w-6xl mx-auto mt-7 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  ">
          {management.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* Technology team */}
      <div className="max-w-6xl flex items-center mx-auto  mt-5 lg:pt-6 justify-center lg:pb-3">
        <h1 className="lg:text-3xl text-xl font-bold text-buttonColor">
          Technology Team
        </h1>
      </div>
      <div className="px-20 lg:px-0 max-w-6xl mx-auto mt-7 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  ">
          {technology.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* UI/UX Designer */}

      <div className="max-w-6xl flex items-center mx-auto  mt-5 lg:pt-6 justify-center lg:pb-3">
        <h1 className="lg:text-3xl text-xl font-bold text-buttonColor">
          Design Team
        </h1>
      </div>
      <div className="px-20 lg:px-0 max-w-6xl mx-auto mt-7 pb-9 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  ">
          {design.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* marketing and sales team */}

      <div className="max-w-6xl flex items-center mx-auto  mt-5 lg:pt-6 justify-center lg:pb-3">
        <h1 className="lg:text-3xl text-xl font-bold text-buttonColor">
          Marketing & Sales Team
        </h1>
      </div>
      <div className="px-20 lg:px-0 max-w-6xl mx-auto mt-7 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  ">
          {marketing.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* Support & Implemntation Team */}
      <div className="lg:max-w-6xl max-w-sm flex items-center mx-auto  mt-5 lg:pt-6 justify-center lg:pb-3">
        <h1 className="lg:text-3xl text-xl text-center font-bold text-buttonColor">
          Support & Implementation Team
        </h1>
      </div>
      <div className="px-20 lg:px-0 max-w-6xl mx-auto mt-7 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  ">
          {support.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
