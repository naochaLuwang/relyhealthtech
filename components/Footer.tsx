import {
  ChevronDownIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const handleOpen = () => {
    setLoading(true);

    setOpen(!open);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const {
    register,
    handleSubmit,

    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  return (
    <footer className="bg-primary h-full bg-opacity-20">
      <div className="flex flex-col  max-w-7xl mx-auto py-10 space-x-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-col lg:w-[30rem] items-center  flex">
            <h1 className="text-lg font-bold text-textPrimary">
              Rely Healthcare Technologies
            </h1>
            <p className="text-center text-base lg:mt-3">
              &quot;Specialized in Healthcare IT&quot;
            </p>
          </div>

          {/* desktop */}
          <div className="hidden lg:flex flex-col lg:w-[34rem] px-8 mt-5 lg:px-0 lg:mt-0">
            <h1 className="text-lg font-bold text-textPrimary">
              Our Solutions
            </h1>

            <div className="flex-col lg:space-y-4 space-y-3 lg:mt-5 mt-2 text-base text-primary">
              <Link href="/products/rely_his">
                <p className="cursor-pointer font-md text-base hover:font-bold  duration-200 translate-all ease-in-out">
                  Rely HIS (Hospital Information System)
                </p>
              </Link>
              <Link href="/products/rely_lis">
                <p className="cursor-pointer font-md text-base hover:font-bold  duration-200 translate-all ease-in-out">
                  Rely LIS (Laboratory Information System)
                </p>
              </Link>
              <Link href="/products/rely_hrm">
                <p className="cursor-pointer font-md text-base hover:font-bold  duration-200 translate-all ease-in-out">
                  Rely HRM (HR & Payroll Management System)
                </p>
              </Link>
              <Link href="/products/rely_ris">
                <p className="cursor-pointer font-md text-base hover:font-bold  duration-200 translate-all ease-in-out">
                  Rely RIS (Radiology Information System)
                </p>
              </Link>
              <Link href="/products/rely_pis">
                <p className="cursor-pointer font-md text-base hover:font-bold  duration-200 translate-all ease-in-out">
                  Rely PIS (Pharmacy Information System)
                </p>
              </Link>
              <Link href="/products/rely_ais">
                <p className="cursor-pointer font-md text-base hover:font-bold  duration-200 translate-all ease-in-out">
                  Rely AIS (Asset Information System)
                </p>
              </Link>
              {/* <Link href="/products/rely_gis_general_store_information_system">
                <p className="cursor-pointer font-md text-base hover:font-bold  duration-200 translate-all ease-in-out">
                  Rely GIS (General Store Information System)
                </p>
              </Link> */}
              <Link href="/products/rely_ivf">
                <p className="cursor-pointer font-md text-base hover:font-bold  duration-200 translate-all ease-in-out">
                  Rely IVF
                </p>
              </Link>
              {/* <Link href="/products/rely_doctor">
                <p className="cursor-pointer font-md text-base hover:font-bold  duration-200 translate-all ease-in-out">
                  Rely Doctor
                </p>
              </Link> */}
            </div>
          </div>

          {/* mobile */}

          <div
            onClick={() => setIsMobile(!isMobile)}
            className="flex lg:hidden items-center justify-between px-8 mt-10"
          >
            <h1 className="text-lg font-bold text-textPrimary">
              Our Solutions
            </h1>
            <ChevronDownIcon className="h-6" />
          </div>

          <div
            className={`
        
        ${
          isMobile && " h-96"
        } "w-full h-0  lg:hidden px-4 transition-all overflow-y-scroll  ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center"`}
          >
            <ul
              className={`${!isMobile} "flex flex-col  duration-1000 ease-out sm:transition-none  mx-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0"`}
            >
              <Link href="/">
                <li className="active hover:scale-105 max-w-fit">
                  <p className="block text-base  py-2 text-primary font-medium">
                    Rely HIS{" "}
                    <span className="text-sm">
                      (Hospital Information System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/services">
                <li className="max-w-fit hover:scale-105">
                  <p className="block text-base py-2 font-medium hover:font-bold transition duration-300">
                    Rely LIS
                    <span className="text-sm">
                      (Laboratory Information System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/about">
                <li>
                  <p className="block text-base py-2 font-medium hover:font-bold transition duration-300">
                    Rely HRM
                    <span className="text-sm">
                      (HR & Payroll Managemnet System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block text-base  py-2 font-medium hover:font-bold  transition duration-300">
                    Rely RIS
                    <span className="text-sm">
                      (Radiology Information System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block text-base  py-2 font-medium hover:font-bold  transition duration-300">
                    Rely PIS
                    <span className="text-sm">
                      (Pharmacy Information System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block text-base  py-2 font-medium hover:font-bold  transition duration-300">
                    Rely AIS
                    <span className="text-sm">(Asset Information System)</span>
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block text-base  py-2 font-medium hover:font-bold  transition duration-300">
                    Rely GIS
                    <span className="text-sm">
                      (General Store Information System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block text-base  py-2 font-medium hover:font-bold  transition duration-300">
                    Rely IVF
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block text-base  py-2 font-medium hover:font-bold  transition duration-300">
                    Rely Doctor
                  </p>
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex-col w-60  hidden lg:flex">
            <h1 className="text-lg font-bold text-textPrimary">Quick Links</h1>
            <div className="flex flex-col space-y-4 mt-5 text-base text-primary">
              <p>Home</p>
              <p>Services</p>
              <p>Products</p>
              <p>Clients</p>
              <p>About Us</p>
            </div>
          </div>

          {/* mobile */}

          <hr className="mt-2 w-[20rem] mx-auto px-4 lg:hidden" />

          <div
            onClick={() => setIsLink(!isLink)}
            className="flex lg:hidden items-center justify-between px-8 mt-5"
          >
            <h1 className="text-lg font-bold text-textPrimary">Quick Links</h1>
            <ChevronDownIcon className="h-6" />
          </div>

          <div
            className={`
        
        ${
          isLink && " h-40"
        } "w-full h-0  lg:hidden px-4 transition-all overflow-hidden  ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center"`}
          >
            <ul
              className={`${
                !isLink && "hidden"
              } "flex flex-col  duration-1000 ease-out sm:transition-none  mx-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0"`}
            >
              <Link href="/">
                <li className="active hover:scale-105 max-w-fit">
                  <p className="block text-base  py-2 text-primary font-medium">
                    Home
                  </p>
                </li>
              </Link>

              <Link href="/services">
                <li className="max-w-fit hover:scale-105">
                  <p className="block text-base py-2 font-medium hover:font-bold transition duration-300">
                    Services
                  </p>
                </li>
              </Link>

              <Link href="/about">
                <li>
                  <p className="block text-base py-2 font-medium hover:font-bold transition duration-300">
                    About Us
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block text-base  py-2 font-medium hover:font-bold  transition duration-300">
                    Contact Us
                  </p>
                </li>
              </Link>

              <Link href="/clients">
                <li>
                  <p className="block text-base  py-2 font-medium hover:font-bold  transition duration-300">
                    Clients
                  </p>
                </li>
              </Link>
            </ul>
          </div>
          <hr className="mt-2 w-[20rem] mx-auto lg:hidden" />

          <div className="flex-col flex px-8 lg:px-0 mt-5 lg:mt-0">
            <h1 className="text-lg font-bold text-textPrimary">Contact</h1>
            <div className="flex flex-col lg:space-y-5 space-y-2 lg:mt-5 mt-2 text-base text-primary">
              <div className="flex space-x-2">
                <MapPinIcon className="h-6 text-primary" />
                <p className="text-base">
                  259, Rg Baruah Road,Guwahati, Assam 781021
                </p>
              </div>
              <div className="flex  space-x-2">
                <DevicePhoneMobileIcon className="h-6 text-primary" />
                <p className="flex-1 text-base text-primary">
                  6001254180 | 8638057454
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-6 text-primary" />
                <p className="flex-1 text-base text-primary ">
                  (+91) 361- 3511942
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-6 w-6 text-primary" />
                <p className="flex-1 text-base text-primary">
                  info@relyhealthtech.com
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex mt-5 items-center space-x-3 justify-center lg:hidden">
            <IconButton>
              <Facebook fontSize="large" className="text-textPrimary" />
            </IconButton>

            <IconButton>
              <LinkedInIcon fontSize="large" className="text-textPrimary" />
            </IconButton>
            <IconButton>
              <YouTubeIcon fontSize="large" className="text-textPrimary" />
            </IconButton>
          </div> */}
        </div>

        <div
          onClick={() => handleOpen()}
          className="lg:hidden flex mt-3 items-center justify-center"
        >
          <p className="max-w-fit py-3 mr-8 px-6 border bg-textGreen rounded-full font-medium shadow-lg text-buttonColor">
            Schedule a 1:1 meeting
          </p>
        </div>

        <div className="lg:hidden flex flex-col items-center justify-center w-sm  mt-5 space-y-2 text-center ">
          <p className="text-sm text-primary mr-10">
            An ISO 27001:2013 & ISO 9001:2015 Certified Organisation
          </p>
          <p className="text-xs mr-10 mt-5">
            © Rely Healthcare Technologies, all rights reserved
          </p>
        </div>

        <div className="hidden lg:flex mt-10 items-center ">
          <p className="max-w-fit py-3  px-6 border ml-5 bg-textGreen rounded-full font-medium shadow-lg text-buttonColor">
            Schedule a 1:1 meeting
          </p>

          <div className="flex flex-col ml-20 mt-2 space-y-2 text-center ">
            <p className="text-lg text-primary">
              An ISO 27001:2013 & ISO 9001:2015 Certified Organisation
            </p>
            <p>© Rely Healthcare Technologies, all rights reserved</p>
          </div>

          {/* <div className="flex ml-32">
           
          </div>
        </div> */}
        </div>
        {/* <Dialog
        open={open}
        maxWidth={"sm"}
        fullWidth={true}
        TransitionComponent={Transition}
        scroll="body"
      >
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-col   px-6  py-20 ">
            <div className="flex-col flex items-center justify-center relative">
              <XCircleIcon
                onClick={() => {
                  handleOpen();
                }}
                className="w-10 h-10 absolute cursor-pointer -top-14 right-0 text-primary"
              />
              <h1 className="font-bold text-xl leading-normal text-textPrimary text-center">
                Give us a call at 6001254180 to talk about achieving your best
                performance.
              </h1>
              <p className="text-sm text-secondary mt-2 font-medium text-center">
                Let us know a little about you, and we&apos;ll reach out to
                schedule an inside look at how partnering with Rely Health
                Technologies can drive your success.
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" lg:max-w-4xl mx-auto max-w-screen  items-center h-auto flex flex-col mt-14">
                  <div className="flex">
                    <div className="flex-col lg:max-w-4xl max-w-xs">
                      <div className="flex relative  items-center justify-start ">
                        {!!watch("firstName") && (
                          <p className="mb-2">First Name</p>
                        )}
                        {!!watch("lastName") && (
                          <p className="absolute top-20 lg:top-0 mt-2  lg:flex lg:ml-[366px] mb-2">
                            Last Name
                          </p>
                        )}
                      </div>

                      <div className="flex lg:flex-row flex-col max-w-4xl mb-5  lg:space-x-10">
                        <div className="flex flex-col space-y-2">
                          <input
                            {...register("firstName", { required: true })}
                            type="text"
                            className="form-input bg-textLight bg-opacity-20 border-0 h-12 focus:bg-buttonColor rounded-md p-2 w-80 outline-none"
                            placeholder="First Name"
                          />

                          {errors.firstName?.type === "required" && (
                            <div className="flex items-center space-x-2">
                              <ExclamationCircleIcon className="h-6 text-errorColor" />
                              <p className="text-md font-bold text-errorColor ">
                                First Name is required
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col space-y-2">
                          <input
                            {...register("lastName", { required: true })}
                            type="text"
                            className="form-input bg-textLight mt-10  lg:mt-0 bg-opacity-20 border-0 h-12 focus:bg-buttonColor rounded-md w-80 p-2 outline-none"
                            placeholder="Last Name"
                          />
                          {errors.lastName?.type === "required" && (
                            <div className="flex items-center space-x-2">
                              <ExclamationCircleIcon className="h-6 text-errorColor" />
                              <p className="text-md font-bold text-errorColor ">
                                Last Name is required
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-start space-x-80">
                        {!!watch("email") && <p className="mb-2">Email</p>}{" "}
                      </div>

                      <div className="flex max-w-4xl mb-5   space-x-20">
                        <div className="flex w-full flex-col space-y-2">
                          <input
                            {...register("email", { required: true })}
                            type="email"
                            className="form-input bg-textLight h-12 bg-opacity-20 border-0 focus:bg-buttonColor rounded-md p-2 w-full outline-none"
                            placeholder="Email"
                          />
                          {errors.email?.type === "required" && (
                            <div className="flex items-center space-x-2">
                              <ExclamationCircleIcon className="h-6 text-errorColor" />
                              <p className="text-md font-bold text-errorColor ">
                                Email is required
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-start space-x-80">
                        {!!watch("phone") && <p className="mb-2">Phone</p>}{" "}
                      </div>

                      <div className="flex max-w-4xl mb-5   space-x-20">
                        <div className="flex w-full flex-col space-y-2">
                          <input
                            {...register("phone", { required: true })}
                            type="text"
                            className="form-input bg-textLight h-12 bg-opacity-20 border-0 focus:bg-buttonColor rounded-md p-2 w-full outline-none"
                            placeholder="Phone"
                          />

                          {errors.phone?.type === "required" && (
                            <div className="flex items-center space-x-2">
                              <ExclamationCircleIcon className="h-6 text-errorColor" />
                              <p className="text-md font-bold text-errorColor ">
                                Phone Number is required
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-start space-x-80">
                        {!!watch("organization") && (
                          <p className="mb-2">Organization Name</p>
                        )}{" "}
                      </div>

                      <div className="flex max-w-4xl  mb-5  ">
                        <input
                          {...register("organization", { required: true })}
                          type="text"
                          className="form-input rounded-md p-2 h-12 bg-textLight bg-opacity-20 border-0 focus:bg-buttonColor w-full outline-none"
                          placeholder="Organization Name"
                        />
                      </div>

                      <div className="flex max-w-4xl mb-5 space-x-20">
                        <textarea
                          className="form-textarea w-full border-0 bg-textLight bg-opacity-20 focus:bg-buttonColor"
                          rows={5}
                        />
                      </div>

                      <div type="submit" className="flex items-center justify-center">
                  <p className="py-4 px-3  w-56 text-center rounded-full text-lg font-bold bg-textGreen text-buttonColor">
                    Submit
                  </p>
                </div>

                      <div className="flex items-center justify-center">
                        <input
                          type="submit"
                          className="form-input border-0 cursor-pointer  text-lg px-10 rounded-full bg-textGreen text-buttonColor font-bold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Dialog> */}
      </div>
    </footer>
  );
};

export default Footer;
