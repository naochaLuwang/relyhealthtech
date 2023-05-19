// app/layout.tsx
"use client";

import "../globals.css";

// import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import FooterNew from "@/components/FooterNew";
import { Nunito } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";

import Script from "next/script";
import Link from "next/link";
import ClientOnly from "@/components/ClientOnly";

const colors = {
  brand: {
    900: "#4e2d80",
    800: "#343434",
    700: "#efeeee",
    600: "#f52c05",
    500: "#D92100",
    400: "#25D366",
  },
  stats: {
    900: "#110ab1",
    800: "#78b8ae",
    700: "#669ebb",
    600: "#e5ae35",
    500: "#5b37c7",
  },
};

const theme = extendTheme({ colors });

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-27852855-8`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-27852855-8');
                `,
        }}
      />
      <body className="nunito.className">
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <div className="relative w-full h-auto">
              <ClientOnly>
                <Header />
              </ClientOnly>

              <Suspense fallback={<Loading />}>
                <Box pt={"60px"}>{children}</Box>
              </Suspense>
              {/* <Footer /> */}
              <ClientOnly>
                <FooterNew />
              </ClientOnly>

              <Link
                href="https://wa.me/8638057454"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="fixed right-0 flex items-center justify-center px-2 py-2 space-x-3 overflow-hidden transition-all duration-500 ease-in-out cursor-pointer h-14 hover:w-52 group rounded-bl-md rounded-tl-3xl w-14 bg-textGreen bottom-20">
                  <BsWhatsapp className="flex-shrink-0 w-8 h-8 text-buttonColor" />
                  <h1 className="hidden transition-all text-buttonColor group-hover:inline-flex transition-delay-200 ">
                    Send a message
                  </h1>
                </div>
              </Link>

              <div className="fixed right-0 flex items-center justify-center px-2 py-2 space-x-3 overflow-hidden transition-all duration-500 ease-in-out cursor-pointer h-14 hover:w-52 group rounded-tl-md rounded-bl-3xl w-14 bg-primary bottom-5">
                <BsFillTelephoneFill className="flex-shrink-0 w-6 h-6q text-buttonColor" />
                <h1 className="hidden transition-all text-buttonColor group-hover:inline-flex transition-delay-200 ">
                  18005729323
                </h1>
              </div>
            </div>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
