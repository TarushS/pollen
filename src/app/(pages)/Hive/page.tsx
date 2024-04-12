'use client'
import { Button, FormControl, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'



const HiveKey = () => {
  const [account, setAccount] = useState('');
  const [message, setMessage] = useState('');


  const onSubmit = () => {
    const my_keychain = window.hive_keychain;
    my_keychain.requestSignBuffer(account, message, 'Posting', (response) => {
      if (response.success) {
        console.log("hello");
      }
    });
    
  }

  return (
    <>
    <FormControl>
      <VStack width={'100%'} px={'20%'}>

        <Input
          id='account'
          type='text'
          placeholder='Enter plis'
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          borderColor={'#fd5901'}
          focusBorderColor='#E53253'
        />
        <Input
          id='message'
          type='text'
          placeholder='Enter plis'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          borderColor={'#fd5901'}
          focusBorderColor='#E53253'
        />
        <Button
          width={'80%'}
          height={'60px'}
          background={'linear-gradient(90deg, rgba(172,167,247,1) 0%, rgba(230,211,104,1) 100%);'}
          _hover={{ bg: 'linear-gradient(90deg, rgba(172,167,247,1) 25%, rgba(230,211,104,1) 125%);' }}
          fontFamily={'poppins'}
          display={'flex'}
          justifyContent={'space-between'}
          fontWeight={600}
          onClick={onSubmit}
        ></Button>
        </VStack>
    </FormControl>
    </>
  )
}

export default HiveKey;
