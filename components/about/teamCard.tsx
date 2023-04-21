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
      <div className="flex items-start justify-start w-full px-6 py-4 transition-transform duration-200 ease-in-out bg-opacity-50 border shadow-md cursor-pointer border-brand border-opacity-20 rounded-xl hover:scale-105">
        <div className="relative w-16 h-16 border-2 shadow-md rounded-tr-2xl rounded-bl-2xl 0 border-borderhr rounded-tl-2xl rounded-br-2xl lg:h-24 lg:w-24">
          <Image
            className="rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl rounded-br-2xl"
            src={urlFor(profileImage).url()}
            alt=""
            fill
            // style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex flex-col items-start flex-1 h-auto pl-4 w-36">
          <h1 className="mt-5 text-lg font-semibold text-center lg:text-xl text-textPrimary">
            {name}
          </h1>
          <p className="text-sm lg:text-sm text-secondary">{title}</p>
        </div>

        {/* <div className="flex items-center mt-5 space-x-5 ">
          <FaFacebook className="w-6 h-6 text-secondary" />
          <FaLinkedin className="w-6 h-6 text-secondary" />
          <FaInstagram className="w-6 h-6 text-secondary" />
        </div> */}
      </div>
    </ClientSideRoute>
  );
};

export default TeamCard;
