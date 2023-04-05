// @ts-ignore
import Benefits from "@/components/RIS/Benefits";
import Modules from "@/components/RIS/Modules";
import ProductOverview from "@/components/RIS/ProductOverview";
import RisVideo from "@/components/RIS/RisVideo";

export const metadata = {
  title: "Rely RIS | Rely Healthcare Technologies",
  icons: {
    icon: "/rfavicon.png",
  },
};

const PISpage = () => {
  return (
    <div>
      <ProductOverview />
      <Benefits />
      <div className="w-full h-auto lg:px-20 px-10 pt-10 pb-10">
        <h1 className="text-center text-3xl font-bold">MODULES</h1>

        <Modules />
      </div>
      <RisVideo />
    </div>
  );
};

export default PISpage;
