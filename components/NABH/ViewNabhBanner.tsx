import React from "react";

interface ViewNabhBannerProps {
  title: string;
}

const ViewNabhBanner: React.FC<ViewNabhBannerProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center w-full px-6 lg:h-60 h-44 bg-card">
      <h1 className="text-xl font-semibold lg:text-3xl text-buttonColor">
        {title}
      </h1>
    </div>
  );
};

export default ViewNabhBanner;
