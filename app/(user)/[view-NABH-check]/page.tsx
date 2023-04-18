import ViewNabhBanner from "@/components/NABH/ViewNabhBanner";
import NabBreadcrumb from "@/components/NABH/NabBreadcrumb";
import React from "react";
import NabhDetail from "@/components/NABH/NabhDetail";

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
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const id = searchParams?.id;

  const articleDetails = await getNabhArticleDetail(id);

  return (
    <div className="w-full h-auto">
      <ViewNabhBanner title={articleDetails[0].eventName} />
      <NabBreadcrumb title={articleDetails[0].eventName} />
      <NabhDetail article={articleDetails[0]} />
    </div>
  );
};

export default ViewNabh;
