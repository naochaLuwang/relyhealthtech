import ProductOverview from "@/components/HRM/ProductOverview";
import Benefits from "@/components/HRM/Benefits";
import Modules from "@/components/HRM/Modules";

const HRMPage = () => {
  return (
    <div>
      <div className="bg-buttonColor h-full py-10">
        {/* hero body */}
        <ProductOverview />
        <Benefits />
        <div className="w-full h-auto lg:px-20 px-10 pt-10 pb-10">
          <h1 className="text-center text-3xl font-bold">MODULES</h1>

          <Modules />
        </div>
      </div>
    </div>
  );
};

export default HRMPage;
