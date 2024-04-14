'use client'
import { Button, FormControl, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import CookieChecker from '../../_components/AuthInOut'

declare const window: any;
declare const hive_keychain: any;

const HiveKey = () => {
  const [account, setAccount] = useState('');
  const [message, setMessage] = useState('');


  const onSubmit = () => {
    const my_keychain = window.hive_keychain;
    my_keychain.requestSignBuffer(account, 'pollen sign-in with Hive Keychain', 'Posting', (response:any) => {
      if (response.success) {
        var sesh = "session";
        var cookieval = account;
        document.cookie = sesh + "=" + cookieval + "; path=/";
        window.location.reload();
      }
    });
  }


  return (
    <>
    <FormControl>
      <VStack width={'40%'} borderWidth={1} p={5} borderColor={'black'} borderStyle={'solid'}>

        <Heading>
          Enter Username:
        </Heading>

        <Input
          id='account'
          type='text'
          placeholder='Ex. jainbhavit2018'
          w={'50%'}
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          borderColor={'#fd5901'}
          focusBorderColor='#E53253'
        />

        
        <Button
          width={'50%'}
          fontSize={'larger'}
          height={'40px'}
          background={'linear-gradient(90deg, rgba(172,167,247,1) 0%, rgba(230,211,104,1) 100%);'}
          _hover={{ bg: 'linear-gradient(90deg, rgba(172,167,247,1) 25%, rgba(230,211,104,1) 125%);' }}
          fontFamily={'poppins'}
          display={'flex'}
          justifyContent={'space-between'}
          fontWeight={600}
          onClick={onSubmit}
          textAlign={'center'}
        >
          Submit
        </Button>
        </VStack>
        </FormControl>

    </>
  )
}

export default HiveKey;
