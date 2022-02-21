import { Spacer } from "@chakra-ui/react";
import Head from "next/head";
import Input from "../components/forms/Input";

import LoginLayout from "../components/layouts/Login";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  return (
    <LoginLayout
      type="register"
      formProps={{
        onSubmit: async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);

          const loginRequest = await fetch(
            "https://onespace.vercel.app/api/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: formData.get("email").toLowerCase(),
                password: formData.get("password"),
                name: formData.get("name").toLowerCase(),
                lastname: formData.get("lastname").toLowerCase(),
                username: formData.get("username").toLowerCase(),
                birthday: formData.get("birthday"),
              }),
            }
          );

          if (loginRequest.status === 201) {
            router.push("/success");
          } else {
            alert("Something went wrong");
          }
        },
      }}
    >
      <Head>
        <title>OneSpace - Registro</title>
        <meta name="lang" content="es" />
        <meta name="theme-color" content="#171923" />
      </Head>

      <Input placeholder="Nombre" name="name" type="text" />
      <Spacer mt={4} />
      <Input placeholder="Apellido" name="lastname" type="text" />
      <Spacer mt={4} />
      <Input placeholder="Nombre de usuario" name="username" type="text" />
      <Spacer mt={4} />
      <Input placeholder="Correo electrónico" name="email" type="email" />
      <Spacer mt={4} />
      <Input placeholder="Contraseña" name="password" type="password" />
      <Spacer mt={4} />
      <Input type="date" style={{ color: "white" }} name="birthday" />
      <Spacer mt={8} />
    </LoginLayout>
  );
}
