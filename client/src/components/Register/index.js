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
  TextLogin
} from "./RegisterElements";
import MiraiLogo from "../../images/logo.png";

const Register = () => {
  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    console.log('starting handleSubmit')
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos
      if (e.target.pass.value === e.target.repeated_pass.value) {
        // solo ejecuto el registro si las passwords son iguales
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
            fullname: e.target.fullname.value
          }),
        };
        // llamo al registro
        fetch("http://localhost:9000/auth/register", options)
          .then((r) => r.json())
          .then((d) => console.log(d));
      } else {
        // Muestro al usuario el error de que las passwords no coinciden
      }
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
            <Form onSubmit={handleSubmit}>
              <FormH1>Create a new account</FormH1>
              <FormLabel htmlFor="for">Full name</FormLabel>
              <FormInput type="name" name='fullname' requiered />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" name='email' requiered />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" name='pass' requiered />
              <FormLabel htmlFor="for">Repeat password</FormLabel>
              <FormInput type="password" name='repeated_pass' requiered />
              <FormButton type="submit" name='submit' value='Continue'/>
              <Text>Forgot password?</Text>
              <TextLogin to="/signin">Already have an account?</TextLogin>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Register;
