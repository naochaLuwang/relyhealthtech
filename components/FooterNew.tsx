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

const FooterNew = () => {
  return (
    <div className="w-full h-auto  flex  flex-col bg-textLight bg-opacity-30 pt-10 pb-0 lg:px-14 px-8 justify-between space-y-5">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="lg:flex flex-col lg:space-y-5 hidden">
          <div>
            <h1 className="text-brand text-2xl font-semibold">OUR SOLUTIONS</h1>
          </div>

          <div className="flex flex-col text-black  space-y-3 text-base">
            <Link href="/products/rely_his">
              <h1 className="">Rely HIS(Hospital Information System)</h1>
            </Link>
            <Link href="/products/rely_lis">
              <h1>Rely LIS(Laboratory Information System)</h1>
            </Link>
            <Link href="/products/rely_hrm">
              <h1>Rely HRM(HR & Payroll Management System)</h1>
            </Link>
            <Link href="/products/rely_ris">
              <h1>Rely RIS(Radiology Information System)</h1>
            </Link>
            <Link href="/products/rely_pis">
              <h1>Rely PIS(Pharmacy Information System)</h1>
            </Link>
            <Link href="/products/rely_ais">
              <h1>Rely AIS(Asset Information System)</h1>
            </Link>
            <Link href="/products/rely_ivf">
              <h1>Rely IVF</h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-col  lg:space-y-5 space-y-3  lg:mt-0">
          <div>
            <h1 className="text-brand lg:text-2xl text-xl  font-semibold">
              QUICK LINKS
            </h1>
          </div>
          <div className="flex flex-col space-y-3 text-secondary lg:text-base text-sm">
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

        <div className="flex flex-col lg:space-y-5 space-y-3 mt-5 lg:mt-0 ">
          <div>
            <h1 className="lg:text-2xl text-xl text-brand font-semibold">
              OUR PRESENCE
            </h1>
          </div>
          <div className="flex flex-col space-y-3 lg:text-base text-sm text-secondary">
            <div className="flex space-x-2">
              <MapPinIcon className="h-6 w-6 flex-shrink-0 text-secondary" />
              <p className="text-secondary">
                259, Rg Baruah Road, Guwahati, Assam 781021
              </p>
            </div>
            <div className="flex space-x-2">
              <PhoneIcon className="h-6 w-6 flex-shrink-0 text-secondary" />
              <p className="text-secondary">(+91) 361-3511942</p>
            </div>
            <div className="flex space-x-2">
              <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-secondary" />
              <p className="text-secondary">info@relyhealthtech.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-5 mt-5 lg:mt-0 ">
          <div>
            <h1 className="lg:text-2xl text-xl text-brand font-semibold">
              FOLLOW US ON
            </h1>
          </div>
          <div className="flex space-x-5">
            <BsInstagram className="text-black lg:h-10 lg:w-10 h-6 w-6" />
            <BsLinkedin className="lg:h-10 lg:w-10 h-6 w-6 text-black" />
            <FaFacebookSquare className="text-black h-6 w-6 lg:h-10 lg:w-10" />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row lg:relative pb-10 pt-4   justify-between flex-shrink-0 items-start ">
        <div className="relative lg:h-20 lg:w-32 h-10 w-20 ">
          <Image
            src="/logo.png"
            alt="logo"
            // width={200}
            // height={50}
            className="flex-shrink-0"
            fill
          />
        </div>

        <div className="flex">
          <div className="lg:h-32 lg:w-44 h-12 w-16 relative">
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

        <div className="flex lg:space-x-5 justify-between">
          <div className="lg:h-20 lg:w-20 h-10 w-10 relative">
            <Image
              src="/footer/icon1.png"
              alt="iso"
              // height={80}
              // width={80}
              fill
              className="bg-transparent"
            />
          </div>

          <div className="lg:h-20 lg:w-20 h-10 w-10 relative">
            <Image
              src="/footer/icon2.png"
              alt="iso"
              // height={80}
              // width={80}
              fill
              className="bg-transparent"
            />
          </div>
          <div className="lg:h-20 lg:w-20 h-10 w-10 relative">
            <Image
              src="/footer/icon3.png"
              alt="iso"
              // height={80}
              // width={80}
              fill
              className="bg-transparent"
            />
          </div>
          <div className="lg:h-20 lg:w-20 h-10 w-10 relative">
            <Image
              src="/footer/icon5.png"
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
