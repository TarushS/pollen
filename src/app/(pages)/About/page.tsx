"use client";
import {
  Button, HStack, Heading, Image, Text, VStack, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  Link,
} from '@chakra-ui/react'
import { type NextPage } from "next";
import Head from "next/head";
import React from "react";  

const About: NextPage = () => {
  return (
    <VStack className='Aboutcontent' width={'full'} alignItems={'flex-start'}>
            <HStack justify={'space-between'}>
                <VStack alignItems={'flex-start'} width={'60%'} >
                    <Heading textAlign={'left'} fontSize={'2xl'} fontWeight={500} w={'full'}>
                        About Pollen: Building a Buzz Around Sustainability
                    </Heading >
                    <Text fontSize={'xl'} textAlign={'left'} >
                        Pollen is your one-stop platform for buzzing about sustainability. We're a web app where passionate individuals can share their knowledge and experiences with eco-friendly practices through engaging blog posts.
                    </Text>

                    <br />

                    <Heading textAlign={'left'} fontSize={'2xl'} fontWeight={500} w={'full'}>
                        Why Hive Blockchain?
                    </Heading>
                    <Text fontSize={'xl'} textAlign={'left'}>
                        We leverage the power of the Hive blockchain for a transparent and secure experience. This means:
                    </Text>
                        <UnorderedList fontSize={'xl'} textAlign={'left'}>
                            <ListItem>Decentralization: No single entity controls the platform, fostering a truly community-driven space.</ListItem>
                            <ListItem>Security: Your blogs and ratings are securely stored on the blockchain, ensuring immutability and data integrity.</ListItem>
                            <ListItem>Transparency: Every post made on pollen is transparent and verifiable on the blockchain.</ListItem>
                        </UnorderedList>
                    <Link href={'/Blog'} width={'25%'}>
                    <Button textAlign={'left'} bgColor={'#38A3A5'} color={'white'} colorScheme={'brand'} borderRadius={'xl'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                        Start Blogging <Image height='40%' src='Group 1000002648.svg' />
                    </Button>
                    </Link>
                    
                </VStack>
                <Image src='pollen_sofa.png' w={'20%'} mr={'5%'} />
            </HStack>
            <br /><br />
            <HStack w={'full'} justify={'space-between'}>
                <VStack alignItems={'flex-start'} width={'60%'}>
                    <Heading fontSize={'2xl'} fontWeight={500} w={'full'}>
                        Bee Tokens: Rewarding Your Green Efforts
                    </Heading>
                    <Text fontSize={'xl'}>
                        Here's where things get exciting! By creating valuable content and receiving positive ratings, you earn Bee Tokens – our in-house reward system. These tokens are redeemable for exclusive goodies from our network of eco-conscious companies. So, the more you contribute to the conversation, the greater the rewards!
                    </Text>
                </VStack>
                <Image src='beetoken.png' h={'full'} w={'20%'} mr={'5%'} />
            </HStack>
            <VStack alignItems={'flex-start'} width={'60%'}>
                <Heading fontSize={'2xl'} fontWeight={500} w={'full'}>
                    Join the Pollen Movement                    
                </Heading>
                <Text fontSize={'xl'}>
                    Pollen is more than just a blogging platform; it's a community which is dedicated to making a positive impact. Whether you're a seasoned sustainability advocate or just starting your eco-journey, we welcome you with open arms. Share your knowledge, learn from others, and get rewarded for your efforts – let's create a buzz for a greener future together!
                </Text>
            </VStack>
            <Box h={200}> </Box>
        </VStack>
  );
};

export default About;
