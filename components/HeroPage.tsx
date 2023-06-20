import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="w-full h-auto py-20 lg:py-10">
      <div className="grid w-full h-auto grid-cols-1 mx-auto lg:grid-cols-2 max-w-7xl">
        <div className="relative w-full h-auto ">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-5 -z-30 w-96 h-96 bg-opacity-10 text-opacity-10"
          >
            <path
              fill="#F2F4F2"
              d="M52.9,-52.1C68.7,-37.2,81.6,-18.6,83.3,1.8C85.1,22.1,75.7,44.2,60,57.2C44.2,70.2,22.1,74.2,0.6,73.5C-20.8,72.9,-41.7,67.7,-56,54.7C-70.4,41.7,-78.2,20.8,-78.3,-0.1C-78.3,-21,-70.6,-41.9,-56.3,-56.9C-41.9,-71.8,-21,-80.7,-1.2,-79.5C18.6,-78.3,37.2,-67,52.9,-52.1Z"
              transform="translate(100 100)"
            />
          </svg>

          <div className="flex flex-col justify-center w-full h-full pl-4 tracking-wider lg:pl-20">
            <p className="text-4xl font-extrabold tracking-wider lg:text-7xl text-textPrimary ">
              YOUR
            </p>
            <p className="text-4xl font-extrabold tracking-widest text-textGreen">
              ONE-STOP
            </p>
            <p className="text-lg font-extrabold tracking-widest text-textPrimary">
              SOLUTION & PARTNER FOR
            </p>
            <p className="text-4xl font-extrabold tracking-widest text-textGreen">
              HEALTHCARE IT
            </p>
            <div className="bg-gradient-to-b from-[#297d05] to-[#6ebf4b]  hover:from-[#6ebf4b] hover:to-[#297d05] transition-all duration-200 ease-in-out lg:text-base text-xs  w-fit px-3 lg:px-4 rounded-md text-buttonColor py-2 mt-12 font-semibold  block ">
              SCHEDULE A DEMO
            </div>
          </div>
        </div>
        <div className="relative flex-1 w-full lg:h-[28rem] h-96">
          <Image
            src={"/homeimage.png"}
            alt="Hero Image"
            // width={500}
            // height={500}
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
