import {
    Flex,
    Stack,
    useColorModeValue,
    Link,
    Text,
    Button
  } from '@chakra-ui/react';
  
  export default function EmailConfirmation() {
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
              We have sent a confirmation link to your email.
              <br/>
              Please confirm in 15 minutes.
            </Text>
            <Stack spacing={6}>
              <Link href="login">
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Login
                </Button>
              </Link>
            </Stack>
        </Stack>
      </Flex>
    );
  }