import Benefits from "@/components/AIS/Benefits";

import ProductOverview from "@/components/AIS/ProductOverview";

export const metadata = {
  title: "Rely AIS | Rely Healthcare Technologies",
  icons: {
    icon: "/rfavicon.png",
  },
};

const HISpage = () => {
  return (
    <>
      <ProductOverview />
      <Benefits />
    </>
  );
};

export default HISpage;
