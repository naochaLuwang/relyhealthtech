import HRMBanner from "@/components/HRM/Banner";
import HRMHero from "@/components/HRM/Hero";

const HRMPage = () => {
  return (
    <div>
      <div className="bg-buttonColor h-full py-10">
        {/* hero body */}
        <HRMHero />
        {/* banner */}
        <HRMBanner />
      </div>
    </div>
  );
};

export default HRMPage;
