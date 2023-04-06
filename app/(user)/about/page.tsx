export const metadata = {
  icons: {
    icon: "/rfavicon.png",
  },
  title: "About Us | Rely Healthcare Technologies",
  keywords: [
    "Best Hospital Software",
    "Pharmacy Software",
    "Top IT Company",
    "Website Design & Development",
    "Nursing Home Management Software",
    "Diagnostic management Software",
    "Appoinment Management System",
    "Guwahati",
    "Kolkata",
  ],
  description:
    "Rely Healthcare Technologies designs top and best Hospital & Pharmacy Management System",
};

import Achievements from "@/components/about/Achievements";
import AboutBanner from "@/components/about/banner";
// @ts-ignore
import AboutHero from "@/components/about/hero";

const AboutPage = async () => {
  return (
    <main>
      <AboutHero />
      <AboutBanner />
      <Achievements />
    </main>
  );
};

export default AboutPage;
