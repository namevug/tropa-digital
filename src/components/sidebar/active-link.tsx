import { HStack, LinkProps, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  href: string;
  children: string;
  icon: string;
  iconActive: string;
}

export function ActiveLink({
  href,
  children,
  icon,
  iconActive,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActiveLink = asPath === href || asPath === "";

  return (
    <NextLink href={href} passHref>
      <HStack
        as="button"
        borderRadius="md"
        w="211px"
        h="50"
        bgColor={isActiveLink ? "#F3F3F3" : "#2EAFB2"}
      >
        <Image ml="16px" src={isActiveLink ? iconActive : icon} />

        <Text
          fontSize="14px"
          fontWeight="600"
          color={isActiveLink ? "black" : "white"}
        >
          {children}
        </Text>
      </HStack>
    </NextLink>
  );
}
