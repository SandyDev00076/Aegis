import React from "react";
import styled from "@emotion/styled";

interface IEntryProps {
  label: string;
  children: React.ReactNode;
  noInput?: boolean;
  noBottomMargin?: boolean;
}

interface ContainerProps {
  noBottomMargin: boolean;
}

const Container = styled.section<ContainerProps>(
  (props) => `
    margin-bottom: ${props.noBottomMargin ? "0" : "16px"};
  `
);

interface FieldLabelProps {
  noInput: boolean;
}

const FieldLabel = styled.label<FieldLabelProps>(
  (props) => `
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: ${props.noInput ? "8px" : undefined};
  `
);

const Entry = ({
  label,
  children,
  noInput = false,
  noBottomMargin = false,
}: IEntryProps) => {
  return (
    <Container noBottomMargin={noBottomMargin}>
      <FieldLabel noInput={noInput}>{label}</FieldLabel>
      {children}
    </Container>
  );
};

export default Entry;
