import { Flex, VStack, Heading, Text ,Link ,Button , Image } from '@chakra-ui/react'
import React from 'react'

const HomeContent = () => {
  return (
    <Flex className='homecontentflex' justifyContent={'flex-start'} width={'full'} alignItems={'flex-start'} h={'full'}>
        <VStack className='info-vstack' alignItems={'flex-start'} w={'40%'} gap={5}>
            <Heading fontSize={'2xl'} fontWeight={500} w={'full'}>
            Pollen: A Honeycomb for Sustainable Practices
            </Heading>
            <Text fontSize={'xl'} w={'100%'}>
            Pollen is a web application that leverages Hive <br /> blockchain to incentivize eco-friendly <br /> practices and promote sustainable businesses. 
            </Text>
            <Text fontSize={'xl'} w={'100%'}>
            <Link color={'#38A3A5'} textDecoration={'underline'}>Click here</Link> to see the sustainable actions you can do to earn Bee Tokens <br /> 
            </Text>
            <Button bgColor={'#38A3A5'} color={'white'} colorScheme={'brand'} borderRadius={'xl'}>
                Get Started
            </Button>
        </VStack>
        <Flex className='img-container' h={'full'} w={'30%'} flexDirection={'column'}>
            <Image src="bee_1.png" w={'full'} />
        </Flex>
    </Flex>
  )
}

export default HomeContent
