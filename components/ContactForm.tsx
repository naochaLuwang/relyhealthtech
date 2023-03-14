"use client";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { FaFacebookF, FaTwitter, FaLinkedin, FaMobile } from "react-icons/fa";

import Image from "next/image";

import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { Toaster } from "react-hot-toast";
// import axios from "axios";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    resetField,

    formState: { errors },
  } = useForm();

  //   const onSubmit = async ({
  //     firstName,
  //     lastName,
  //     email,
  //     phone,

  //     message,
  //   }) => {
  //     try {
  //       const data = await axios.post("/api/message", {
  //         firstName,
  //         lastName,
  //         email,
  //         phone,

  //         message,
  //       });

  //       resetField("firstName");
  //       resetField("lastName");
  //       resetField("email");
  //       resetField("phone");

  //       resetField("message");

  //       toast("Message saved successfully", {});
  //     } catch (error) {
  //       toast("Failed to send message");
  //     }
  //   };
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
                    9900039245
                  </p>
                </div>
                <div className="flex mt-7 space-x-2 items-center">
                  <EnvelopeIcon className="h-6 w-6 text-cardCorner" />
                  <p className="text-buttonColor text-sm font-medium">
                    info@relyhealthtech.com
                  </p>
                </div>
                <div className="flex mt-7 space-x-2 items-center">
                  <MapPinIcon className="h-10 w-10 text-cardCorner" />
                  <p className="text-buttonColor text-sm font-medium">
                    259, Rg Baruah Road,Guwahati, Assam 781021
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-24">
                  <div className="w-10 h-10 p-2 hover:bg-cardCorner cursor-pointer text-buttonColor flex items-center justify-center rounded-full ">
                    <FaFacebookF />
                  </div>
                  <div className="w-10 h-10 p-2  hover:bg-cardCorner cursor-pointer text-buttonColor flex items-center justify-center rounded-full ">
                    <FaTwitter />
                  </div>

                  <div className="w-10 h-10 p-2 hover:bg-cardCorner cursor-pointer text-buttonColor flex items-center justify-center rounded-full ">
                    <FaLinkedin />
                  </div>
                </div>
              </div>
              <div className="p-8 max-w-sm lg:max-w-4xl">
                <form>
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
                        {...register("firstName", { required: true })}
                        type="text"
                        className="form-input rounded-md w-80  shadow-sm"
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
                        {...register("lastName", { required: true })}
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
                        {...register("email", { required: true })}
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
                        {...register("phone", { required: true })}
                        type="text"
                        className="form-input rounded-md w-80 shadow-sm"
                      />
                    </div>
                  </div>

                  <h1 className="text-base font-medium mt-2 ">Message</h1>
                  {/* <textarea
                    {...register("message", { required: true })}
                    type="text"
                    className="w-full rounded-lg mt-2"
                    rows={4}
                    placeholder="Enter your message"
                  /> */}

                  <div className="flex mt-5 w-full justify-end">
                    <button
                      type="submit"
                      className="w-fit border px-4 py-3 cursor-pointer rounded-lg bg-card  text-buttonColor font-bold"
                    >
                      Send Message
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
