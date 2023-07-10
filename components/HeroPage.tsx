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

const HeroPage = () => {
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
    <div className="relative w-full h-[32rem] hidden lg:block">
      <Image src="/pcview2.jpg" alt="" fill />

      <div
        className="absolute bottom-16 h-fit left-32  bg-gradient-to-b from-[#297d05] to-[#6ebf4b]  hover:from-[#6ebf4b] hover:to-[#297d05] transition-all duration-200 ease-in-out lg:text-base text-xs  w-fit px-3 lg:px-4 rounded-md text-buttonColor py-3  font-semibold  block cursor-pointer"
        onClick={onOpenClick}
      >
        SCHEDULE A DEMO
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
                      variant="outline"
                      colorScheme={"cyan"}
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
                  className="w-full px-4 py-2 mt-5 mb-10 font-semibold rounded-md lg:w-fit bg-primary text-buttonColor"
                  type="submit"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </div>
  );
};

export default HeroPage;
