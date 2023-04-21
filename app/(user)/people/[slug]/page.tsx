import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "@/components/RichTextComponents";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import PeopleBreadcrumb from "@/components/PeopleBreadCrumb";

type Props = {
  params: {
    slug: string;
  };
};

const DetailsPage = async ({ params: { slug } }: Props) => {
  const query = groq`
*[_type == "team" && slug.current == $slug][0]{
  ...,
  department->
} 
  `;

  const details = await client.fetch(query, { slug });
  console.log(details);

  return (
    <div className="w-full h-auto  mb-10 min-h-[90vh]">
      <div className="flex items-center w-full mb-10 h-52 bg-textPrimary text-buttonColor">
        <div className="flex items-center pl-40 space-x-5 max-w-7xl">
          <div className="relative border-2 rounded-full shadow-md w-36 h-36">
            <Image
              alt="profile"
              src={urlFor(details.profileImage).url()}
              fill
              style={{ objectFit: "fill" }}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-medium">{details.name}</h1>
            <h2>{details.title}</h2>
          </div>
        </div>
      </div>
      <PeopleBreadcrumb title={details.name} />

      <PortableText value={details.body} components={RichTextComponent} />
    </div>
  );
};

export default DetailsPage;
