import {
    Button,
    FormControl,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';  

export default function ResetForm() {
    const { 
        register, 
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm();
      
    const onSubmit = async values => {
        
        // function will run after input validation success
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}>
            You&apos;ll get an email with a reset link
          </Text>
          <FormControl id="email" isInvalid={errors.email}>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              id='email'
              {
                  ...register("email",
                  {
                      required: true,
                  })
              }
            />
            {errors.email && "Email is required"}
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              type='submit'
              isLoading={isSubmitting}
              >
              Request Reset
            </Button>
          </Stack>            
        </form>
    );
}