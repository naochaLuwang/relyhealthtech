"use client";
import postMessage from "@/lib/postMessage";
import { Message } from "@/typings";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

const HeroMobile = () => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<Message>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!formData.firstName || !formData.phone || !formData.message) {
        setLoading(false);
        toast({
          title: "Invalid Credentials",
          description: "Please enter all the required fields",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else if (formData.phone.length < 10) {
        setLoading(false);
        toast({
          title: "Invalid Credentials",
          description: "Please enter valid mobile number",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        setLoading(true);
        postMessage(formData, setFormData, toast, setLoading);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onOpenClick = () => {
    setOpen(!open);
  };

  const onCloseClick = () => {
    setOpen(false);
  };
  return (
    <div className="relative block w-full h-[42rem] lg:hidden">
      <Image src="/mobile2.jpg" alt="" fill style={{ objectFit: "cover" }} />

      {/* <div className="grid w-full h-auto grid-cols-1 gap-10 mx-auto lg:grid-cols-3 max-w-7xl">
        <div className="w-full h-auto ">
          

          <div className="flex flex-col justify-center w-full h-full pl-6 tracking-wider lg:pl-10">
            <p className="text-4xl font-extrabold tracking-wider lg:text-7xl text-textPrimary ">
              YOUR
            </p>
            <p className="text-4xl font-extrabold tracking-widest text-textGreen">
              ONE-STOP
            </p>
            <p className="text-lg font-extrabold tracking-widest text-textPrimary">
              SOLUTION & PARTNER FOR
            </p>
            <p className="text-4xl font-extrabold tracking-widest text-textGreen">
              HEALTHCARE IT
            </p> */}
      <div className="absolute inset-x-0 flex justify-center transform -translate-y-1/2 top-72">
        <div
          className="text-center bg-gradient-to-b from-[#297d05] to-[#6ebf4b] hover:from-[#6ebf4b] hover:to-[#297d05] transition-all duration-200 ease-in-out lg:text-base text-xs px-3 lg:px-4 rounded-md text-buttonColor py-3 font-semibold block cursor-pointer"
          onClick={onOpenClick}
        >
          SCHEDULE A DEMO
        </div>
      </div>

      <Modal
        isOpen={open}
        onClose={onCloseClick}
        isCentered
        size={{ base: "sm", lg: "4xl" }}
      >
        <ModalOverlay>
          <ModalContent>
            <ModalHeader px={10}>Book a Demo</ModalHeader>
            <ModalCloseButton />
            <ModalBody px={10}>
              <form onSubmit={handleSubmit}>
                <SimpleGrid w="full" columns={{ base: 1, lg: 2 }} gap={5}>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type={"text"}
                      name="firstName"
                      onChange={handleInputChange}
                      value={formData.firstName}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type={"text"}
                      name="lastName"
                      onChange={handleInputChange}
                      value={formData.lastName}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type={"email"}
                      name="email"
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Mobile No.</FormLabel>
                    <Input
                      type={"text"}
                      name="phone"
                      onChange={handleInputChange}
                      value={formData.phone}
                      rounded="lg"
                      maxLength={15}
                    />
                  </FormControl>
                </SimpleGrid>
                <FormControl isRequired mt="5">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    noOfLines={3}
                    name="message"
                    onChange={handleInputChange}
                    value={formData.message}
                  ></Textarea>
                </FormControl>
                <button
                  className="w-full px-4 py-2 mt-5 mb-10 font-semibold rounded-md lg:w-fit bg-whatsNew text-buttonColor"
                  type="submit"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      {/* </div>
        </div>

        <div className="relative col-span-2 w-full lg:h-[30rem] h-96 pr-10 ">
          <Image
            src={"/homeimage.png"}
            alt="Hero Image"
            
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default HeroMobile;
