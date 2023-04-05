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
// import { Poppins } from "next/font/google";

const colors = {
  brand: {
    900: "#4e2d80",
    800: "#343434",
    700: "#efeeee",
    600: "#f52c05",
    500: "#D92100",
  },
};

const theme = extendTheme({ colors });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="">
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <>
              <Suspense fallback={<Loading />}>
                <Header />
                <Box pt={"60px"}>{children}</Box>
                {/* <Footer /> */}
                <FooterNew />
              </Suspense>
            </>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
