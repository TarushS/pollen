import { HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const RedeemCard = (props:{
    img:string,
    name:string,
    subhead:string,
    price:number,
}) => {
    return (
        <VStack h={'20%'} w={'300px'} height={'300px'} bgColor={'#d9d9d9'} rounded={20}>
            <Image src={props.img} h={'80%'} rounded={20} p={2} />
            <HStack h={'15%'} w={'90%'} justifyContent={'space-between'}>
                <VStack alignItems={'flex-start'} justifyContent={'center'} gap={0}>
                    <Heading fontSize={'large'}>
                        {props.name}
                    </Heading>
                    <Text fontSize={'medium'}>
                        {props.subhead}
                    </Text>
                </VStack>
                <HStack bgColor={'#6d6969'} rounded={10} p={1} w={'30%'} justifyContent={'space-evenly'}>
                    <Image src='beetoken.png' h={5} />
                    <Text color={'white'} fontWeight={600}>{props.price}</Text>
                </HStack>
            </HStack>
        </VStack>
    )
}

export default RedeemCard
