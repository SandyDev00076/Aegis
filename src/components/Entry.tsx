import React from "react";
import styled from "@emotion/styled";

interface IEntryProps {
  label: string;
  children: React.ReactNode;
  noInput?: boolean;
}

const Container = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const Entry = ({ label, children, noInput = false }: IEntryProps) => {
  const FieldLabel = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: ${noInput ? "8px" : undefined};
  `;
  return (
    <Container>
      <FieldLabel>{label}</FieldLabel>
      {children}
    </Container>
  );
};

export default Entry;
