export const metadata = {
  icons: {
    icon: "/rfavicon.png",
  },
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
import VideoSectionMobile from "@/components/VideoSectionMobile";
import HomeCarousalMobile from "@/components/HomeCarousalMobile";
import carousalMobile from "@/schemas/carousalMobile";

const query = groq`
*[_type=='carousalImage']{
  ...,
  
} | order(_createdAt asc)
`;

const carousalQuery = groq`
*[_type=='carousalMobile']{
  ...,
  
} | order(_createdAt asc)
`;

const clientquery = groq`
*[_type=='clients' && clientCategory->name == "Private" ]{
  ...,
  
} | order(_createdAt asc)
`;

const bannerquery = groq`
*[_type=='whatsNew' ][0..2]{
  ...,
  
} | order(_createdAt asc)
`;

const diagnosticclientquery = groq`
*[_type=='clients' && clientCategory->name == "Diagnostic"]{
  ...,
  
} | order(_createdAt asc)
`;

const governmentclientquery = groq`
*[_type=='clients' && clientCategory->name == "Government"]{
  ...,
  
} | order(_createdAt asc)
`;

const HomePage = async () => {
  const carousalImages = await client.fetch(query);
  const carousalMobile = await client.fetch(carousalQuery);

  const privateclients = await client.fetch(clientquery);
  const bannerNew = await client.fetch(bannerquery);
  const diagnosticClients = await client.fetch(diagnosticclientquery);
  const governmentClients = await client.fetch(governmentclientquery);

  return (
    <Box>
      <Suspense fallback={<p>Loading ....</p>}>
        <HomeCarousal carousalImages={carousalImages} />
        <HomeCarousalMobile carousalImages={carousalMobile} />
      </Suspense>

      <WhatsNew BANNER_NEW={bannerNew} />

      <Statistics />

      <Hero />
      <FlagShipProducts />
      <MobileApplication />

      <ClientsHome
        PRIVATE_CLIENTS={privateclients}
        DIAGNOSTIC_CLIENTS={diagnosticClients}
        GOVERNMENT_CLIENTS={governmentClients}
      />

      <ClientTestimonial />
      <ContactHomePage />
      <VideoSection />
      <VideoSectionMobile />
    </Box>
  );
};

export default HomePage;

export const revalidate = 60;
