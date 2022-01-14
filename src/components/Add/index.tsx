import styled from "@emotion/styled";
import { AddIcon, DoneIcon } from "assets/icons";
import Entry from "components/Entry";
import Input from "components/Input";
import { useCollections } from "hooks/useCollections";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import {
  PageContainer,
  SecondaryActionButton,
  SuccessActionButton,
} from "styles/shared";
import { IField } from "types/Field";
import AddFieldDialog from "./AddFieldDialog";
import Header from "./Header";
import NoFields from "./NoFields";

const SubmitActionButton = styled(SuccessActionButton)``;

const AddFieldButton = styled(SecondaryActionButton)``;

const Actions = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const Add = () => {
  const [name, setName] = useState("");
  const [fields, setFields] = useState<IField[]>([]);
  const [addFieldDialog, showAddFieldDialog] = useState(false);

  const addCollection = useCollections((state) => state.addCollection);

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const curr = new Date().toISOString();
    addCollection({
      id: `collection-${nanoid(5)}`,
      name,
      fields,
      favorite: false,
      createdAt: curr,
      updatedAt: curr,
    });
  }

  return (
    <PageContainer>
      <Header />
      <form onSubmit={onFormSubmit}>
        <Entry label="Collection Name">
          <Input
            name="collection-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Entry>
        <Entry label="Fields" noInput>
          {fields.length === 0 && <NoFields />}
        </Entry>
        <Actions>
          <AddFieldButton
            type="button"
            onClick={() => showAddFieldDialog(true)}
          >
            <AddIcon />
          </AddFieldButton>
          <SubmitActionButton
            type="submit"
            disabled={!name || fields.length === 0}
          >
            <DoneIcon />
          </SubmitActionButton>
        </Actions>
      </form>
      {/* Dialogs */}
      <AddFieldDialog
        isOpen={addFieldDialog}
        handleClose={() => showAddFieldDialog(false)}
        onFieldSubmit={(field) => setFields((prev) => [field, ...prev])}
      />
    </PageContainer>
  );
};

export default Add;
