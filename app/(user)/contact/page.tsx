import ContactForm from "@/components/ContactForm";
import { Box, Text, Flex } from "@/components/ChakraElements";
import Location from "@/components/Location";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import Link from "next/link"

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
        <Flex maxWidth={"7xl"} marginX="auto" direction={"column"} marginBottom={20} paddingX={10}>
            <h1 className={"text-3xl font-medium tracking-wide text-textPrimary"}>Career</h1>
            <p className={"text-base mt-5 leading-loose"} >
                Discover exciting career opportunities at Rely HealthTech, where we&apos;re shaping the future of healthcare. Join our innovative team and make a meaningful impact.<br /> Email your resume to <Link className={"text-textPrimary font-semibold"} href={`mailto:hr@relyhealthtech.com`}>
            hr@relyhealthtech.com
          </Link> and start your journey with us today.
            </p>
        </Flex>


    </Box>
  );
};

export default ContactPage;
