import Clients from "@/components/Clients";
import { Box } from "../../../components/ChakraElements";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
export const metadata = {
  icons: {
    icon: "/rfavicon.png",
  },
  title: "Clients | Rely Healthcare Technologies",
};

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

const ClientPage = async () => {
  const privateclients = await client.fetch(clientquery);
  const diagnosticClients = await client.fetch(diagnosticclientquery);
  const governmentClients = await client.fetch(governmentclientquery);
  return (
    <Box maxW="full">
      <Clients
        PRIVATE_CLIENTS={privateclients}
        DIAGNOSTIC_CLIENTS={diagnosticClients}
        GOVERNMENT_CLIENTS={governmentClients}
      />
    </Box>
  );
};

export default ClientPage;

export const revalidate = 60;
