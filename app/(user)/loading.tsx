"use client";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center w-full h-screen bg-buttonColor">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative">
          <div className="w-16 h-16 border-t-8 rounded-full border-textPrimary animate-spin"></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-backgroundColor animate-ping"></div>
          </div>
        </div>
        <h1 className="mt-3 text-xl text-textGreen animate-pulse">
          Loading...
        </h1>
      </div>
    </div>
  );
}
