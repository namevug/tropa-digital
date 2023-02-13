import { Sidebar } from "@/components/sidebar";
import { Box, Flex, Show, Text } from "@chakra-ui/react";

export default function Loren() {
  return (
    <>
      <Flex h="100vh">
        <Show above="md">
          <Box w="260px" bg="white">
            <Sidebar />
          </Box>
        </Show>
        <Box ml="47" mt="83" width="1549px">
          <Text
            fontSize="25px"
            fontWeight="400"
            lineHeight="46.63px"
            borderBottom="1px solid rgba(0, 0, 0, 0.1)"
          >
            Loren
          </Text>
        </Box>
      </Flex>
    </>
  );
}
