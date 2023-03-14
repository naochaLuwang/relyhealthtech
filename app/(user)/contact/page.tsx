import ContactForm from "@/components/ContactForm";
import { Box } from "@/components/ChakraElements";
import Location from "@/components/Location";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

const query = groq`
*[_type=='location']{
  ...,
  
} | order(_createdAt desc)
`;

const ContactPage = async () => {
  const locations = await client.fetch(query);

  return (
    <Box>
      <ContactForm />
      <Location locations={locations} />
    </Box>
  );
};

export default ContactPage;
