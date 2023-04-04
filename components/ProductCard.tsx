import Link from "next/link";

interface Products {
  name: string;
  description: string;
  slug: string;
}

const ProductCard = ({ name, description, slug }: Products) => {
  return (
    <div className="flex h-80  lg:mt-0 ">
      <div className="max-w-xl  flex items-center  space-y-5">
        <div className="flex-col space-y-4">
          <h1 className="lg:text-2xl text-xl font-semibold  text-textPrimary">
            {name}
          </h1>
          <p className="lg:text-lg text-sm  text-secondary text-justify leading-relaxed">
            {description}
          </p>
          <Link href={`/products/${slug}`}>
            <div className="relative inline-block text-base group mt-5">
              <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-brand rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-2 rounded-lg bg-"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-brand group-hover:-rotate-180 ease"></span>
                <span className="relative group-hover:text-buttonColor">
                  Read More
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </div>
            {/* <div className=" mt-8 border-textGreen border-2 max-w-fit py-2 px-4 cursor-pointer duration-200 rease-in-out rounded-lg hover:bg-textGreen group ">
              <p className="font-bold text-textGreen lg:text-lg text-base group-hover:text-buttonColor">
                Know more
              </p>
            </div> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
