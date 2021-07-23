import { Flex, Image, Text } from "@chakra-ui/react";

export interface ItemProps {
  image: {
    src: string;
    alt: string;
  };
  children: string;
  isWideVersion: boolean;
}

export function Item({ image, children, isWideVersion }: ItemProps) {
  return (
    <Flex direction="column" minWidth={160} align="center">
      {isWideVersion && <Image src={image.src} alt={image.alt} flex={1} />}
      <Flex align="center" justify="space-between" marginTop={["3", "6"]}>
        {!isWideVersion && (
          <Flex
            w="2"
            h="2"
            borderRadius="full"
            bgColor="yellow.500"
            align="center"
            justify="center"
            mr="2"
          />
        )}
        <Text fontSize={[18, 24]} fontWeight="600">
          {children}
        </Text>
      </Flex>
    </Flex>
  );
}
