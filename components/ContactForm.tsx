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

  return (
    <>
      <div className="h-auto bg-backgroundColor">
        <div className="flex items-center justify-center px-8 py-8 mx-auto max-w-7xl lg:py-16">
          <div className="flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-primary">
              Contact Us
            </h1>
            <p className="mt-4 text-center">
              Any question or remarks? Just write us a message!
            </p>

            <div className="bg-buttonColor lg:w-[65rem] lg:h-[30rem] mt-10 rounded-xl flex">
              <div className="hidden lg:block w-[20rem]  h-full p-8 bg-card flex-col rounded-xl  shadow-lg z-10 relative overflow-hidden">
                <div className="absolute z-10 rounded-full w-28 h-28 bg-cardCircles bottom-10 right-10 bg-opacity-90 "></div>
                <div className="absolute rounded-full w-60 h-60 bg-cardCorner -bottom-24 -right-28"></div>
                <h1 className="text-2xl font-bold text-buttonColor">
                  Contact Information
                </h1>
                <p className="mt-2 text-xs text-buttonColor">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
                <div className="flex items-center space-x-2 mt-7">
                  <PhoneIcon className="w-6 h-6 text-cardCorner" />
                  <p className="text-sm font-medium text-buttonColor">
                    +91 1800 572 9323
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-7">
                  <EnvelopeIcon className="w-6 h-6 text-cardCorner" />
                  <p className="text-sm font-medium text-buttonColor">
                    info@relyhealthtech.com
                  </p>
                </div>
                <div className="flex items-start mr-3 space-x-2 mt-7">
                  <MapPinIcon className="flex-shrink-0 w-6 h-6 text-cardCorner" />
                  <p className="text-sm font-medium text-buttonColor ">
                    Level 6,Wing B,Two Horizon Center Golf Course Road Sector
                    43, Gurgaon- 122002
                  </p>
                </div>
                <div className="flex items-center mt-24 space-x-2">
                  <Link
                    href="https://www.facebook.com/relyhealthcare2020"
                    target="_blank"
                  >
                    <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-cardCorner text-buttonColor ">
                      <FaFacebookF />
                    </div>
                  </Link>

                  <Link
                    href="https://www.instagram.com/rely_healthtech/"
                    target="_blank"
                  >
                    <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-cardCorner text-buttonColor ">
                      <FaInstagramSquare />
                    </div>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/rely-healthcare-technologies/?original_referer="
                    target="_blank"
                  >
                    <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-cardCorner text-buttonColor ">
                      <FaLinkedin />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="max-w-sm p-8 lg:max-w-4xl">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-2 ">
                        <label
                          className="text-base font-medium"
                          htmlFor="firstName"
                        >
                          First Name
                        </label>
                        <p className="text-lg font-bold text-textPrimary">*</p>
                      </div>
                      <input
                        name="firstName"
                        type="text"
                        className="rounded-md shadow-sm form-input w-80"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-2 ">
                        <label
                          className="text-base font-medium"
                          htmlFor="firstName"
                        >
                          Last Name
                        </label>
                      </div>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        type="text"
                        className="rounded-md shadow-sm form-input w-80"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-5 space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-2 ">
                        <label
                          className="text-base font-medium"
                          htmlFor="firstName"
                        >
                          Mail
                        </label>
                      </div>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="text"
                        className="rounded-md shadow-sm form-input w-80"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-2 ">
                        <label
                          className="text-base font-medium"
                          htmlFor="firstName"
                        >
                          Phone
                        </label>
                        <p className="text-lg font-bold text-textPrimary">*</p>
                      </div>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        type="text"
                        className="rounded-md shadow-sm form-input w-80"
                        maxLength={15}
                      />
                    </div>
                  </div>

                  <div className="flex space-x-2 ">
                    <h1 className="mt-2 text-base font-medium ">Message</h1>
                    <p className="mt-2 text-lg font-bold text-textPrimary">*</p>
                  </div>

                  <textarea
                    value={formData.message}
                    onChange={handleInputChange}
                    name="message"
                    // @ts-ignore
                    type="text"
                    className="w-full mt-2 rounded-lg"
                    rows={4}
                    placeholder="Enter your message"
                  />

                  <div className="flex justify-end w-full mt-5">
                    <button
                      type="submit"
                      className="px-4 py-3 font-bold border rounded-lg cursor-pointer w-fit bg-card text-buttonColor"
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
