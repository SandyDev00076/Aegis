import styled from "@emotion/styled";
import { AddIcon, DoneIcon } from "assets/icons";
import Entry from "components/Entry";
import Input from "components/Input";
import React, { useState } from "react";
import { Colors } from "styles/colors";
import { ActionButton, PageContainer } from "styles/shared";
import { IField } from "types/Field";
import Header from "./Header";
import NoFields from "./NoFields";

const SubmitActionButton = styled(ActionButton)`
  background: linear-gradient(
    150deg,
    ${Colors.success},
    ${Colors.successLight}
  );

  &:hover {
    background: linear-gradient(
      230deg,
      ${Colors.success},
      ${Colors.successLight}
    );
  }
`;

const AddFieldButton = styled(ActionButton)`
  & > svg {
    fill: ${Colors.text};
  }
  background: linear-gradient(
    150deg,
    ${Colors.secondary},
    ${Colors.secondaryLight}
  );

  &:hover {
    background: linear-gradient(
      230deg,
      ${Colors.secondary},
      ${Colors.secondaryLight}
    );
  }
`;

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

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log("do something");
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
          <AddFieldButton>
            <AddIcon />
          </AddFieldButton>
          <SubmitActionButton disabled={!name || fields.length === 0}>
            <DoneIcon />
          </SubmitActionButton>
        </Actions>
      </form>
    </PageContainer>
  );
};

export default Add;
