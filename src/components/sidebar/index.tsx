import { Flex } from "@chakra-ui/react";
import { ActiveLink } from "./active-link";
import { Logo } from "./logo";

export function Sidebar() {
  return (
    <>
      <Logo />

      <Flex w="226px" ml="37px" gap={13} flexDirection="column" color="white">
        <ActiveLink
          href="/home"
          icon="/iconsNav/rede.svg"
          iconActive="/iconsNav/redeActive.svg"
        >
          Início
        </ActiveLink>
        <ActiveLink
          href="/contatos"
          icon="/iconsNav/file.svg"
          iconActive="/iconsNav/fileActive.svg"
        >
          Contatos
        </ActiveLink>
        <ActiveLink
          href="/relatorios"
          icon="/iconsNav/arrow.svg"
          iconActive="/iconsNav/arrowActive.svg"
        >
          Relatórios
        </ActiveLink>
        <ActiveLink
          href="/loren"
          icon="/iconsNav/file.svg"
          iconActive="/iconsNav/fileActive.svg"
        >
          Loren
        </ActiveLink>
        <ActiveLink
          href="/lorentwo"
          icon="/iconsNav/file.svg"
          iconActive="/iconsNav/fileActive.svg"
        >
          Loren
        </ActiveLink>
      </Flex>
    </>
  );
}

// #FF6C22
