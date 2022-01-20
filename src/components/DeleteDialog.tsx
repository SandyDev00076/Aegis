import React from "react";
import styled from "@emotion/styled";
import {
  CustomDialog,
  DialogActions,
  DialogHeader,
  DialogTitle,
  SecondaryActionButton,
  SuccessActionButton,
} from "styles/shared";
import { CloseIcon, DoneIcon } from "assets/icons";

interface IDeleteDialogProps {
  item: "collection" | "field";
  handleClose: () => void;
  itemName: string;
  onConfirmation: () => void;
}

const DoneButton = styled(SuccessActionButton)`
  height: 52px;
`;

const CancelButton = styled(SecondaryActionButton)`
  height: 52px;
`;

const DeleteDialog = ({
  item,
  handleClose,
  itemName,
  onConfirmation,
}: IDeleteDialogProps) => {
  return (
    <CustomDialog aria-label="add-field-dialog" onDismiss={handleClose}>
      <DialogHeader>
        <DialogTitle>delete {item}</DialogTitle>
      </DialogHeader>
      <p>
        Are you sure you want to delete the {item} <strong>{itemName}</strong> ?
      </p>
      <DialogActions>
        <CancelButton onClick={handleClose}>
          <CloseIcon />
        </CancelButton>
        <DoneButton
          onClick={() => {
            onConfirmation();
            handleClose();
          }}
        >
          <DoneIcon />
        </DoneButton>
      </DialogActions>
    </CustomDialog>
  );
};

export default DeleteDialog;
