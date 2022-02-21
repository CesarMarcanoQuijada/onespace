import { Spacer } from "@chakra-ui/react";
import Head from "next/head";
import Input from "../components/forms/Input";

import LoginLayout from "../components/layouts/Login";

export default function home() {
  return (
    <LoginLayout
      type="login"
      formProps={{
        method: "POST",
        action: "/api/login",
      }}
    >
      <Head>
        <title>OneSpace - Iniciar sesión</title>
        <meta name="lang" content="es" />
        <meta name="theme-color" content="#171923" />
      </Head>

      <Input placeholder="Correo electrónico" name="email" type="email" />
      <Spacer mt={4} />
      <Input placeholder="Contraseña" name="password" type="password" />
      <Spacer mt={8} />
    </LoginLayout>
  );
}
