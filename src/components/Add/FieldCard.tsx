import React from "react";
import styled from "@emotion/styled";
import { Colors } from "styles/colors";
import { IField } from "types/Field";
import Entry from "components/Entry";
import { Actions, IconButton } from "styles/shared";
import { DeleteIcon, EditIcon } from "assets/icons";

interface IFieldCardProps {
  field: IField;
  onFieldDelete: () => void;
}

const Container = styled.div`
  padding: 16px;
  border-radius: 10px;
  border: 1px solid ${Colors.fieldCardBorder};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Action = styled(IconButton)`
  & > svg {
    height: 22px;
  }
`;

const FieldCard = ({ field, onFieldDelete }: IFieldCardProps) => {
  return (
    <Container>
      <Entry label={field.name} noBottomMargin>
        {field.value}
      </Entry>
      <Actions>
        <Action type="button">
          <EditIcon />
        </Action>
        <Action type="button" onClick={onFieldDelete}>
          <DeleteIcon />
        </Action>
      </Actions>
    </Container>
  );
};

export default FieldCard;
