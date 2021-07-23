import { Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
} from "swiper/core";
import Link from "next/link";

import { Container } from "../Container";
import { Continent } from "../../types/continets";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  continent: string;
  image: string;
};

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

interface SliderProps {
  continents: Continent[];
}

export function Slider({ continents }: SliderProps) {
  return (
    <Container justify="center" marginBottom={["10", "16"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 4000,
        // }}
        style={{ flex: 1 }}
      >
        {continents.map(({ id, title, subtitle, banner: { src } }) => (
          <SwiperSlide key={id}>
            <Link href={`/continent/${id}`} passHref>
              <a>
                <Flex
                  bgImage={src}
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="center"
                  height={[250, 450]}
                  width="100%"
                  align="center"
                  justify="center"
                  direction="column"
                >
                  <Text fontSize={[24, 48]} color="white" fontWeight="bold">
                    {title}
                  </Text>
                  <Text fontSize={[14, 24]} color="white" fontWeight="bold">
                    {subtitle}
                  </Text>
                </Flex>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
