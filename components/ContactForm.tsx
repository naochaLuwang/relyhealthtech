"use client";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { useToast } from "@chakra-ui/react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaMobile,
  FaInstagramSquare,
} from "react-icons/fa";

import { useState } from "react";
import { Message } from "@/typings";
import postMessage from "@/lib/postMessage";
import Link from "next/link";

const ContactForm = () => {
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
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.message
      ) {
        setLoading(false);
        toast({
          title: "Invalid Credentials",
          description: "Please enter all the required fields",
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

  return (
    <>
      <div className="bg-backgroundColor h-auto">
        <div className="max-w-7xl mx-auto px-8 py-8 lg:py-16 flex justify-center   items-center">
          <div className="flex-col items-center  justify-center">
            <h1 className="text-4xl font-bold text-primary text-center">
              Contact Us
            </h1>
            <p className="text-center mt-4">
              Any question or remarks? Just write us a message!
            </p>

            <div className="bg-buttonColor lg:w-[65rem] lg:h-[30rem] mt-10 rounded-xl flex">
              <div className="hidden lg:block w-[20rem]  h-full p-8 bg-card flex-col rounded-xl  shadow-lg z-10 relative overflow-hidden">
                <div className="w-28  h-28 bg-cardCircles rounded-full absolute bottom-10 right-10 z-10 bg-opacity-90  "></div>
                <div className="w-60 h-60 bg-cardCorner rounded-full absolute -bottom-24 -right-28"></div>
                <h1 className="text-buttonColor text-2xl font-bold">
                  Contact Information
                </h1>
                <p className="text-buttonColor text-xs mt-2">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
                <div className="flex mt-7 space-x-2 items-center">
                  <PhoneIcon className="h-6 w-6 text-cardCorner" />
                  <p className="text-buttonColor text-sm font-medium">
                    +91 1800 572 9323
                  </p>
                </div>
                <div className="flex mt-7 space-x-2 items-center">
                  <EnvelopeIcon className="h-6 w-6 text-cardCorner" />
                  <p className="text-buttonColor text-sm font-medium">
                    info@relyhealthtech.com
                  </p>
                </div>
                <div className="flex mt-7 space-x-2 items-center mr-3">
                  <MapPinIcon className="h-8 w-8  text-cardCorner " />
                  <p className="text-buttonColor text-sm font-medium ">
                    Gurgaon
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-24">
                  <Link href="https://www.facebook.com/relyhealthcare2020">
                    <div className="w-10 h-10 p-2 hover:bg-cardCorner cursor-pointer text-buttonColor flex items-center justify-center rounded-full ">
                      <FaFacebookF />
                    </div>
                  </Link>

                  <Link href="https://www.instagram.com/rely_healthtech/">
                    <div className="w-10 h-10 p-2  hover:bg-cardCorner cursor-pointer text-buttonColor flex items-center justify-center rounded-full ">
                      <FaInstagramSquare />
                    </div>
                  </Link>

                  <Link href="https://www.linkedin.com/company/rely-healthcare-technologies/?original_referer=">
                    <div className="w-10 h-10 p-2 hover:bg-cardCorner cursor-pointer text-buttonColor flex items-center justify-center rounded-full ">
                      <FaLinkedin />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-8 max-w-sm lg:max-w-4xl">
                <form onSubmit={handleSubmit}>
                  <div className=" flex-col flex lg:flex-row  lg:space-x-5 space-y-5 lg:space-y-0 ">
                    <div className="flex-col flex space-y-2">
                      <div className="flex space-x-2 ">
                        <label
                          className="text-base font-medium"
                          htmlFor="firstName"
                        >
                          First Name
                        </label>
                        <p className="text-lg text-textPrimary font-bold">*</p>
                      </div>
                      <input
                        name="firstName"
                        type="text"
                        className="form-input rounded-md w-80  shadow-sm"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex-col flex space-y-2">
                      <div className="flex space-x-2 ">
                        <label
                          className="text-base font-medium"
                          htmlFor="firstName"
                        >
                          Last Name
                        </label>
                        <p className="text-lg text-textPrimary font-bold">*</p>
                      </div>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input rounded-md w-80 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row mt-5 lg:space-x-5 space-y-5 lg:space-y-0">
                    <div className="flex-col flex space-y-2">
                      <div className="flex space-x-2 ">
                        <label
                          className="text-base font-medium"
                          htmlFor="firstName"
                        >
                          Mail
                        </label>
                        <p className="text-lg text-textPrimary font-bold">*</p>
                      </div>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input rounded-md w-80 shadow-sm"
                      />
                    </div>
                    <div className="flex-col flex space-y-2">
                      <div className="flex space-x-2 ">
                        <label
                          className="text-base font-medium"
                          htmlFor="firstName"
                        >
                          Phone
                        </label>
                        <p className="text-lg text-textPrimary font-bold">*</p>
                      </div>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input rounded-md w-80 shadow-sm"
                      />
                    </div>
                  </div>

                  <h1 className="text-base font-medium mt-2 ">Message</h1>
                  <textarea
                    value={formData.message}
                    onChange={handleInputChange}
                    name="message"
                    // @ts-ignore
                    type="text"
                    className="w-full rounded-lg mt-2"
                    rows={4}
                    placeholder="Enter your message"
                  />

                  <div className="flex mt-5 w-full justify-end">
                    <button
                      type="submit"
                      className="w-fit border px-4 py-3 cursor-pointer rounded-lg bg-card  text-buttonColor font-bold"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
