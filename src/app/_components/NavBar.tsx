'use client';
import { VStack, Link as ChakraLink, HStack, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { usePathname } from 'next/navigation';

interface Route {
  name: string;
  path: string;
}

const NavBar: React.FC = () => {
  let routes: Route[] = [];
  routes = [  
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Blog', path: '/Blog' },
    { name: 'Redeem', path: '/Redeem' },
    { name: 'Leaderboard', path: '/Leaderboard' }
  ];
  
  const route = usePathname();

  const isActive = (path: string) => {
    return route === path;
  };

  return (
      <VStack height="100%" justifyContent={'flex-start'} alignItems={'flex-start'} marginLeft={'50px'} marginRight={'50px'} p={10} pt={0} fontSize={'32px'}>
        {routes.map((route: Route, index: number) => (
          <ChakraLink key={index} href={route.path} color={isActive(route.path) ? '#22577A' : 'inherit'}>
            {isActive(route.path) && '> '}
            {route.name}
          </ChakraLink>
        ))}
        <Link href={'/Redeem'} w={'full'} _hover={'{text-decoration:none,}'}>
        <HStack h={'5vh'} bgColor={'#d9d9d9'} w={'full'} rounded={10} justifyContent={'center'} mt={1}>
          <Image src='beetoken.png' h={'80%'} />
          <Text w={'70%'} fontSize={'large'} textAlign={'center'} bgColor={'#767676'} h={'70%'} color={'white'} rounded={5} fontWeight={700}>
            100
          </Text>
        </HStack>
        </Link>
      </VStack>
  );
};

export default NavBar;
