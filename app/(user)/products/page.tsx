import Link from "next/link";
import Image from "next/image";
import { HIS, HRM, LIS, RIS, PIS, AIS, IVF } from "../../../lib/data";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Products | Rely Healthcare Technologies",
};

const ProductsPage = () => {
  return (
    <div className="  relative bg-backgroundColor overflow-hidden">
      <div className=" lg:max-w-7xl    lg:h-screen h-fit    mx-auto px-8   lg:py-20 flex lg:flex-row flex-col items-center lg:items-start justify-between">
        <div className="max-w-xl flex-col  lg:space-y-5 space-y-2 lg:pt-14 pt-10">
          <p className="lg:text-4xl text-3xl font-semibold text-brand">
            Products
          </p>
          <p className="lg:text-lg text-sm  text-primary text-justify leading-relaxed lg:leading-loose">
            <span className="font-bold text-whatsNew lg:text-xl text-lg">
              Rely Healthcare Technologies
            </span>{" "}
            is the leading provider of innovative health information systems and
            services that transform the administrative and clinical operations
            of healthcare organizations of all sizes. Our product names are
            derived from the word
            <span className="font-bold"> &quot;Reliable&quot;</span> . Our
            products particularly <span className="font-bold"> RelyHIS </span>
            which is an un-matched and world class Hospital Managment Software.
          </p>
        </div>

        <div className="lg:absolute lg:top-36 relative lg:-right-10 h-60 w-[20rem]  lg:h-[450px] lg:w-[800px]">
          <Image src={"/Products.svg"} alt="" fill objectFit="contain" />
        </div>
      </div>
      <div
        id="products"
        className="bg-buttonColor relative  flex-col items-center pt-16  "
      >
        <div className="hidden w-44 h-44 border absolute rotate-45 -top-16 -left-16 border-primary py-2 px-2 ">
          <div className="h-44 w-44 border rotate-6 border-primary"></div>
        </div>
        {/* Rely HIS */}
        <div className=" max-w-7xl relative  px-8 lg:pb-10 flex justify-between items-center mx-auto space-y-4 lg:py-8">
          <ProductCard {...HIS} />
          <div className="lg:absolute right-0 -top-16 hidden lg:flex">
            <Image src="/his.png" height={700} width={700} alt="lis" />
          </div>
        </div>
        {/* Rely LIS */}
        <div className=" max-w-7xl lg:flex  justify-between  px-8   mx-auto space-y-5 lg:py-8">
          <div className="hidden lg:flex">
            <Image
              src="/adicon/Laboratory-bro.svg"
              height={400}
              width={400}
              alt="lis"
            />
          </div>
          <ProductCard {...LIS} />
        </div>
        {/* Rely HRM */}
        <div className=" max-w-7xl  px-8 flex justify-between  mx-auto space-y-4 lg:py-8">
          <ProductCard {...HRM} />
          <div className="hidden lg:flex">
            <Image src="/adicon/HR.svg" height={400} width={400} alt="lis" />
          </div>
        </div>
        <div className=" max-w-7xl flex justify-between  px-8  mx-auto space-y-5 lg:py-8">
          <div className="hidden lg:flex">
            <Image
              src="/adicon/Radiography-bro.svg"
              height={400}
              width={400}
              alt="lis"
            />
          </div>
          <ProductCard {...RIS} />
        </div>
        <div className=" max-w-7xl  px-8   mx-auto space-y-4 lg:py-8 flex justify-between items-center">
          <ProductCard {...PIS} />
          <div className="hidden lg:flex">
            <Image
              src="/adicon/Pharmacist-bro.svg"
              height={400}
              width={400}
              alt="lis"
            />
          </div>
        </div>
        <div className=" max-w-7xl flex justify-between  px-8   mx-auto space-y-5 lg:py-8">
          <div className="hidden lg:flex">
            <Image
              src="/adicon/Infertility.svg"
              height={400}
              width={400}
              alt="lis"
            />
          </div>
          <ProductCard {...IVF} />
        </div>
        <div className=" max-w-7xl  px-8   mx-auto space-y-4 lg:py-8">
          <ProductCard {...AIS} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
