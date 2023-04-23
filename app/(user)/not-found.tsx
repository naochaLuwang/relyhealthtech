"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { Quicksand } from "next/font/google";
import Link from "next/link";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-full h-[92vh] flex items-center justify-center flex-col space-y-3">
      <Image src="/404.svg" alt="404 error" width={400} height={400} />
      <h1 className="text-3xl font-medium text-secondary quicksand.classname">
        Looks like you&lsquo;re lost
      </h1>
      <p>The page you are looking for is not available</p>
      <Link href="/" className="relative px-6 py-3 font-bold text-black group">
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
        <span className="relative">Go to Home</span>
      </Link>
    </div>
  );
}
