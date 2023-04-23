import ViewNabhBanner from "@/components/NABH/ViewNabhBanner";
import NabBreadcrumb from "@/components/NABH/NabBreadcrumb";
import React from "react";
import NabhDetail from "@/components/NABH/NabhDetail";
import { getAllNabh } from "../../nabh_checklist/page";
// import { getAllNabh } from "../../nabh_checklist/page";

export const metadata = {
  icons: {
    icon: "/rfavicon.png",
  },
  title: "NABH Checklist | Rely Healthcare Technologies",
  keywords: ["NBH Checklist", "Patient Safety"],
  description:
    "Rely Healthcare Technologies is a healthcare IT technology company that designs one of best Hospital Management Software and also provides IT solution & services that transform the administrative and clinical operations of healthcare organizations of all sizes.",
};

const getNabhArticleDetail = async (id: any) => {
  const response = await fetch(
    `http://website.relyth.com/RelyHome/Event?AuthCode=1&CategoryID=2&EventID=${id}`
  );

  const details = await response.json();
  console.log(details.responseData);

  return details.responseData;
};

const ViewNabh = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { id } = params;

  console.log(id);

  const articleDetails = await getNabhArticleDetail(id);

  return (
    <div className="w-full h-auto">
      <ViewNabhBanner title={articleDetails[0]?.eventName} />
      <NabBreadcrumb title={articleDetails[0]?.eventName} />
      <NabhDetail article={articleDetails[0]} />
    </div>
  );
};

export default ViewNabh;

export async function generateStaticParams() {
  const nabhArticles = getAllNabh();
  const articles = await nabhArticles;

  return articles.map((article: any) => ({ id: article.eventID.toString() }));
}
