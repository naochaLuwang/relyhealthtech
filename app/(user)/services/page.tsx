import Overview from "@/components/services/Overview";
import ProvidedServices from "@/components/services/ProvidedServices";
import React from "react";

export const metadata = {
  title: "Services | Rely Healthcare Technologies",
  icons: {
    icon: "/rfavicon.png",
  },
};

const ServicesPage = () => {
  return (
    <main>
      <Overview />
      <ProvidedServices />
    </main>
  );
};

export default ServicesPage;
