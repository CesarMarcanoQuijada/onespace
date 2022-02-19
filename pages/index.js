import { Center, Box, Grid, GridItem, Text, Input } from "@chakra-ui/react";
import Head from "next/head";

import LoginLayout from "../components/layouts/Login";

export default function home() {
  return (
    <LoginLayout>
      <Head>
        <title>Home</title>
        <meta name="lang" content="es" />
      </Head>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <GridItem w="100%" h="100vh" p={18}>
          <Center w="100%" h="100%">
            <Text fontSize="7xl" fontWeight="bold" color="gray.100">
              OneSpace
            </Text>
          </Center>
        </GridItem>
        <GridItem w="100%" h="100vh">
          <Center w="100%" h="100%">
            {/* // create a chakra ui form */}
            <form>
              <Box p={4} rounded="lg" shadow="md" w="80%" h="100%">
                <Center flexDir="column" justifyContent="center" h="100%">
                  <Text fontSize="5xl" fontWeight="bold" color="gray.100">
                    Login
                  </Text>
                  <Input placeholder="Email" />
                  <button type="submit">Login</button>
                </Center>
              </Box>
            </form>
          </Center>
        </GridItem>
      </Grid>
    </LoginLayout>
  );
}
