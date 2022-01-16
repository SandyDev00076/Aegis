import React from "react";
import styled from "@emotion/styled";

interface IEntryProps {
  label: string;
  children: React.ReactNode;
  noInput?: boolean;
  noBottomMargin?: boolean;
}

const Entry = ({
  label,
  children,
  noInput = false,
  noBottomMargin = false,
}: IEntryProps) => {
  const Container = styled.section`
    margin-bottom: ${noBottomMargin ? "0" : "16px"};
  `;
  const FieldLabel = styled.label`
    display: block;
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
