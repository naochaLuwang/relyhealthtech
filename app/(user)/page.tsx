export const metadata = {
  title: "Rely Healthcare Technologies",
};

import HomeCarousal from "@/components/HomeCarousal";
// @ts-ignore
import Statistics from "../../components/Statistics";
import Hero from "../../components/Hero";
// @ts-ignore
import { Text, Box } from "@/components/ChakraElements";

import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import FlagShipProducts from "@/components/FlagShipProducts";
import ClientsHome from "@/components/ClientsHome";

import ClientTestimonial from "@/components/ClientTestimonial";
import WhatsNew from "@/components/WhatsNew";

const query = groq`
*[_type=='carousalImage']{
  ...,
  
} | order(_createdAt desc)
`;

const clientquery = groq`
*[_type=='clients' ]{
  ...,
  
} | order(_createdAt asc)
`;

const bannerquery = groq`
*[_type=='whatsNew' ][0..2]{
  ...,
  
} | order(_createdAt asc)
`;

const HomePage = async () => {
  const carousalImages = await client.fetch(query);

  const privateclients = await client.fetch(clientquery);
  const bannerNew = await client.fetch(bannerquery);

  return (
    <Box>
      <HomeCarousal carousalImages={carousalImages} />
      <WhatsNew BANNER_NEW={bannerNew} />
      <Statistics />

      <Hero />
      <FlagShipProducts />

      <ClientsHome PRIVATE_CLIENTS={privateclients} />

      <ClientTestimonial />
    </Box>
  );
};

export default HomePage;
