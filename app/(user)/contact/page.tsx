import ContactForm from "@/components/ContactForm";
import { Box } from "@/components/ChakraElements";
import Location from "@/components/Location";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

export const metadata = {
  title: "Contact Us | Rely Healthcare Technologies",
  icons: {
    icon: "/rfavicon.png",
  },
};

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
      {/* <Map /> */}
      <Location locations={locations} />
    </Box>
  );
};

export default ContactPage;
