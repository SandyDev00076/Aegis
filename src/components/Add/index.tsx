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
import DeleteFieldDialog from "./DeleteFieldDialog";
import FieldCard from "./FieldCard";
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

const Fields = styled.div`
  height: calc(100vh - 340px);
  overflow-y: auto;
`;

const Add = () => {
  const [name, setName] = useState("");
  const [fields, setFields] = useState<IField[]>([
    {
      id: "1",
      hidden: false,
      name: "hello",
      value: "thisisvalue",
    },
  ]);
  const [addFieldDialog, showAddFieldDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<IField>();

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
          {fields.length === 0 ? (
            <NoFields />
          ) : (
            <Fields>
              {fields.map((field) => (
                <FieldCard
                  field={field}
                  key={field.id}
                  onFieldDelete={() => {
                    console.log("delete clicked");
                    setItemToDelete(field);
                  }}
                />
              ))}
            </Fields>
          )}
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
      {itemToDelete !== undefined && (
        <DeleteFieldDialog
          handleClose={() => setItemToDelete(undefined)}
          fieldName={itemToDelete.name}
          onConfirmation={() => {
            const indexToDelete = fields.findIndex(
              (field) => field.id === itemToDelete.id
            );
            if (indexToDelete > -1) {
              fields.splice(indexToDelete, 1);
            }
          }}
        />
      )}
    </PageContainer>
  );
};

export default Add;
