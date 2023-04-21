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
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Head from "next/head";
import Script from "next/script";

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
        src={`https://www.googletagmanager.com/gtag/js?id=G-X1H2FP7QL6`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X1H2FP7QL6');
                `,
        }}
      />
      <body className="nunito.className">
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <div className="relative w-full h-auto">
              <Header />
              <Suspense fallback={<Loading />}>
                <Box pt={"60px"}>{children}</Box>
              </Suspense>
              {/* <Footer /> */}
              <FooterNew />
              {/* <div className="fixed right-0 w-10 h-10 bg-primary bottom-10"></div> */}
            </div>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
