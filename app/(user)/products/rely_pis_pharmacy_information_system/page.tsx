import ProductOverview from "@/components/PIS/ProductOverview";
import Benefits from "@/components/PIS/Benefits";
import Modules from "@/components/PIS/Modules";

const PISpage = () => {
  return (
    <div>
      <ProductOverview />
      <Benefits />
      <div className="w-full h-auto px-20 pt-10 pb-10">
        <h1 className="text-center text-3xl font-bold">MODULES</h1>

        <Modules />
      </div>
    </div>
  );
};

export default PISpage;
