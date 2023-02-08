import { Sidebar } from '@/components/sidebar'
import { Text, Image, Flex, Square, Box, HStack, Center, VStack } from '@chakra-ui/react'

export default function Home() {

    return (
        <>
        <Box w='260px' h='100vh' bg='white' >
            <Box w='190px' mb='50px' pt='50px' marginInline='35px'>
                <Image src='/logo-panel.png' alt='logo' />
            </Box>  
            <Sidebar />        

            {/* <Box w='100vw' h='100vh' bg='bg'>
                <Box mt='83' ml='47'>
                <Text fontSize='25px' fontWeight='400' lineHeight='46.63px'>Olá Usuário</Text>
                </Box>
                <HStack ml='47'borderTop='1px solid rgba(0, 0, 0, 0.1)'>
                    <Box>
                        <Text>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    </Box>
                </HStack>
                

            </Box> */}

        </Box>    
        </>
    )
}