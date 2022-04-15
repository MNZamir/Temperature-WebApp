import {
    Flex,
    Box,
    Stack,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';

import LoginForm from 'components/account/LoginForm';

export default function Login() {


    return (
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
              <Stack spacing={4}>
                <LoginForm />
              </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}