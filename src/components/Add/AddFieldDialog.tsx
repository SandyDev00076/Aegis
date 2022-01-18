import React, { useEffect, useState } from "react";
import Entry from "components/Entry";
import Input from "components/Input";
import {
  CustomDialog,
  DialogActions,
  DialogHeader,
  DialogTitle,
  SecondaryActionButton,
  SuccessActionButton,
} from "styles/shared";
import styled from "@emotion/styled";
import { DoneIcon, SafeIcon, UnSafeIcon } from "assets/icons";
import { IField } from "types/Field";
import { nanoid } from "nanoid";

interface IAddFieldDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  onFieldSubmit: (k: IField) => void;
  fieldToEdit?: IField;
}

const SubmitButton = styled(SuccessActionButton)`
  height: 52px;
`;

const HideButton = styled(SecondaryActionButton)`
  height: 52px;
`;

const AddFieldDialog = ({
  isOpen,
  handleClose,
  onFieldSubmit,
  fieldToEdit,
}: IAddFieldDialogProps) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (fieldToEdit) {
      setName(fieldToEdit.name);
      setValue(fieldToEdit.value);
      setHidden(fieldToEdit.hidden);
    }
  }, [fieldToEdit]);

  function cleanUp() {
    setName("");
    setValue("");
    setHidden(false);
  }

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onFieldSubmit({
      id: fieldToEdit ? fieldToEdit.id : `field-${nanoid(5)}`,
      name,
      value,
      hidden,
    });
    cleanUp();
    handleClose();
  }

  return (
    <CustomDialog
      aria-label="add-field-dialog"
      isOpen={isOpen}
      onDismiss={() => {
        cleanUp();
        handleClose();
      }}
    >
      <DialogHeader>
        <DialogTitle>{fieldToEdit ? "edit" : "add"} field</DialogTitle>
      </DialogHeader>
      <form onSubmit={onFormSubmit}>
        <Entry label="Name">
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Entry>
        <Entry label="Value">
          <Input
            name="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Entry>
        <DialogActions>
          <HideButton type="button" onClick={() => setHidden((prev) => !prev)}>
            {hidden ? <SafeIcon /> : <UnSafeIcon />}
          </HideButton>
          <SubmitButton type="submit" disabled={!name || !value}>
            <DoneIcon />
          </SubmitButton>
        </DialogActions>
      </form>
    </CustomDialog>
  );
};

export default AddFieldDialog;
