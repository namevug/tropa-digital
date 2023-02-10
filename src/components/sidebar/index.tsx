import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";

export function Sidebar() {
  return (
    <>
      {/* <Image src="/iconsNav/burg.svg" alt="logo" w="32px" ml="45%" /> */}
      <Box w="190px" mb="50px" pt="50px" marginInline="35px">
        <Link href="/home">
          <Image src="/logo-panel.png" alt="logo" />
        </Link>
      </Box>
      <Flex w="226px" ml="37px" gap={13} flexDirection="column" color="white">
        <Link href="/home">
          <HStack
            as="button"
            borderRadius="md"
            w="211px"
            h="50"
            bgColor="#F3F3F3"
          >
            <Image ml="16px" src="/iconsNav/rede.svg" />

            <Text fontSize="14px" fontWeight="600" color="black">
              Início
            </Text>
          </HStack>
        </Link>

        <Link href="/contatos">
          <HStack
            as="button"
            borderRadius="md"
            w="211px"
            h="50"
            bgColor="#2EAFB2"
          >
            <Image ml="16px" src="/iconsNav/file.svg" />
            <Text fontSize="14px" fontWeight="600">
              Contatos
            </Text>
          </HStack>
        </Link>

        <Link href="/relatorios">
          <HStack
            as="button"
            borderRadius="md"
            w="211px"
            h="50"
            bgColor="#2EAFB2"
          >
            <Image ml="16px" src="/iconsNav/arrow.svg" />
            <Text fontSize="14px" fontWeight="600">
              Relatórios
            </Text>
          </HStack>
        </Link>

        <Link href="/loren">
          <HStack
            as="button"
            borderRadius="md"
            w="211px"
            h="50"
            bgColor="#2EAFB2"
          >
            <Image ml="16px" src="/iconsNav/file.svg" />
            <Text fontSize="14px" fontWeight="600">
              Loren
            </Text>
          </HStack>
        </Link>

        <Link href="/loren">
          <HStack
            as="button"
            borderRadius="md"
            w="211px"
            h="50"
            bgColor="#2EAFB2"
          >
            <Image ml="16px" src="/iconsNav/file.svg" />
            <Text fontSize="14px" fontWeight="600">
              Loren
            </Text>
          </HStack>
        </Link>
      </Flex>
    </>
  );
}
