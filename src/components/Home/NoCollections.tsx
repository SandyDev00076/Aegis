import styled from "@emotion/styled";
import React from "react";
import { WarningIcon } from "../../assets/icons";
import { Colors } from "../../styles/colors";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled(WarningIcon)`
  height: 64px;
  width: auto;
  fill: ${Colors.primaryLightest};
  margin-bottom: 8px;
`;

const Line1 = styled.h1`
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 4px;
  color: ${Colors.textSecondary};
`;

const Line2 = styled.h2`
  font-size: 0.8rem;
  font-weight: normal;
  color: ${Colors.textSecondary};
`;

const NoCollections = () => {
  return (
    <Container>
      <Icon />
      <Line1>0 collections found</Line1>
      <Line2>
        <strong>Add</strong> a new collection to get started
      </Line2>
    </Container>
  );
};

export default NoCollections;
