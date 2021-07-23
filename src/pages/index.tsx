import { Flex, Divider, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { Slider } from "../components/Slider";
import { DestinationStyles } from "../components/DestinationStyles";

import { api } from "../services/api";

import { Continent } from "../types/continets";

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="column">
      <Header />
      <Banner isWideVersion={isWideVersion} />
      <DestinationStyles isWideVersion={isWideVersion} />
      <Container justify="center" direction="column">
        <Divider
          borderColor="gray.500"
          w={["60px", "90px"]}
          borderWidth={1}
          mx="auto"
        />

        <Text
          fontSize={[20, 36]}
          align="center"
          fontWeight="500"
          my={["10", "16"]}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Container>
      <Slider continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/continents");

  const continents = response.data;

  return {
    props: {
      continents,
    },
  };
};
