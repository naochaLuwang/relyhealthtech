import {
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import Image from "next/image";
import { ChevronRightIcon } from "@chakra-ui/icons";

const FooterNew = () => {
  return (
    <div className="flex flex-col justify-between w-full h-auto px-8 pt-10 pb-0 space-y-5 bg-textLight bg-opacity-30 lg:px-14">
      <div className="flex flex-col justify-between w-full lg:flex-row">
        <div className="flex flex-col space-y-5">
          <div>
            <h1 className="text-2xl font-semibold text-brand">OUR SOLUTIONS</h1>
          </div>

          <div className="flex flex-col space-y-3 text-base text-black">
            <Link href="/products/rely_his">
              <div className="flex items-center group">
                <ChevronRightIcon className="hidden w-6 h-6 lg:inline-flex" />
                <h1 className="transition-all duration-100 ease-in-out group-hover:font-semibold text-secondary">
                  Rely HIS(Hospital Information System)
                </h1>
              </div>
            </Link>
            <Link href="/products/rely_lis">
              <div className="flex items-center group">
                <ChevronRightIcon className="hidden w-6 h-6 lg:inline-flex" />
                <h1 className="transition-all duration-100 ease-in-out group-hover:font-semibold text-secondary">
                  Rely LIS(Laboratory Information System)
                </h1>
              </div>
            </Link>
            <Link href="/products/rely_hrm">
              <div className="flex items-center group">
                <ChevronRightIcon className="hidden w-6 h-6 lg:inline-flex" />
                <h1 className="transition-all duration-100 ease-in-out group-hover:font-semibold text-secondary">
                  Rely HRM(HR & Payroll Management System)
                </h1>
              </div>
            </Link>
            <Link href="/products/rely_ris">
              <div className="flex items-center group">
                <ChevronRightIcon className="hidden w-6 h-6 lg:inline-flex" />
                <h1 className="transition-all duration-100 ease-in-out group-hover:font-semibold text-secondary">
                  Rely RIS(Radiology Information System)
                </h1>
              </div>
            </Link>
            <Link href="/products/rely_pis">
              <div className="flex items-center group">
                <ChevronRightIcon className="hidden w-6 h-6 lg:inline-flex" />
                <h1 className="transition-all duration-100 ease-in-out group-hover:font-semibold text-secondary">
                  Rely PIS(Pharmacy Information System)
                </h1>
              </div>
            </Link>
            <Link href="/products/rely_ais">
              <div className="flex items-center group">
                <ChevronRightIcon className="hidden w-6 h-6 lg:inline-flex" />
                <h1 className="transition-all duration-100 ease-in-out group-hover:font-semibold text-secondary">
                  Rely AIS(Asset Information System)
                </h1>
              </div>
            </Link>
            <Link href="/products/rely_ivf">
              <div className="flex items-center group">
                <ChevronRightIcon className="hidden w-6 h-6 lg:inline-flex" />
                <h1 className="transition-all duration-100 ease-in-out group-hover:font-semibold text-secondary">
                  Rely IVF
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-5 space-y-3 lg:space-y-5 lg:mt-0">
          <div>
            <h1 className="text-xl font-semibold text-brand lg:text-2xl">
              QUICK LINKS
            </h1>
          </div>
          <div className="flex flex-col space-y-3 text-sm text-secondary lg:text-base">
            <Link href="/">
              <h1>Home</h1>
            </Link>
            <Link href="/services">
              <h1>Services</h1>
            </Link>
            <Link href="/products">
              <h1>Products</h1>
            </Link>
            <Link href="/clients">
              <h1>Clients</h1>
            </Link>
            <Link href="/about">
              <h1>About Us</h1>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-5 space-y-3 lg:space-y-5 lg:mt-0 ">
          <div>
            <h1 className="text-xl font-semibold lg:text-2xl text-brand">
              OUR PRESENCE
            </h1>
          </div>
          <div className="flex flex-col space-y-3 text-sm lg:text-base text-secondary">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="flex-shrink-0 w-4 h-4 text-secondary" />
              <p className="text-secondary">
                Bangalore | Gurgaon | Mumbai | Guwahati
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="flex-shrink-0 w-4 h-4 text-secondary" />
              <p className="text-secondary">1800 572 9323</p>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="flex-shrink-0 w-4 h-4 text-secondary" />
              <p className="text-secondary">info@relyhealthtech.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 space-y-5 lg:mt-0 ">
          <div>
            <h1 className="text-xl font-semibold lg:text-2xl text-brand">
              FOLLOW US ON
            </h1>
          </div>
          <div className="flex space-x-5 cursor-pointer">
            <Link
              href="https://www.instagram.com/rely_healthtech/"
              target="_blank"
            >
              <BsInstagram className="w-6 h-6 text-black cursor-pointer lg:h-10 lg:w-10" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/rely-healthcare-technologies/?original_referer="
              target="_blank"
            >
              <BsLinkedin className="w-6 h-6 text-black cursor-pointer lg:h-10 lg:w-10" />
            </Link>

            <Link
              href="https://www.facebook.com/relyhealthcare2020"
              target="_blank"
            >
              <FaFacebookSquare className="w-6 h-6 text-black cursor-pointer lg:h-10 lg:w-10" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between flex-shrink-0 pt-4 pb-10 lg:flex-row lg:relative border-secondary ">
        <div className="relative w-20 h-10 lg:h-20 lg:w-32 ">
          <Image
            src="/logo.png"
            alt="logo"
            // width={200}
            // height={50}
            className="flex-shrink-0"
            fill
          />
        </div>

        <div className="relative">
          <div className="right-0 flex space-x-5 lg:absolute -top-20">
            <div className="relative w-10 h-10 lg:h-20 lg:w-20">
              <Image
                src="/footer/icon1.png"
                alt="iso"
                // height={80}
                // width={80}
                fill
                className="bg-transparent"
              />
            </div>

            <div className="relative w-10 h-10 lg:h-20 lg:w-20">
              <Image
                src="/footer/icon2.png"
                alt="iso"
                // height={80}
                // width={80}
                fill
                className="bg-transparent"
              />
            </div>
            {/* <div className="relative w-10 h-10 lg:h-20 lg:w-20">
              <Image
                src="/footer/icon3.png"
                alt="iso"
                // height={80}
                // width={80}
                fill
                className="bg-transparent"
              />
            </div> */}
            {/* <div className="relative w-10 h-10 lg:h-20 lg:w-20">
              <Image
                src="/footer/icon5.png"
                alt="iso"
                // height={80}
                // width={80}
                fill
                className="bg-transparent"
              />
            </div> */}
          </div>
        </div>

        <div className="absolute right-0 -top-48">
          <div className="relative w-16 h-12 lg:h-32 lg:w-44">
            <Image
              src="/footer/icon4.png"
              alt="iso"
              // height={80}
              // width={80}
              fill
              className="bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
