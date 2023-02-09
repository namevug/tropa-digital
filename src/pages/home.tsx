import { CardList } from "@/components/cardList";
import { Sidebar } from "@/components/sidebar";
import { Text, Image, Flex, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex w="100vw" h="100vh">
        <Box w="260px" bg="white">
          <Box w="190px" mb="50px" pt="50px" marginInline="35px">
            <Image src="/logo-panel.png" alt="logo" />
          </Box>
          <Sidebar />
        </Box>
        <Box ml="47" mt="83">
          <Text
            fontSize="25px"
            fontWeight="400"
            lineHeight="46.63px"
            borderBottom="1px solid rgba(0, 0, 0, 0.1)"
          >
            Olá Usuário
          </Text>

          <Flex mt="31" maxWidth="1549px" flexWrap="wrap" gap="24px">
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
