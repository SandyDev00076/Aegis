import React from "react";
import {
  CustomDialog,
  DialogActions,
  DialogHeader,
  DialogTitle,
  SecondaryActionButton,
  SuccessActionButton,
} from "styles/shared";
import styled from "@emotion/styled";
import { CloseIcon, DoneIcon } from "assets/icons";

interface IDeleteFieldDialogProps {
  handleClose: () => void;
  fieldName: string;
  onConfirmation: () => void;
}

const DoneButton = styled(SuccessActionButton)`
  height: 52px;
`;

const CancelButton = styled(SecondaryActionButton)`
  height: 52px;
`;

const DeleteFieldDialog = ({
  handleClose,
  fieldName,
  onConfirmation,
}: IDeleteFieldDialogProps) => {
  return (
    <CustomDialog aria-label="add-field-dialog" onDismiss={handleClose}>
      <DialogHeader>
        <DialogTitle>delete field</DialogTitle>
      </DialogHeader>
      <p>
        Are you sure you want to delete the field <strong>{fieldName}</strong> ?
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

export default DeleteFieldDialog;
