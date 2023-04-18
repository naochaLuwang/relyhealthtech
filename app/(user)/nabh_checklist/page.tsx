import NabhArticles from "@/components/NABH/NabhArticles";
import NabhBanner from "@/components/NABH/NabhBanner";
import React from "react";

export async function getAllNabh() {
  const responseData = await fetch(
    "http://website.relyth.com/RelyHome/Event?AuthCode=1&CategoryID=2&EventID=0"
  );

  const response = await responseData.json();

  return response.responseData;
}

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
