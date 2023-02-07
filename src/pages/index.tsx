import { Form } from '@/components/form'
import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'

export default function Home() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  })

  return (
    <>
      <HStack justifyContent='center' alignContent='center' h='100vh'>
        <Flex bgColor='white' w={[390, 390, 857]} h={512}>
          <Box w={['100%', '100%', '50%']} h='100%'>
            <Center mt={70}>
              <Image src='/logo.png' alt='logo' />
            </Center>
            <Box maxW={313} ml={[50, 50, 57]}>
              <Form />
            </Box>
          </Box>

          {!isMobile && (
            <Box bgImg='/background.png' w='50%' h='100%'>
              <VStack mt='100px' mr='148px'>
                <Image
                  src='/note.png'
                  alt='notebook'
                  maxWidth='414px'
                  height='413px'
                />
              </VStack>
            </Box>
          )}
        </Flex>
      </HStack>
    </>
  )
}
