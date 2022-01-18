import React from "react";
import styled from "@emotion/styled";
import { fieldCardBorder } from "styles/colors";
import { IField } from "types/Field";
import Entry from "components/Entry";
import { Actions, IconButton } from "styles/shared";
import { DeleteIcon, EditIcon, SafeIcon, UnSafeIcon } from "assets/icons";

interface IFieldCardProps {
  field: IField;
  onFieldDelete: () => void;
  onHiddenToggle: () => void;
  onEditClick: () => void;
}

const Container = styled.div`
  padding: 16px;
  border-radius: 10px;
  border: 1px solid ${fieldCardBorder};
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

const FieldCardActions = styled(Actions)`
  gap: 10px;
`;

const FieldCard = ({
  field,
  onFieldDelete,
  onHiddenToggle,
  onEditClick,
}: IFieldCardProps) => {
  return (
    <Container>
      <Entry label={field.name} noBottomMargin>
        {field.value}
      </Entry>
      <FieldCardActions>
        <Action type="button" onClick={onHiddenToggle}>
          {field.hidden ? <SafeIcon /> : <UnSafeIcon />}
        </Action>
        <Action type="button" onClick={onEditClick}>
          <EditIcon />
        </Action>
        <Action type="button" onClick={onFieldDelete}>
          <DeleteIcon />
        </Action>
      </FieldCardActions>
    </Container>
  );
};

export default FieldCard;
