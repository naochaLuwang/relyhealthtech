import Link from "next/link";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ClientSideRoute from "../ClientSideRoute";

interface Team {
  name: string;
  title: string;
  profileImage: any;
  slug: any;
}

const TeamCard = ({ name, title, profileImage, slug }: Team) => {
  return (
    <ClientSideRoute route={`/about/${slug.current}`}>
      <div className="flex flex-col   shadow-lg bg-buttonColor  bg-opacity-50  py-4 lg:py-10 px-8 items-center rounded-xl cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105">
        <div className="lg:h-32 lg:w-32 w-16 h-16 border-4 border-buttonColor rounded-full  border-opacity-80 shadow-md  relative ">
          <Image
            className="rounded-full"
            src={urlFor(profileImage).url()}
            alt=""
            layout="fill"
            objectFit="fill"
          />
        </div>

        <h1 className="lg:text-2xl text-lg mt-5 font-bold text-center text-primary">
          {name}
        </h1>
        <p className="text-buttonColor text-sm lg:text-lg text-secondary">
          {title}
        </p>
        <div className=" mt-5 flex space-x-5 items-center">
          <FaFacebook className="text-secondary w-6 h-6" />
          <FaLinkedin className="text-secondary w-6 h-6" />
          <FaInstagram className="text-secondary w-6 h-6" />
        </div>
      </div>
    </ClientSideRoute>
  );
};

export default TeamCard;
