import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";

export function Sidebar() {
  return (
    <>
      <Box w="190px" mb="50px" pt="50px" marginInline="35px">
        <Link href="/home">
          <Image src="/logo-panel.png" alt="logo" />
        </Link>
      </Box>
      <Flex w="226px" ml="37px" gap={13} flexDirection="column" color="white">
        <HStack
          as="button"
          borderRadius="md"
          w="211px"
          h="50"
          bgColor="#F3F3F3"
        >
          <Image ml="16px" src="/iconsNav/rede.svg" />
          <Link href="/home">
            <Text fontSize="14px" fontWeight="600" color="black">
              Início
            </Text>
          </Link>
        </HStack>
        <HStack
          as="button"
          borderRadius="md"
          w="211px"
          h="50"
          bgColor="#2EAFB2"
        >
          <Image ml="16px" src="/iconsNav/file.svg" />
          <Link href="/contatos">
            <Text fontSize="14px" fontWeight="600">
              Contatos
            </Text>
          </Link>
        </HStack>
        <HStack
          as="button"
          borderRadius="md"
          w="211px"
          h="50"
          bgColor="#2EAFB2"
        >
          <Image ml="16px" src="/iconsNav/arrow.svg" />
          <Link href="/relatorios">
            <Text fontSize="14px" fontWeight="600">
              Relatórios
            </Text>
          </Link>
        </HStack>
        <HStack
          as="button"
          borderRadius="md"
          w="211px"
          h="50"
          bgColor="#2EAFB2"
        >
          <Image ml="16px" src="/iconsNav/file.svg" />
          <Link href="loren">
            <Text fontSize="14px" fontWeight="600">
              Loren
            </Text>
          </Link>
        </HStack>
        <HStack
          as="button"
          borderRadius="md"
          w="211px"
          h="50"
          bgColor="#2EAFB2"
        >
          <Image ml="16px" src="/iconsNav/file.svg" />
          <Link href="loren">
            <Text fontSize="14px" fontWeight="600">
              Loren
            </Text>
          </Link>
        </HStack>
      </Flex>
    </>
  );
}
