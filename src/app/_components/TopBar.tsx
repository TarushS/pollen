'use client';
import { Box, Button, Container, Flex, Image, Link } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import CookieChecker from './AuthInOut';



export default function TopBar() {  
  const { sessionExists, username, signOut } = CookieChecker();
  if (sessionExists) {
    return (
      <Box height="90px">
          <Flex width={"full"} mx={0} px={0} justify={"space-between"} align={"center"} position="fixed" bgColor={'#f8f4fc'} zIndex={100}>
            <Image src="/logo.png" alt="Logo" w={186} marginLeft="109px" boxSize="186px" height="90px" />
            <Flex height="90px" mx={0} px={0} justify={"space-between"} width="353px" justifyContent={"center"} align={"center"} display="fixed">
              <Button bgColor={'#38A3A5'} color={'white'} colorScheme={'brand'} borderRadius={'xl'} onClick={signOut}>Sign Out</Button>
              </Flex>
          </Flex>
      </Box>
    );
  }
  return (
    <Box height="90px">
        <Flex width={"full"} mx={0} px={0} justify={"space-between"} align={"center"} position="fixed" bgColor={'#f8f4fc'} zIndex={100}>
          <Image src="/logo.png" alt="Logo" w={186} marginLeft="109px" boxSize="186px" height="90px" />
          <Flex height="90px" mx={0} px={0} justify={"space-between"} width="353px" justifyContent={"center"} align={"center"} display="fixed">
            <Button bgColor={'#38A3A5'} color={'white'} colorScheme={'brand'} borderRadius={'xl'} as={Link} href="/Login">Sign In with Hive</Button>
            </Flex>
        </Flex>
    </Box>
  );
};
