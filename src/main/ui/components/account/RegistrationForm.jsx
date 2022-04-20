import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    HStack,
    Box,
    Text,
    InputRightElement,
    InputGroup,
    Button,
  } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useState } from 'react';
import { common } from 'const';
import axios from 'axios';
const baseUrl = common.apiURL;

export default function RegistrationForm() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async data => {
      console.log(JSON.stringify(data))

        await axios.post(baseUrl + '/api/v1/registration', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
        // function will run after input validation success
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isInvalid={errors.firstName}>
                    <FormLabel htmlFor='firstName'>First Name</FormLabel>
                    <Input 
                    id='firstName'
                    type="text" 
                    {...register("firstName",
                    {
                        required: true,
                    })}
                    />
                    { errors.firstName && "First name is required"}
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isInvalid={errors.lastName}>
                    <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                    <Input 
                    id='lastName'
                    type="text"
                    {
                        ...register("lastName",
                        {
                            required: true,
                        })}
                    />
                    {errors.lastName && "Last name is required"}
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isInvalid={errors.email}>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input 
                id='email'
                type="email"
                {
                    ...register("email",
                    {
                        required: true,
                    })}
                />
                {errors.email && "Email is required"}
              </FormControl>
              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                  <Input 
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  {
                      ...register("password",
                      {
                          required: true,
                      }
                      )
                  }
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && "Password is required"}
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  isLoading={isSubmitting}
                  type='submit'
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link href='login' color={'blue.400'}>Login</Link>
                </Text>
              </Stack>        
        </form>
    )
}