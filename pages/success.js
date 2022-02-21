import { Box, Center, Container, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Register() {
  return (
    <Box
      bg="gray.900"
      zIndex="-100"
      position="absolute"
      minHeight="100vh"
      w="100%"
    >
      <Container px={4} py={6}>
        <Center w="100%" h="100%" flexDirection="column">
          <Head>
            <title>OneSpace</title>
            <meta name="lang" content="es" />
            <meta name="theme-color" content="#171923" />
          </Head>
          <Text fontSize="xl" fontWeight="bold" color="white">
            Te has registrado con éxito
          </Text>
        </Center>
      </Container>
    </Box>
  );
}
