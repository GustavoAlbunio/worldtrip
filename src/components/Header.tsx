import { IconButton, Image } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";

import { Container } from "../components/Container";

interface HeaderProps {
  isBack?: boolean;
}

export function Header({ isBack = false }: HeaderProps) {
  return (
    <Container
      as="header"
      h={["16", "20"]}
      justify="center"
      align="center"
      position="relative"
      p={["4", 0]}
    >
      {isBack && (
        <IconButton
          aria-label="Button back"
          icon={<RiArrowLeftSLine size={"32"} />}
          background="transparent"
          position="absolute"
          left={0}
          as="a"
          href="/"
        />
      )}
      <Image src="/images/logo.svg" alt="Logo Worldtrip" h={["100%", "60%"]} />
    </Container>
  );
}
