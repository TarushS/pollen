'use client'
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react";


type Props = {
  children?: React.ReactNode;
};
export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};


export function Providers({ children }: { children: React.ReactNode }) {
    return (<ChakraProvider>{children}</ChakraProvider>);
}
