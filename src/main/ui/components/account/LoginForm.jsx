import {
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { getCookies, setCookies } from 'cookies-next';

import http from "../../http-common";

import { useForm } from 'react-hook-form';

export default function LoginForm() {
    const [error, setError] = useState("");
    getCookies();
    const router = useRouter();

    const { 
        register, 
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm();
      
    const onSubmit = async values => {
        await http.get("/api/v1/user/" + values.email)
        .then((response) => {
          console.log(response.data);
          setCookies('username', values.email );
          router.push('/dashboard');
        }, (error) => {
          console.log(error.response.data.message);
          setError(error.response.data.message);
        });
        // function will run after input validation success
    }
    // console.log(getCookie('username'))
    return (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl id="email" isInvalid={errors.email}>
                    <FormLabel htmlFor='email'> Email address </FormLabel>
                    <Input 
                    id='email'
                    type="email" 
                    {...register( "email",
                      { 
                        required: true,
                      })} 
                    /> 
                        {errors.email && "Email is required"}
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input id='password' type="password" 
                    {...register("password",
                      {
                          required: true,
                      }
                    )} />
                        {errors.password && "Password is required"}
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      {/* <Checkbox>Remember me</Checkbox> */}
                      <Link href='forgotPassword' color={'blue.400'}>Forgot password?</Link>
                    </Stack>
                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      isLoading={isSubmitting}
                      type='submit'
                      >
                      Sign in
                    </Button>
                  </Stack>
                </form>        
    )
    
}