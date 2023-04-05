import Overview from "@/components/services/Overview";
import ProvidedServices from "@/components/services/ProvidedServices";
import React from "react";

export const metadata = {
  title: "Services | Rely Healthcare Technologies",
  icons: {
    icon: "/rfavicon.png",
  },
  description:
    "Rely designs one of the best Hospital, Clinic, Nursing School and College website",

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
