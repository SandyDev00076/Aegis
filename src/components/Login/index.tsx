import styled from "@emotion/styled";
import React from "react";
import { primaryLight, whiteTint } from "styles/colors";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

const AppIntro = styled.div`
  background-color: ${primaryLight};
  display: grid;
  place-items: center;
  color: ${whiteTint};
  font-size: 2rem;
`;

const LoginSection = styled.div`
  display: grid;
  place-items: center;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  background-color: ${primaryLight};
  color: white;
`;

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Container>
      <AppIntro>aegis</AppIntro>
      <LoginSection>
        <LoginButton onClick={loginWithRedirect}>Login</LoginButton>
      </LoginSection>
    </Container>
  );
};

export default Login;
