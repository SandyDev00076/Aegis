import React from "react";
import styled from "@emotion/styled";
import { textSecondary, whiteTint } from "styles/colors";

const Container = styled.section`
  background-color: ${whiteTint};
  border-radius: 10px;
  display: grid;
  place-items: center;
  height: calc(100vh - 340px);
`;

const Panel = styled.div`
  text-align: center;
`;

const Line1 = styled.h1`
  font-size: 1.2rem;
  color: ${textSecondary};
`;

const Line2 = styled.h2`
  font-size: 0.8rem;
  font-weight: normal;
`;

const NoFields = () => {
  return (
    <Container>
      <Panel>
        <Line1>No fields</Line1>
        <Line2>
          Add some using the &apos;<strong>+</strong>&apos; button below
        </Line2>
      </Panel>
    </Container>
  );
};

export default NoFields;
