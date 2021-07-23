import { SimpleGrid } from "@chakra-ui/react";
import { Container } from "../Container";

import { Item } from "./Item";

import { ItemProps } from "./Item";

interface DestinationStylesProps {
  isWideVersion: boolean;
}

export function DestinationStyles({ isWideVersion }: DestinationStylesProps) {
  const options = [
    {
      image: {
        src: "/images/cocktail.svg",
        alt: "cocktail",
      },
      children: "vida noturna",
    },
    {
      image: {
        src: "/images/surf.svg",
        alt: "surf",
      },
      children: "praia",
    },
    {
      image: {
        src: "/images/museum.svg",
        alt: "museum",
      },
      children: "moderno",
    },
    {
      image: {
        src: "/images/museum.svg",
        alt: "museum",
      },
      children: "clássico",
    },
    {
      image: {
        src: "/images/earth.svg",
        alt: "earth",
      },
      children: "e mais...",
    },
  ] as ItemProps[];

  return (
    <Container justify={["center", "space-between"]} my={["6", "16"]}>
      <SimpleGrid columns={[2, 5]} width="100%">
        {options.map(({ image, children }, index) => (
          <Item image={image} key={index} isWideVersion={isWideVersion}>
            {children}
          </Item>
        ))}
      </SimpleGrid>
    </Container>
  );
}
