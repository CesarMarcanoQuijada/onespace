import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import chakraConfig from "../config/chakra.config";

const colors = {
  brand: {
    600: "#B83280",
    500: "#D53F8C",
    400: "#ED64A6",
    300: "#F687B3",
  },
};

const theme = extendTheme({ colors, chakraConfig });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
