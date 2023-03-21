const HRMBanner = () => {
  return (
    <div className="bg-textPrimary h-fit">
      <div className="flex-col  lg:max-w-7xl  lg:px-6 px-8 py-10 mx-auto items-center justify-center space-y-5 lg:flex  lg:py-16">
        <h1 className="lg:text-3xl text-xl text-buttonColor font-bold">
          Why choose Rely HRM ?
        </h1>
        <p className="lg:text-lg text-base font-medium text-buttonColor leading-8 lg:text-center text-justify">
          Rely HR management system ease complexities in managing HR operations
          and contain all vital elements of workforce management.It computerises
          and integrates several HR processes like recruitment, training,
          payroll, leave management, performance analysis etc., into a single
          robust package.
        </p>
      </div>
    </div>
  );
};

export default HRMBanner;
