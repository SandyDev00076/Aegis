import React from "react";
import styled from "@emotion/styled";
import Header from "./Header";

const Container = styled.section`
  min-height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;
