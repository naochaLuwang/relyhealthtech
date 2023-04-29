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

  return (
    <footer className="h-full bg-primary bg-opacity-5">
      <div className="flex flex-col py-10 mx-auto space-x-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-col lg:w-[30rem] items-center  flex">
            <h1 className="text-lg font-bold text-textPrimary">
              Rely Healthcare Technologies
            </h1>
            <p className="text-base text-center lg:mt-3">
              &quot;Specialized in Healthcare IT&quot;
            </p>
          </div>

          {/* desktop */}
          <div className="hidden lg:flex flex-col lg:w-[34rem] px-8 mt-5 lg:px-0 lg:mt-0">
            <h1 className="text-lg font-bold text-textPrimary">
              Our Solutions
            </h1>

            <div className="flex-col mt-2 space-y-3 text-base lg:space-y-4 lg:mt-5 text-primary">
              <Link href="/products/rely_his">
                <p className="text-base duration-200 ease-in-out cursor-pointer font-md hover:font-bold translate-all">
                  Rely HIS (Hospital Information System)
                </p>
              </Link>
              <Link href="/products/rely_lis">
                <p className="text-base duration-200 ease-in-out cursor-pointer font-md hover:font-bold translate-all">
                  Rely LIS (Laboratory Information System)
                </p>
              </Link>
              <Link href="/products/rely_hrm">
                <p className="text-base duration-200 ease-in-out cursor-pointer font-md hover:font-bold translate-all">
                  Rely HRM (HR & Payroll Management System)
                </p>
              </Link>
              <Link href="/products/rely_ris">
                <p className="text-base duration-200 ease-in-out cursor-pointer font-md hover:font-bold translate-all">
                  Rely RIS (Radiology Information System)
                </p>
              </Link>
              <Link href="/products/rely_pis">
                <p className="text-base duration-200 ease-in-out cursor-pointer font-md hover:font-bold translate-all">
                  Rely PIS (Pharmacy Information System)
                </p>
              </Link>
              <Link href="/products/rely_ais">
                <p className="text-base duration-200 ease-in-out cursor-pointer font-md hover:font-bold translate-all">
                  Rely AIS (Asset Information System)
                </p>
              </Link>
              {/* <Link href="/products/rely_gis_general_store_information_system">
                <p className="text-base duration-200 ease-in-out cursor-pointer font-md hover:font-bold translate-all">
                  Rely GIS (General Store Information System)
                </p>
              </Link> */}
              <Link href="/products/rely_ivf">
                <p className="text-base duration-200 ease-in-out cursor-pointer font-md hover:font-bold translate-all">
                  Rely IVF
                </p>
              </Link>
              {/* <Link href="/products/rely_doctor">
                <p className="text-base duration-200 ease-in-out cursor-pointer font-md hover:font-bold translate-all">
                  Rely Doctor
                </p>
              </Link> */}
            </div>
          </div>

          {/* mobile */}

          <div
            onClick={() => setIsMobile(!isMobile)}
            className="flex items-center justify-between px-8 mt-10 lg:hidden"
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
                  <p className="block py-2 text-base font-medium text-primary">
                    Rely HIS{" "}
                    <span className="text-sm">
                      (Hospital Information System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/services">
                <li className="max-w-fit hover:scale-105">
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Rely LIS
                    <span className="text-sm">
                      (Laboratory Information System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/about">
                <li>
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Rely HRM
                    <span className="text-sm">
                      (HR & Payroll Managemnet System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Rely RIS
                    <span className="text-sm">
                      (Radiology Information System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Rely PIS
                    <span className="text-sm">
                      (Pharmacy Information System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Rely AIS
                    <span className="text-sm">(Asset Information System)</span>
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Rely GIS
                    <span className="text-sm">
                      (General Store Information System)
                    </span>
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Rely IVF
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Rely Doctor
                  </p>
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex-col hidden w-60 lg:flex">
            <h1 className="text-lg font-bold text-textPrimary">Quick Links</h1>
            <div className="flex flex-col mt-5 space-y-4 text-base text-primary">
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
            className="flex items-center justify-between px-8 mt-5 lg:hidden"
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
                  <p className="block py-2 text-base font-medium text-primary">
                    Home
                  </p>
                </li>
              </Link>

              <Link href="/services">
                <li className="max-w-fit hover:scale-105">
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Services
                  </p>
                </li>
              </Link>

              <Link href="/about">
                <li>
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    About Us
                  </p>
                </li>
              </Link>

              <Link href="/contact">
                <li>
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Contact Us
                  </p>
                </li>
              </Link>

              <Link href="/clients">
                <li>
                  <p className="block py-2 text-base font-medium transition duration-300 hover:font-bold">
                    Clients
                  </p>
                </li>
              </Link>
            </ul>
          </div>
          <hr className="mt-2 w-[20rem] mx-auto lg:hidden" />

          <div className="flex flex-col px-8 mt-5 lg:px-0 lg:mt-0">
            <h1 className="text-lg font-bold text-textPrimary">Contact</h1>
            <div className="flex flex-col mt-2 space-y-2 text-base lg:space-y-5 lg:mt-5 text-primary">
              <div className="flex space-x-2">
                <MapPinIcon className="h-6 text-primary" />
                <p className="text-base">
                  259, Rg Baruah Road,Guwahati, Assam 781021
                </p>
              </div>
              <div className="flex space-x-2">
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
                <EnvelopeIcon className="w-6 h-6 text-primary" />
                <p className="flex-1 text-base text-primary">
                  info@relyhealthtech.com
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center justify-center mt-5 space-x-3 lg:hidden">
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
          className="flex items-center justify-center mt-3 lg:hidden"
        >
          <p className="px-6 py-3 mr-8 font-medium border rounded-full shadow-lg max-w-fit bg-textGreen text-buttonColor">
            Schedule a 1:1 meeting
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-5 space-y-2 text-center lg:hidden w-sm ">
          <p className="mr-10 text-sm text-primary">
            An ISO 27001:2013 & ISO 9001:2015 Certified Organisation
          </p>
          <p className="mt-5 mr-10 text-xs">
            © Rely Healthcare Technologies, all rights reserved
          </p>
        </div>

        <div className="items-center hidden mt-10 lg:flex ">
          <p className="px-6 py-3 ml-5 font-medium border rounded-full shadow-lg max-w-fit bg-textGreen text-buttonColor">
            Schedule a 1:1 meeting
          </p>

          <div className="flex flex-col mt-2 ml-20 space-y-2 text-center ">
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
          <div className="flex flex-col px-6 py-20 ">
            <div className="relative flex flex-col items-center justify-center">
              <XCircleIcon
                onClick={() => {
                  handleOpen();
                }}
                className="absolute right-0 w-10 h-10 cursor-pointer -top-14 text-primary"
              />
              <h1 className="text-xl font-bold leading-normal text-center text-textPrimary">
                Give us a call at 6001254180 to talk about achieving your best
                performance.
              </h1>
              <p className="mt-2 text-sm font-medium text-center text-secondary">
                Let us know a little about you, and we&apos;ll reach out to
                schedule an inside look at how partnering with Rely Health
                Technologies can drive your success.
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center h-auto mx-auto  lg:max-w-4xl max-w-screen mt-14">
                  <div className="flex">
                    <div className="flex-col max-w-xs lg:max-w-4xl">
                      <div className="relative flex items-center justify-start ">
                        {!!watch("firstName") && (
                          <p className="mb-2">First Name</p>
                        )}
                        {!!watch("lastName") && (
                          <p className="absolute top-20 lg:top-0 mt-2  lg:flex lg:ml-[366px] mb-2">
                            Last Name
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col max-w-4xl mb-5 lg:flex-row lg:space-x-10">
                        <div className="flex flex-col space-y-2">
                          <input
                            {...register("firstName", { required: true })}
                            type="text"
                            className="h-12 p-2 border-0 rounded-md outline-none form-input bg-textLight bg-opacity-20 focus:bg-buttonColor w-80"
                            placeholder="First Name"
                          />

                          {errors.firstName?.type === "required" && (
                            <div className="flex items-center space-x-2">
                              <ExclamationCircleIcon className="h-6 text-errorColor" />
                              <p className="font-bold text-md text-errorColor ">
                                First Name is required
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col space-y-2">
                          <input
                            {...register("lastName", { required: true })}
                            type="text"
                            className="h-12 p-2 mt-10 border-0 rounded-md outline-none form-input bg-textLight lg:mt-0 bg-opacity-20 focus:bg-buttonColor w-80"
                            placeholder="Last Name"
                          />
                          {errors.lastName?.type === "required" && (
                            <div className="flex items-center space-x-2">
                              <ExclamationCircleIcon className="h-6 text-errorColor" />
                              <p className="font-bold text-md text-errorColor ">
                                Last Name is required
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-start space-x-80">
                        {!!watch("email") && <p className="mb-2">Email</p>}{" "}
                      </div>

                      <div className="flex max-w-4xl mb-5 space-x-20">
                        <div className="flex flex-col w-full space-y-2">
                          <input
                            {...register("email", { required: true })}
                            type="email"
                            className="w-full h-12 p-2 border-0 rounded-md outline-none form-input bg-textLight bg-opacity-20 focus:bg-buttonColor"
                            placeholder="Email"
                          />
                          {errors.email?.type === "required" && (
                            <div className="flex items-center space-x-2">
                              <ExclamationCircleIcon className="h-6 text-errorColor" />
                              <p className="font-bold text-md text-errorColor ">
                                Email is required
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-start space-x-80">
                        {!!watch("phone") && <p className="mb-2">Phone</p>}{" "}
                      </div>

                      <div className="flex max-w-4xl mb-5 space-x-20">
                        <div className="flex flex-col w-full space-y-2">
                          <input
                            {...register("phone", { required: true })}
                            type="text"
                            className="w-full h-12 p-2 border-0 rounded-md outline-none form-input bg-textLight bg-opacity-20 focus:bg-buttonColor"
                            placeholder="Phone"
                          />

                          {errors.phone?.type === "required" && (
                            <div className="flex items-center space-x-2">
                              <ExclamationCircleIcon className="h-6 text-errorColor" />
                              <p className="font-bold text-md text-errorColor ">
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

                      <div className="flex max-w-4xl mb-5 ">
                        <input
                          {...register("organization", { required: true })}
                          type="text"
                          className="w-full h-12 p-2 border-0 rounded-md outline-none form-input bg-textLight bg-opacity-20 focus:bg-buttonColor"
                          placeholder="Organization Name"
                        />
                      </div>

                      <div className="flex max-w-4xl mb-5 space-x-20">
                        <textarea
                          className="w-full border-0 form-textarea bg-textLight bg-opacity-20 focus:bg-buttonColor"
                          rows={5}
                        />
                      </div>

                      <div type="submit" className="flex items-center justify-center">
                  <p className="w-56 px-3 py-4 text-lg font-bold text-center rounded-full bg-textGreen text-buttonColor">
                    Submit
                  </p>
                </div>

                      <div className="flex items-center justify-center">
                        <input
                          type="submit"
                          className="px-10 text-lg font-bold border-0 rounded-full cursor-pointer form-input bg-textGreen text-buttonColor"
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
