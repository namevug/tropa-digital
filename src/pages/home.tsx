import { CardList } from "@/components/cardList";
import { Sidebar } from "@/components/sidebar";
import { Text, Flex, Box, Show } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex h="100vh">
        <Show above="md">
          <Box w="260px" bg="white">
            <Sidebar />
          </Box>
        </Show>

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
