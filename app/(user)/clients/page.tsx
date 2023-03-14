import Clients from "@/components/Clients";
import { Box } from "../../../components/ChakraElements";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const clientquery = groq`
*[_type=='clients']{
  ...,
  
} | order(_createdAt asc)
`;
const ClientPage = async () => {
  const privateclients = await client.fetch(clientquery);
  return (
    <Box maxW="full">
      <Clients PRIVATE_CLIENTS={privateclients} />
    </Box>
  );
};

export default ClientPage;
