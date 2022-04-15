import {
    Flex,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
import ResetForm from 'components/account/ResetForm';
  
  export default function ForgotPasswordForm() {
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
            <ResetForm />
        </Stack>
      </Flex>
    );
  }