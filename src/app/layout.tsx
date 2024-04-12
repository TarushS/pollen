import "~/styles/globals.css";
import { Container, HStack } from "@chakra-ui/react";
import { Providers, NextAuthProvider } from './lib/providers'
import NavBar from "./_components/NavBar";
import TopBar from "./_components/TopBar";


import { Inter } from "next/font/google";
import GridLines from "./_components/GridlLines";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Pollen",
  description: "A Honeycomb for Sustainable Practices",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <NextAuthProvider>
          <Providers>
            <GridLines />
            <Container minW={"full"} bg="#f8f4fc" height={"100vh"} p={0} overflow="auto">
              <TopBar />
              <HStack className="layout-hstack" maxHeight={'full'} width={'full'} alignItems={"flex-start"} pt={10}>
                <NavBar />
                  {children}
                </HStack>
            </Container>
          </Providers>
        </NextAuthProvider>
      </body>
    </html>
  );
}
