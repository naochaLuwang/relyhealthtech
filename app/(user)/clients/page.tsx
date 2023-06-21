import Clients from "@/components/Clients";
import { Box } from "../../../components/ChakraElements";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import HomeCarousal from "@/components/HomeCarousal";
import HomeCarousalMobile from "@/components/HomeCarousalMobile";
export const metadata = {
  icons: {
    icon: "/rfavicon.png",
  },
  title: "Clients | Rely Healthcare Technologies",
};

const carousalQuery = groq`
*[_type=='carousalMobile']{
  ...,
} | order(_createdAt asc)
`;

const clientquery = groq`
*[_type=='clients' && clientCategory->name == "Private"]{
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

const ivfclientquery = groq`
*[_type=='clients' && clientCategory->name == "Ivfclinic"]{
  ...,
  
} | order(_createdAt asc)
`;

const query = groq`
*[_type=='carousalImage']{
  ...,
} | order(_createdAt asc)
`;

const ClientPage = async () => {
  const privateclients = await client.fetch(clientquery);
  const diagnosticClients = await client.fetch(diagnosticclientquery);
  const governmentClients = await client.fetch(governmentclientquery);
  const ivfClients = await client.fetch(ivfclientquery);
  const carousalImages = await client.fetch(query);
  const carousalMobile = await client.fetch(carousalQuery);
  return (
    <Box maxW="full">
      <HomeCarousal carousalImages={carousalImages} />
      <HomeCarousalMobile carousalImages={carousalMobile} />
      <Clients
        PRIVATE_CLIENTS={privateclients}
        DIAGNOSTIC_CLIENTS={diagnosticClients}
        GOVERNMENT_CLIENTS={governmentClients}
        IVF_CLIENTS={ivfClients}
      />
    </Box>
  );
};

export default ClientPage;

export const revalidate = 0;
