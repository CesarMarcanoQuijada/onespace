import { Box, Button, Center, Container, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function LoginLayout({ children, type, formProps }) {
  const router = useRouter();

  return (
    <Box
      bg="gray.900"
      zIndex="-100"
      position="absolute"
      minHeight="100vh"
      w="100%"
    >
      <Container px={4} py={6}>
        <form {...formProps}>
          <Center w="100%" h="100%" flexDirection="column">
            <Text fontSize="4xl" fontWeight="bold" color="gray.100">
              OneSpace
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="gray.200">
              {type === "login" ? "Iniciar sesión" : "Registrarse"}
            </Text>
            <Spacer mt={8} />
            {children}
            <Button w="100%" borderRadius="2xl" type="submit">
              {type === "login" ? "Iniciar sesión" : "Registrarse"}
            </Button>
            <Spacer mt={4} />
            <Button
              w="100%"
              borderRadius="2xl"
              variant="outline"
              size="sm"
              textColor="gray.100"
              onClick={() => router.push(type === "login" ? "/register" : "/")}
            >
              {type === "login" ? "Registrarse" : "Iniciar sesión"}
            </Button>
          </Center>
        </form>
      </Container>
    </Box>
  );
}
