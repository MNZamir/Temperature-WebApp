import { 
  Button, 
  Center,
  Container,
  Heading,
  HStack, 
  Link, 
  Flex,
  Stack,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import Image from "next/image";
import scanTemperature from '../public/temperature-scan.jpg'

export default function Home() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={6} w={'full'} maxW={'lg'}>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          <Text color={'blue.400'} as={'span'}>
            Welcome to my
          </Text>{' '}
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '30%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'blue.400',
              zIndex: -1,
            }}>
            Temperature App
          </Text>
          <br />{' '}
        </Heading>
        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          This app save temperatures data and give visualization
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Button
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
              <Link href="signIn">
                Sign in
              </Link>
          </Button>
          <Button rounded={'full'}>
            <Link href="registration">
              New User
            </Link>
          </Button>
        </Stack>
      </Stack>
    </Flex>
    <Flex flex={1}>
      <Image
        alt={'Login Image'}
        objectFit={'cover'}
        src={scanTemperature}
      />
    </Flex>
  </Stack>
  )
}
