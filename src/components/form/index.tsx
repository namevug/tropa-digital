import { Button, Input, Text, VStack } from '@chakra-ui/react'

export function Form() {
  return (
    <>
      <Text as='h1' mt={45} fontSize='29px' fontWeight='700' color='#8F8F8F'>
        Bem Vindo ao <span style={{ color: '#FF6C22' }}>painel</span>
      </Text>

      <VStack alignItems='flex-start' mt='20px' spacing={13}>
        <Input type='email' placeholder='Digite seu e-mail' size='md' />
        <Input type='password' placeholder='Digite sua senha' size='md' />

        <Button
          style={{
            backgroundColor: '#2EAFB2',
            width: '151px',
            height: '40px',
            borderRadius: '5px',
            color: 'white',
            fontWeight: '700',
            fontSize: '14px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            lineHeight: '186.5%',
          }}
        >
          Acessar
        </Button>
      </VStack>
    </>
  )
}
