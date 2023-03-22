import Benefits from "@/components/RIS/Benefits";
import Modules from "@/components/RIS/Modules";
import ProductOverview from "@/components/RIS/ProductOverview";

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
