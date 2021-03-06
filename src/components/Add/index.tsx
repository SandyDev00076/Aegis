import styled from "@emotion/styled";
import { AddIcon, DoneIcon } from "assets/icons";
import DeleteDialog from "components/shared/DeleteDialog";
import Entry from "components/shared/Entry";
import Input from "components/shared/Input";
import Loading from "components/shared/Loading";
import { db } from "db";
import { useLiveQuery } from "dexie-react-hooks";
import { nanoid } from "nanoid";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PageContainer,
  SecondaryActionButton,
  SuccessActionButton,
} from "styles/shared";
import { IField } from "types/Field";
import AddFieldDialog from "./AddFieldDialog";
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
  const [fields, setFields] = useState<IField[]>([]);
  const [addFieldDialog, showAddFieldDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<IField>();
  const [favorite, setFavorite] = useState<boolean>(false);
  const [fieldToEdit, setFieldToEdit] = useState<IField>();

  const collections = useLiveQuery(() => db.collections.toArray());

  const navigate = useNavigate();

  // get the URL params
  const { id: idOfCollectionToEdit } = useParams<{
    id: string;
  }>();

  const collectionToEdit = useMemo(() => {
    if (idOfCollectionToEdit && collections !== undefined) {
      // find the collection
      const collectionToFind = collections.find(
        (collection) => collection.id === idOfCollectionToEdit
      );
      if (collectionToFind === undefined) {
        // id is there, but no collection was found
        throw new Error("Rogue collection found");
      }
      // collection is present in the list
      return collectionToFind;
    } else {
      // no collection ID available
      return undefined;
    }
  }, [idOfCollectionToEdit, collections]);

  useEffect(() => {
    if (collectionToEdit) {
      setName(collectionToEdit.name);
      setFields(collectionToEdit.fields);
      setFavorite(collectionToEdit.favorite);
    }
  }, [collectionToEdit]);

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const curr = new Date().toISOString();
    if (collectionToEdit) {
      // updating db
      db.collections.update(collectionToEdit.id, {
        name,
        fields,
        favorite,
        createdAt: collectionToEdit.createdAt,
        updatedAt: curr,
      });
    } else {
      // updating db
      db.collections.add({
        id: `collection-${nanoid(5)}`,
        name,
        fields,
        favorite,
        createdAt: curr,
        updatedAt: curr,
      });
    }
    navigate("/");
  }

  function toggleHidden(id: string) {
    const newFields = [...fields];
    const fieldToUpdate = newFields.findIndex((field) => field.id === id);
    if (fieldToUpdate > -1) {
      newFields[fieldToUpdate].hidden = !newFields[fieldToUpdate].hidden;
    }
    setFields(newFields);
  }

  function onFieldSubmit(field: IField) {
    // check if this field is already present in the list
    const fieldToFind = fields.findIndex(
      (otherField) => otherField.id === field.id
    );
    if (fieldToFind > -1) {
      // field is already present in the list,
      // so edit the already present field
      const newFields = [...fields];
      newFields[fieldToFind] = field;
      setFields(newFields);
    } else {
      // field is not present in the list,
      // so append the field to the start of the list
      setFields((prev) => [field, ...prev]);
    }
  }

  if (collections === undefined) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <Header
        isFavorite={favorite}
        onFavoriteToggle={() => setFavorite((prev) => !prev)}
        showEdit={collectionToEdit !== undefined}
      />
      <form onSubmit={onFormSubmit}>
        <Entry label="Collection Name">
          <Input
            name="collection-name"
            value={name}
            autoFocus
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
                  onEditClick={() => setFieldToEdit(field)}
                  onFieldDelete={() => setItemToDelete(field)}
                  onHiddenToggle={() => toggleHidden(field.id)}
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
        isOpen={fieldToEdit !== undefined || addFieldDialog}
        handleClose={() => {
          showAddFieldDialog(false);
          setFieldToEdit(undefined);
        }}
        onFieldSubmit={onFieldSubmit}
        fieldToEdit={fieldToEdit}
      />
      {itemToDelete !== undefined && (
        <DeleteDialog
          item="field"
          handleClose={() => setItemToDelete(undefined)}
          itemName={itemToDelete.name}
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
