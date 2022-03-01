import React from "react";
import styled from "@emotion/styled";
import { Gradient1 } from "../../styles/cardBackgrounds";
import { ICollection } from "../../types/Collection";
import { Actions, IconButton, IconLink } from "../../styles/shared";
import {
  DeleteIcon,
  EditIcon,
  StarIcon,
  StarOutlineIcon,
} from "../../assets/icons";
import { favorite, favoriteHover } from "../../styles/colors";

interface ICollectionCardProps {
  collection: ICollection;
  onFavoriteToggle: () => void;
  onDelete: () => void;
}

const Container = styled(Gradient1)`
  padding: 16px;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.h2`
  font-size: 1.2rem;
`;

const CollectionActions = styled(Actions)`
  gap: 10px;
`;

const Action = styled(IconButton)`
  & > svg {
    height: 20px;
  }
`;

const ActionLink = styled(IconLink)`
  & > svg {
    height: 20px;
  }
`;

const FavoriteAction = styled(Action)`
  & > svg {
    fill: ${favorite};
    &:hover {
      fill: ${favoriteHover};
    }
  }
`;

const Field = styled.section`
  margin-top: 16px;
`;

const FieldName = styled.h6`
  text-transform: uppercase;
`;

const FieldValue = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1rem;
`;

const CollectionCard = ({
  collection,
  onFavoriteToggle,
  onDelete,
}: ICollectionCardProps) => {
  return (
    <Container>
      <Header>
        <Name>{collection.name}</Name>
        <CollectionActions>
          <FavoriteAction onClick={onFavoriteToggle}>
            {collection.favorite ? <StarIcon /> : <StarOutlineIcon />}
          </FavoriteAction>
          <ActionLink to={`/edit/${collection.id}`}>
            <EditIcon />
          </ActionLink>
          <Action onClick={onDelete}>
            <DeleteIcon />
          </Action>
        </CollectionActions>
      </Header>
      {collection.fields.map((field) => (
        <Field key={field.id}>
          <FieldName>{field.name}</FieldName>
          <FieldValue>{field.hidden ? "●●●●●●" : field.value}</FieldValue>
        </Field>
      ))}
    </Container>
  );
};

export default CollectionCard;
