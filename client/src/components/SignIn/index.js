import React from "react";
import {
  FormContent,
  Container,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  IconImg,
  TextRegister,
  FormButtonLoggedIn
} from "./SigninElements";
import MiraiLogo from "../../images/logo.png";
import {Redirect} from 'react-router-dom'
import { useState } from "react";

const SignIn = () => {
  const [isLogged, setIsLogged] = useState(false)
  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos
      // genero el objeto options para llamar al login
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
        },
        body: JSON.stringify({
          // Genero el body como string
          email: e.target.email.value, // obtengo el value de un input por su name
          password: e.target.pass.value,
        }),
      };
      // llamo al login
      fetch('http://localhost:9000/auth/login', options)
        .then(r => r.json())
        .then(d => {
          console.log(d)
          window.sessionStorage.setItem('access_token', d.access_token)
          setIsLogged(true);
        }) // aqui tendríamos el access token
      
    } else {
      // mostrar error al usuario con el campo que no es válido
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <IconImg src={MiraiLogo} />
          </Icon>
          <FormContent>
            {isLogged ? (
              <Form>
              <FormH1>Successfully logged in.</FormH1>
              <FormButtonLoggedIn to="/home">Redirect to Home</FormButtonLoggedIn>
              </Form>
            ) : (
              <React.Fragment>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" name='email' requiered />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" name='pass' requiered />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password?</Text>
              <TextRegister to="/register">Create new account</TextRegister>
            </Form>
            </React.Fragment>
            )}
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
