import { Box } from "@chakra-ui/react";

export default function LoginLayout({ children }) {
  return (
    <>
      <Box
        bg="gray.900"
        zIndex="-100"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
      />
      <Box w="100%" minH="100vh">
        {children}
      </Box>
    </>
  );
}
