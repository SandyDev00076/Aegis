import React, { useState } from "react";
import Entry from "components/Entry";
import Input from "components/Input";
import { CustomDialog, DialogHeader, DialogTitle } from "styles/shared";

interface IAddFieldDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

const AddFieldDialog = ({ isOpen, handleClose }: IAddFieldDialogProps) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(false);

  return (
    <CustomDialog
      aria-label="add-field-dialog"
      isOpen={isOpen}
      onDismiss={handleClose}
    >
      <DialogHeader>
        <DialogTitle>add field</DialogTitle>
      </DialogHeader>
      <form>
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
      </form>
    </CustomDialog>
  );
};

export default AddFieldDialog;
