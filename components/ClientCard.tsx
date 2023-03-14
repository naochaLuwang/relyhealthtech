import urlFor from "@/lib/urlFor";
import { Box, Center, Image, Card, CardBody } from "@chakra-ui/react";

interface Client {
  name: string;
  image: string;
}

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function ClientCard({ image }: Client) {
  return (
    <Center py={6}>
      <Card maxW="sm" variant={"elevated"} rounded="2xl" boxShadow={"xl "}>
        <CardBody>
          <Image
            src={image}
            alt="card image"
            w={200}
            h={140}
            objectFit={"contain"}
          />
        </CardBody>
      </Card>
    </Center>
  );
}
