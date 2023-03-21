import AboutBanner from "@/components/about/banner";
// @ts-ignore
import AboutHero from "@/components/about/hero";
import Team from "@/components/about/team";

import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const founderQuery = groq`
*[_type == "team" && department->name == "Founder & Leadership Team"]{
  ...,
  
} | order(_createdAt asc)
`;

const advisorQuery = groq`
*[_type == "team" && department->name == "Advisors"]{
  ...,
  
} | order(_createdAt asc)
`;

const managementQuery = groq`
*[_type == "team" && department->name == "Management Team"]{
  ...,
  
} | order(_createdAt asc)
`;

const technologyQuery = groq`
*[_type == "team" && department->name == "Technology Team"]{
  ...,
  
} | order(_createdAt asc)
`;

const designQuery = groq`
*[_type == "team" && department->name == "Design Team"]{
  ...,
  
} | order(_createdAt asc)
`;

const marketingQuery = groq`
*[_type == "team" && department->name == "Marketing & Sales Team"]{
  ...,
  
} | order(_createdAt asc)
`;

const supportQuery = groq`
*[_type == "team" && department->name == "Support & Implementation Team"]{
  ...,
  
} | order(_createdAt asc)
`;

const AboutPage = async () => {
  const founder = await client.fetch(founderQuery);
  const advisor = await client.fetch(advisorQuery);
  const management = await client.fetch(managementQuery);
  const technology = await client.fetch(technologyQuery);
  const design = await client.fetch(designQuery);
  const marketing = await client.fetch(marketingQuery);
  const support = await client.fetch(supportQuery);
  return (
    <main>
      <AboutHero />
      <AboutBanner />
      <Team
        founder={founder}
        advisor={advisor}
        management={management}
        technology={technology}
        design={design}
        marketing={marketing}
        support={support}
      />
    </main>
  );
};

export default AboutPage;
