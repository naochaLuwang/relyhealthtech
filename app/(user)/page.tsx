export const metadata = {
  title: "Rely Healthcare Technologies",
  keywords: [
    "Best Hospital Software",
    "Pharmacy Software",
    "Top IT Company",
    "Website Design & Development",
    "Nursing Home Management Software",
    "Diagnostic management Software",
    "Appoinment Management System",
    "Guwahati",
    "Kolkata",
  ],
  description:
    "Rely Healthcare Technologies is a healthcare IT technology company that designs one of best Hospital Management Software and also provides IT solution & services that transform the administrative and clinical operations of healthcare organizations of all sizes.",
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
import { Suspense } from "react";
import Loading from "./loading";
import MobileApplication from "@/components/MobileApplication";
import ContactHomePage from "@/components/ContactHomePage";
import VideoSection from "@/components/VideoSection";

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
    <Suspense fallback={<Loading />}>
      <Box>
        <HomeCarousal carousalImages={carousalImages} />

        <WhatsNew BANNER_NEW={bannerNew} />

        <Statistics />

        <Hero />
        <FlagShipProducts />
        <MobileApplication />

        <ClientsHome PRIVATE_CLIENTS={privateclients} />

        <ClientTestimonial />
        <ContactHomePage />
        <VideoSection />
      </Box>
    </Suspense>
  );
};

export default HomePage;
