// app/layout.tsx
"use client";

import "../globals.css";

// import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Suspense } from "react";
import Loading from "./loading";
import FooterNew from "@/components/FooterNew";
import { Poppins } from "next/font/google";

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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="poppins.className">
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <>
              <Header />
              <Suspense fallback={<Loading />}>
                <Box pt={"60px"}>{children}</Box>
              </Suspense>
              {/* <Footer /> */}
              <FooterNew />
            </>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
