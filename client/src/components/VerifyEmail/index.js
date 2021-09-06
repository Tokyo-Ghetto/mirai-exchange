import React, { useState, useEffect } from "react";
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
} from "./VerifyEmailElements";
import MiraiLogo from "../../images/logo.png";
import { useLocation } from "react-router-dom"; // importo el hook de location para obtener los query params

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const VerifyEmail = () => {
  const query = useQuery(); // obtengo los query params
  const [isLoading, setLoading] = useState(true); // state variable para controlar si estoy llamando al API o no
  const [isEmailValid, setEmailValidity] = useState(false); // use state para controlar si el email es válido o no

  useEffect(() => {
    // solo la primera vez llamo a la validación del token, recogiendo el valor por parámetro
    const token = query.get("token"); // obtengo el query param del token
    if (token) {
      // llamamos a nuestro API para hacer check del validity
      fetch(`http://localhost:9000/auth/validate?token=${token}`) // validamos tipo GET pasando el token por query param
        .then((r) => {
          setLoading(false); // dejamos de cargar
          if (!r.ok) throw new Error("Failed to validate"); // si no okey lanzamos error que captura el catch
          setEmailValidity(true); // si estamos aqui es que el API nos ha dicho que OK al token
        })
        .catch((err) => setEmailValidity(false)); // si capturamos el error ponemos a false el validity
    } else {
      setLoading(false); // dejamos de cargar
      setEmailValidity(false); // mostramos error
    }
  }, []);

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <IconImg src={MiraiLogo} />
          </Icon>
          <FormContent>
            <Form action="#">
              {/* <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" requiered />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" requiered />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password?</Text> */}

              {isLoading ? (
                <FormH1>Loading...</FormH1>
              ) : isEmailValid ? (
                <React.Fragment>
                  <FormH1>Email validated successfully</FormH1>
                  <FormButton>Go back to login</FormButton>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <FormH1>Invalid email</FormH1>
                  <FormButton to='/signin'>Go back to login</FormButton>
                </React.Fragment>
              )}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default VerifyEmail;
