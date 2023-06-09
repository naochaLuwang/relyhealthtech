import post from "@/schemas/post";
import { Message } from "@/typings";
import axios from "axios";

const postMessage = async (
  data: Message,
  setFormData: any,
  toast: any,
  setLoading: any
) => {
  try {
    const response = await axios({
      method: "post",
      url: `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-11-15/data/mutate/production`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer skN5AKbB6h5EYZ65GPNLRfNG8aaPPffWedb15vIKvTdTcxaYHs9ou6yE5uE3fIM4q88vW8rc0HN66gSntKivsKWDb45itAVMJgpVDqzTObcI5AW5A5WdwI8Uyc8OZI1FlkWdgMIOPQSxBtuH0FxbzKTglw3fP8ioedoLCtJ2GXgZ6m8vvEgg`,
      },
      data: {
        mutations: [
          {
            create: {
              _type: "message",
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phone: data.phone,
              message: data.message,
            },
          },
        ],
      },
    });

    if (response) {
      setLoading(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      toast({
        title: "Message Sent.",
        description: "We will get back to you shortly.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export default postMessage;
