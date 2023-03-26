// app/layout.tsx
"use client";

import "../globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Suspense } from "react";
import Loading from "./loading";

const colors = {
  brand: {
    900: "#4e2d80",
    800: "#343434",
    700: "#efeeee",
  },
};

const theme = extendTheme({ colors });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <>
              <Header />
              <Suspense fallback={<Loading />} />

              <Box pt={"60px"}>{children}</Box>
              <Footer />
            </>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
