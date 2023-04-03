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
    <div className="w-full h-auto  flex  flex-col bg-textLight bg-opacity-30 py-20 lg:px-14 px-8 justify-between space-y-5">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="lg:flex flex-col space-y-5 hidden">
          <div>
            <h1 className="text-brand text-2xl font-semibold">OUR SOLUTIONS</h1>
          </div>

          <div className="flex flex-col text-black  space-y-3 text-base">
            <Link href="/products/rely_his">
              <h1>Rely HIS(Hospital Information System)</h1>
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
        <div className="flex flex-col  space-y-5  lg:mt-0">
          <div>
            <h1 className="text-brand text-2xl font-semibold">QUICK LINKS</h1>
          </div>
          <div className="flex flex-col space-y-3 text-black text-base">
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

        <div className="flex flex-col space-y-5 mt-5 lg:mt-0 ">
          <div>
            <h1 className="text-2xl text-brand font-semibold">OUR PRESENCE</h1>
          </div>
          <div className="flex flex-col space-y-3 text-base text-black">
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
            <h1 className="text-2xl text-brand font-semibold">FOLLOW US ON</h1>
          </div>
          <div className="flex space-x-5">
            <BsInstagram className="text-black h-10 w-10" />
            <BsLinkedin className="h-10 w-10 text-black" />
            <FaFacebookSquare className="text-black h-10 w-10" />
          </div>
        </div>
      </div>
      <div className="flex pt-5">
        <Image src="/logo.jpg" alt="logo" width={100} height={100} />
        {/* <div className="w-56 h-40 relative">
          <Image src="/bdfvb.png" alt="regis" objectFit="cover" />
        </div> */}
      </div>
    </div>
  );
};

export default FooterNew;
