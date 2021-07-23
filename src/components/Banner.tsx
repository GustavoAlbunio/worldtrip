import { Flex, Text, Image } from "@chakra-ui/react";

import { Container } from "../components/Container";

interface BannerProps {
  isWideVersion: boolean;
}

export function Banner({ isWideVersion }: BannerProps) {
  return (
    <Flex
      bgImage="/images/banner.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight={[250, 350]}
    >
      <Container justify="space-between" align="center" px={["4", 0]}>
        <Flex direction="column" maxWidth={500}>
          <Text fontSize={[20, 36]} color="gray.50" fontWeight="500">
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize={[14, 20]} color="gray.50" marginTop="4">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        {isWideVersion && (
          <Image
            src="/images/airplane.svg"
            alt="airplane"
            marginBottom={-100}
          />
        )}
      </Container>
    </Flex>
  );
}
