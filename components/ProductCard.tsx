import Link from "next/link";

interface Products {
  name: string;
  description: string;
  slug: string;
}

const ProductCard = ({ name, description, slug }: Products) => {
  return (
    <div className="flex h-80 mt-10 lg:mt-0 ">
      <div className="max-w-xl  flex items-center  space-y-5">
        <div className="flex-col space-y-4">
          <h1 className="lg:text-2xl text-xl font-bold  text-textPrimary">
            {name}
          </h1>
          <p className="lg:text-lg text-base font-medium text-secondary text-justify leading-relaxed">
            {description}
          </p>
          <Link href={`/products/${slug}`}>
            <div className="border-textGreen border-2 max-w-fit py-2 px-4 cursor-pointer duration-200 rease-in-out rounded-lg hover:bg-textGreen group ">
              <p className="font-bold text-textGreen lg:text-lg text-base group-hover:text-buttonColor">
                Know more
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
