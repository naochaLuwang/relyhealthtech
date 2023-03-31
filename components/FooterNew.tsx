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
    <div className="w-full h-auto  flex  flex-col bg-footer py-20 px-14 justify-between space-y-5">
      <div className="flex justify-between w-full">
        <div className="flex flex-col space-y-10 ">
          <div>
            <h1 className="text-buttonColor text-2xl">OUR SOLUTIONS</h1>
          </div>

          <div className="flex flex-col text-buttonColor space-y-3 text-base">
            <Link href="/products/rely_his">
              <h1>Rely HIS(Hospital Information System)</h1>
            </Link>
            <Link href="/products/rely_his">
              <h1>Rely LIS(Laboratory Information System)</h1>
            </Link>
            <Link href="/products/rely_his">
              <h1>Rely HRM(HR & Payroll Management System)</h1>
            </Link>
            <Link href="/products/rely_his">
              <h1>Rely RIS(Radiology Information System)</h1>
            </Link>
            <Link href="/products/rely_his">
              <h1>Rely PIS(Pharmacy Information System)</h1>
            </Link>
            <Link href="/products/rely_his">
              <h1>Rely AIS(Asset Information System)</h1>
            </Link>
            <Link href="/products/rely_his">
              <h1>Rely IVF</h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-10">
          <div>
            <h1 className="text-buttonColor text-2xl">QUICK LINKS</h1>
          </div>
          <div className="flex flex-col space-y-3 text-buttonColor text-base">
            <Link href="/">
              <h1>Home</h1>
            </Link>
            <Link href="/">
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

        <div className="flex flex-col space-y-10">
          <div>
            <h1 className="text-2xl text-buttonColor">HEAD OFFICE</h1>
          </div>
          <div className="flex flex-col space-y-3 text-base text-buttonColor">
            <div className="flex space-x-2">
              <MapPinIcon className="h-6 w-6 flex-shrink-0 text-buttonColor" />
              <p>259, Rg Baruah Road, Guwahati, Assam 781021</p>
            </div>
            <div className="flex space-x-2">
              <PhoneIcon className="h-6 w-6 flex-shrink-0 text-buttonColor" />
              <p>(+91) 361-3511942</p>
            </div>
            <div className="flex space-x-2">
              <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-buttonColor" />
              <p>info@relyhealthtech.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-10">
          <div>
            <h1 className="text-2xl text-buttonColor">FOLLOW US ON</h1>
          </div>
          <div className="flex space-x-5">
            <BsInstagram className="text-buttonColor h-10 w-10" />
            <BsLinkedin className="h-10 w-10 text-buttonColor" />
            <FaFacebookSquare className="text-buttonColor h-10 w-10" />
          </div>
        </div>
      </div>
      <div className="flex">
        <Image src="/logo.jpg" alt="logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default FooterNew;
