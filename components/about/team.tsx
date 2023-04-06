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
    <div className="bg-buttonColor h-auto relative overflow-hidden">
      <div className=" py-10 max-w-6xl mx-auto">
        <h1 className="text-5xl font-medium  max-w-2xl ">
          Meet our team of creators, designers and world class problem solver.
        </h1>
        <p className="max-w-3xl mt-2">
          To be the company our customer want us to be. It takes an electric
          group of passionate operators. Get to know the people leading the way
          at Rely Healthcare Technologies
        </p>
      </div>

      {/* Founder and leadership team */}
      <div className="max-w-6xl flex items-center mx-auto mt-5  lg:mt-5 lg:pt-6 justify-center lg:pb-3">
        <h1 className="lg:text-3xl text-xl font-bold text-primary">
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
        <h1 className="lg:text-3xl text-xl font-bold text-primary">Advisors</h1>
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
        <h1 className="lg:text-3xl text-xl font-bold text-primary">
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
        <h1 className="lg:text-3xl text-xl font-bold text-primary">
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
        <h1 className="lg:text-3xl text-xl font-bold text-primary">
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
        <h1 className="lg:text-3xl text-xl font-bold text-primary">
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
        <h1 className="lg:text-3xl text-xl text-center font-bold text-primary">
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
