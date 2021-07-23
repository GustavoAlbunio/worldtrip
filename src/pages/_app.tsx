import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { createServer, Model } from "miragejs";

import { theme } from "../styles/theme";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import "../styles/swiper.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
