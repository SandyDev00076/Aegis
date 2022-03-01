import React from "react";
import styled from "@emotion/styled";
import "styles/loading.css";

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </Container>
  );
};

export default Loading;
