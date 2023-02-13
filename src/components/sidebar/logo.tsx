import { Box, Link, Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <>
      <Box w="190px" mb="50px" pt="50px" marginInline="35px">
        <Link href="/home">
          <Image src="/logo-panel.png" alt="logo" />
        </Link>
      </Box>
    </>
  );
}
