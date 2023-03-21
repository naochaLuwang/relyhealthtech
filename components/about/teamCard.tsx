import Link from "next/link";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface Team {
  name: string;
  title: string;
  profileImage: any;
}

const TeamCard = ({ name, title, profileImage }: Team) => {
  return (
    <Link href={`/about/view_profile/`}>
      <div className="flex flex-col   shadow-lg bg-buttonColor bg-opacity-10  py-4 lg:py-10 px-8 items-center rounded-xl cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105">
        <div className="lg:h-32 lg:w-32 w-24 h-24 border-4 border-buttonColor rounded-full  border-opacity-80 shadow-md  relative ">
          <Image
            className="rounded-full"
            src={urlFor(profileImage).url()}
            alt=""
            layout="fill"
            objectFit="fill"
          />
        </div>

        <h1 className="lg:text-2xl text-lg mt-5 font-bold text-center text-buttonColor">
          {name}
        </h1>
        <p className="text-buttonColor text-sm lg:text-lg text-center">
          {title}
        </p>
        <div className=" mt-5 flex space-x-5 items-center">
          <FaFacebook className="text-buttonColor w-6 h-6" />
          <FaLinkedin className="text-buttonColor w-6 h-6" />
          <FaInstagram className="text-buttonColor w-6 h-6" />
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
