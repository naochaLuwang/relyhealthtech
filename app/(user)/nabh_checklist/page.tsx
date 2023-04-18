import NabhArticles from "@/components/NABH/NabhArticles";
import NabhBanner from "@/components/NABH/NabhBanner";
import React from "react";

export const metadata = {
  icons: {
    icon: "/rfavicon.png",
  },
  title: "NABH Checklist | Rely Healthcare Technologies",
  keywords: ["NBH Checklist", "Patient Safety"],
  description:
    "Rely Healthcare Technologies is a healthcare IT technology company that designs one of best Hospital Management Software and also provides IT solution & services that transform the administrative and clinical operations of healthcare organizations of all sizes.",
};

const getAllNabh = async () => {
  const responseData = await fetch(
    "http://website.relyth.com/RelyHome/Event?AuthCode=1&CategoryID=2&EventID=0"
  );

  const response = await responseData.json();

  return response.responseData;
};

const NABHPage = async () => {
  const nabhChecklist = await getAllNabh();
  return (
    <div className="w-full h-auto">
      <NabhBanner />
      <NabhArticles nabhArticles={nabhChecklist} />
    </div>
  );
};

export default NABHPage;
