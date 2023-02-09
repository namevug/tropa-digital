import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function CardList() {
  return (
    <>
      <Box maxWidth="500px" h="228px" bg="white" borderRadius="md" p="15px">
        <Flex w="100%" h="190px" flexDirection="column">
          <Image w="100%" src="/cardbg.png" />
          <Text
            fontFamily="Advent Pro"
            fontSize="14px"
            fontWeight="700"
            lineHeight="26.11px"
            mt="16px"
          >
            Lorem Ipsum is simply dummy text of the printing and typesettin...
          </Text>
          <Text
            fontFamily="Advent Pro"
            fontSize="12px"
            fontWeight="400"
            lineHeight="22.38px"
          >
            Lorem Ipsum is simply dummy text of the printing and typesettin.
          </Text>
        </Flex>
      </Box>
    </>
  );
}
