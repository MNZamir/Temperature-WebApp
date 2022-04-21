import {
    Flex,
    Stack,
    useColorModeValue,
    Link,
    useToast,
    Text,
    Button
  } from '@chakra-ui/react';
  import { useRouter } from 'next/router'
  import { useState, useEffect } from 'react'
  import { common } from 'const';
  import axios from 'axios';
  const baseUrl = common.apiURL;  
  
  export default function EmailConfirmed() {
    const { query } = useRouter()
    const [error, setError] = useState(""); 
    const [success, setSuccess] = useState('')
    const toast = useToast()

    const confirmEmail = async e => {
        
        if(query.token != null || query.token != undefined) {
            await axios.get(baseUrl + "/api/v1/registration/confirm?token=" + query.token)
            .then((response) => {
                console.log(response.data);
                setSuccess(response.data)
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you. This window will be automatically close after 5 seconds",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  });
                  setTimeout(function(){
                    location.reload();
                    window.close();
                  }, 5000);
            }, (error) => {
                console.log(error.response.data.message);
                setError({ error: error.response.data.message});
                toast({
                    title: 'ERROR',
                    description: error.response.data.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            })
        }
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
            <Text
              fontSize={{ base: 'sm', sm: 'md' }}
              color={useColorModeValue('gray.800', 'gray.400')}>
              Do you want to confirm your email?
            </Text>
            <Stack spacing={6}>
                <Button
                onClick={confirmEmail}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Confirm email
                </Button>
            </Stack>
        </Stack>
      </Flex>
    );
  }