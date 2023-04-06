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
    <ClientSideRoute route={`/people/${slug.current}`}>
      <div className="flex   shadow-lg py-4   bg-opacity-100 border border-brand   px-6 items-start justify-start rounded-xl cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105">
        <div className="lg:h-24   lg:w-24 w-16 h-16  rounded-full border-2 border-primary  border-opacity-80 shadow-md  relative ">
          <Image
            className="rounded-full"
            src={urlFor(profileImage).url()}
            alt=""
            layout="fill"
            objectFit="fill"
          />
        </div>

        <div className="flex flex-col flex-1 pl-4  items-start w-36 h-auto">
          <h1 className="lg:text-2xl text-lg mt-5 font-bold text-center text-primary">
            {name}
          </h1>
          <p className=" text-sm lg:text-sm text-secondary">{title}</p>
        </div>

        {/* <div className=" mt-5 flex space-x-5 items-center">
          <FaFacebook className="text-secondary w-6 h-6" />
          <FaLinkedin className="text-secondary w-6 h-6" />
          <FaInstagram className="text-secondary w-6 h-6" />
        </div> */}
      </div>
    </ClientSideRoute>
  );
};

export default TeamCard;
