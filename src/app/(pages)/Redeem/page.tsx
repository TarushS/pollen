import { Flex } from '@chakra-ui/react'
import { Princess_Sofia } from 'next/font/google'
import React from 'react'
import RedeemCard from '~/app/_components/RedeemCard'

const data = {
    images:['bag,jpeg','blacktee.jpeg','bottle.jpeg','stickers,jpeg','tote.jpeg','whitetee.jpeg'],
    names:['Backpack','Black TShirt','Water Bottle','Bee Stickers','Tote Bag','White Tshirt'],
    subheads:['by VIP','Printed Tee','Designer Water Storage','Stick and Save', "'Bee' on the Go!", "Printed Tee, but white!"],
    prices:[10,10,10,10,10,10]
}

const Redeem = () => {
  return (
    <Flex flexWrap={'wrap'} gap={6}>
    <RedeemCard img='bag.jpeg' name='Backpack' subhead='by VIP' price={10} />
    <RedeemCard img='blacktee.jpeg' name='Black TShirt' subhead='Printed Tee' price={10} />
    <RedeemCard img='bottle.jpeg' name='Water Bottle' subhead='Insulated flask.' price={10} />
    <RedeemCard img='stickers.jpeg' name='Bee Stickers' subhead='Stick and Save!' price={10} />
    <RedeemCard img='tote.jpeg' name='Tote Bags' subhead='"Bee" on the go!' price={10} />
    <RedeemCard img='whitetee.jpeg' name='White TShirt' subhead='Printed Tee, but in white!' price={10} />
    </Flex>
  )
}

export default Redeem
