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
    <div className="relative h-auto overflow-hidden bg-buttonColor">
      <div className="max-w-6xl py-10 mx-auto ">
        <h1 className="max-w-2xl text-5xl font-medium ">
          Meet our team of creators, designers and world class problem solver.
        </h1>
        <p className="max-w-3xl mt-2">
          To be the company our customer want us to be. It takes an electric
          group of passionate operators. Get to know the people leading the way
          at Rely Healthcare Technologies
        </p>
      </div>

      {/* Founder and leadership team */}
      <div className="flex items-center justify-start max-w-6xl mx-auto mt-5 lg:mt-5 lg:pt-6 lg:pb-3">
        <h1 className="text-xl font-bold lg:text-3xl text-primary">
          Founder & Leadership Team
        </h1>
      </div>
      <div className="max-w-6xl px-20 mx-auto lg:px-0 mt-7 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 ">
          {founder.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* Advisor team */}
      <div className="flex items-center justify-start max-w-6xl mx-auto mt-5 lg:mt-5 lg:pt-6 lg:pb-3">
        <h1 className="text-xl font-bold lg:text-3xl text-primary">Advisors</h1>
      </div>
      <div className="max-w-6xl px-20 mx-auto lg:px-0 mt-7 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 ">
          {advisor.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* Management team */}
      <div className="flex items-center justify-start max-w-6xl mx-auto mt-5 lg:pt-6 lg:pb-3">
        <h1 className="text-xl font-bold lg:text-3xl text-primary">
          Management Team
        </h1>
      </div>
      <div className="max-w-6xl px-20 mx-auto lg:px-0 mt-7 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 ">
          {management.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* Technology team */}
      <div className="flex items-center justify-start max-w-6xl mx-auto mt-5 lg:pt-6 lg:pb-3">
        <h1 className="text-xl font-bold lg:text-3xl text-primary">
          Technology Team
        </h1>
      </div>
      <div className="max-w-6xl px-20 mx-auto lg:px-0 mt-7 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 ">
          {technology.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* UI/UX Designer */}

      <div className="flex items-center justify-center max-w-6xl mx-auto mt-5 lg:pt-6 lg:pb-3">
        <h1 className="text-xl font-bold lg:text-3xl text-primary">
          Design Team
        </h1>
      </div>
      <div className="max-w-6xl px-20 mx-auto lg:px-0 mt-7 pb-9 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 ">
          {design.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* marketing and sales team */}

      <div className="flex items-center justify-center max-w-6xl mx-auto mt-5 lg:pt-6 lg:pb-3">
        <h1 className="text-xl font-bold lg:text-3xl text-primary">
          Marketing & Sales Team
        </h1>
      </div>
      <div className="max-w-6xl px-20 mx-auto lg:px-0 mt-7 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 ">
          {marketing.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>

      {/* Support & Implemntation Team */}
      <div className="flex items-center justify-center max-w-sm mx-auto mt-5 lg:max-w-6xl lg:pt-6 lg:pb-3">
        <h1 className="text-xl font-bold text-center lg:text-3xl text-primary">
          Support & Implementation Team
        </h1>
      </div>
      <div className="max-w-6xl px-20 mx-auto lg:px-0 mt-7 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 ">
          {support.map((member: any) => (
            <TeamCard {...member} key={member.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
