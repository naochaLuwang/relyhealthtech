import Link from "next/link";
import Image from "next/image";
import { HIS, HRM, LIS, RIS, PIS, AIS, GIS, Doctor } from "../../../lib/data";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Products | Rely Healthcare Technologies",
};

const ProductsPage = () => {
  return (
    <div className="bg-backgroundColor  relative">
      <div className=" lg:max-w-7xl   lg:h-fit h-fit pb-10   mx-auto px-8   lg:py-24 flex lg:flex-row flex-col-reverse items-center ">
        <div className="max-w-lg flex-col  lg:space-y-5">
          <p className="lg:text-xl text-base font-medium text-primary text-justify leading-relaxed lg:leading-loose">
            <span className="font-bold text-textPrimary lg:text-2xl text-lg">
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

          <Link href="#products">
            <div className=" hidden lg:flex items-center justify-center  mt-5 py-3 px-4 w-56 cursor-pointer rounded-full bg-textGreen ">
              <p className="text-xl font-bold text-buttonColor">
                Explore Products
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:absolute lg:top-12 relative lg:right-10 h-72 w-[27rem]  lg:h-[418px] lg:w-[800px]">
          <Image src={"/flagship.svg"} alt="" fill objectFit="contain" />
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
        <div className=" max-w-7xl  px-8 pb-10 flex flex-col  mx-auto space-y-4 lg:py-8">
          <h1 className=" text-xl lg:text-3xl mb-12 lg:mb-0 font-bold text-textPrimary">
            Our Unmatched Products
          </h1>
          <ProductCard {...HIS} />
        </div>
        {/* Rely LIS */}
        <div className=" max-w-7xl flex justify-end  px-8 pb-10  mx-auto space-y-5 lg:py-8">
          <ProductCard {...LIS} />
        </div>
        {/* Rely HRM */}
        <div className=" max-w-7xl  px-8 pb-10  mx-auto space-y-4 lg:py-8">
          <ProductCard {...HRM} />
        </div>
        <div className=" max-w-7xl flex justify-end  px-8 pb-10  mx-auto space-y-5 lg:py-8">
          <ProductCard {...RIS} />
        </div>
        <div className=" max-w-7xl  px-8 pb-10  mx-auto space-y-4 lg:py-8">
          <ProductCard {...PIS} />
        </div>
        <div className=" max-w-7xl flex justify-end  px-8 pb-10  mx-auto space-y-5 lg:py-8">
          <ProductCard {...AIS} />
        </div>
        <div className=" max-w-7xl  px-8 pb-10  mx-auto space-y-4 lg:py-8">
          <ProductCard {...GIS} />
        </div>
        <div className=" max-w-7xl flex justify-end  px-8 pb-10  mx-auto space-y-5 lg:py-8">
          <ProductCard {...Doctor} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
