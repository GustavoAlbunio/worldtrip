import { Flex, Text, Image, SimpleGrid, Icon } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { RiInformationLine } from "react-icons/ri";

import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

import { api } from "../../services/api";

import { Continent } from "../../types/continets";

interface ContinentProps {
  continent: Continent;
}

export default function Cotinent({ continent }: ContinentProps) {
  return (
    <Flex w="100%" mx="auto" direction="column">
      <Container justify="center" direction="column" px={["3", 0]}>
        <Header isBack />
      </Container>

      <Flex
        bgImage={continent.banner.src}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        minHeight={[150, 500]}
      >
        <Container
          justify={["center", "space-between"]}
          align={["center", "flex-end"]}
        >
          <Text
            fontSize={[28, 48]}
            color="gray.50"
            fontWeight="semibold"
            mb={[0, "16"]}
            textAlign={["center", "unset"]}
          >
            {continent.title}
          </Text>
        </Container>
      </Flex>

      <Container
        justify="space-around"
        my={["6", "24"]}
        direction={["column", "row"]}
        px={["4", 0]}
      >
        <Text fontSize={[14, 24]} color="gray.500" textAlign="justify" flex="1">
          {continent.description}
        </Text>
        <Flex
          flex="1"
          justify={["space-between", "space-evenly"]}
          mt={["6", 0]}
        >
          <Flex
            justify="center"
            align={["flex-start", "center"]}
            direction="column"
          >
            <Text fontSize={[24, 48]} fontWeight="semibold" color="yellow.500">
              {continent.info.countries}
            </Text>
            <Text fontSize={[18, 24]} fontWeight="semibold">
              países
            </Text>
          </Flex>
          <Flex
            justify="center"
            align={["flex-start", "center"]}
            direction="column"
          >
            <Text fontSize={[24, 48]} fontWeight="semibold" color="yellow.500">
              {continent.info.languages}
            </Text>
            <Text fontSize={[18, 24]} fontWeight="semibold">
              línguas
            </Text>
          </Flex>
          <Flex
            justify="center"
            align={["flex-start", "center"]}
            direction="column"
          >
            <Text fontSize={[24, 48]} fontWeight="semibold" color="yellow.500">
              {continent.info.cities}
            </Text>
            <Flex align="center">
              <Text fontSize={[18, 24]} fontWeight="semibold">
                cidades +100
              </Text>
              <Icon ml="2" as={RiInformationLine} />
            </Flex>
          </Flex>
        </Flex>
      </Container>

      <Container direction="column" mb={["10", "24"]} px={["4", 0]}>
        <Text fontSize={[24, 36]} fontWeight="medium" mb={["6", "12"]}>
          Cidades +100
        </Text>

        <SimpleGrid columns={[1, 4]} spacing={["6", "16"]}>
          {continent.cities.map(({ banner, city, country, id, flag }) => (
            <Flex direction="column" key={id} px={["10", 0]}>
              <Image
                src={banner.src}
                alt={banner.alt}
                maxHeight="200px"
                height="100%"
                borderTopLeftRadius={4}
                borderTopRightRadius={4}
                objectFit="cover"
              />
              <Flex
                p="4"
                justify="space-between"
                align="center"
                borderWidth={1}
                borderColor="yellow.500"
                borderTop="unset"
                borderBottomLeftRadius={4}
                borderBottomRightRadius={4}
              >
                <Flex direction="column" justify="space-between">
                  <Text fontSize={[18, 20]} fontWeight="semibold">
                    {city}
                  </Text>
                  <Text
                    fontSize={[16, 18]}
                    fontWeight="medium"
                    color="gray.300"
                    mt="3"
                  >
                    {country}
                  </Text>
                </Flex>
                <Image
                  src={flag.src}
                  alt={flag.alt}
                  width={35}
                  height={35}
                  borderRadius="full"
                  objectFit="cover"
                />
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get("/continents");

  const continents = response.data;

  const paths = continents.map((continent) => ({
    params: { id: continent.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const { data } = await api.get(`/continents/${id}`);

  return {
    props: {
      continent: data,
    },
  };
};
