import ProductOverview from "@/components/IVF/ProductOverview";
import Benefits from "@/components/IVF/Benefits";
import Modules from "@/components/IVF/Modules";

const IVFpage = () => {
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

export default IVFpage;
