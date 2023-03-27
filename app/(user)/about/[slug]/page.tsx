import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

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
    <div>
      {details.name} {details.title}
    </div>
  );
};

export default DetailsPage;
