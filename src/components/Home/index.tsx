import React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import { useCollections } from "hooks/useCollections";
import CollectionCard from "components/CollectionCard";
import { CollectionCards, PageContainer } from "styles/shared";
import { AddIcon } from "assets/icons";
import { AddButton } from "./AddButton";
import NoCollections from "components/NoCollections";

const SectionTitle = styled.h5`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const RestOfTheScreen = styled.div`
  height: calc(100vh - 136px);
  display: grid;
  place-items: center;
`;

const Home = () => {
  const collections = useCollections((state) => state.collections);
  const favorites = collections.filter((collection) => collection.favorite);
  const otherCollections = collections.filter(
    (collection) => !collection.favorite
  );
  const noCollections = collections.length === 0;

  return (
    <PageContainer>
      <Header noSearch={noCollections} />
      {noCollections ? (
        <RestOfTheScreen>
          <NoCollections
            line2={
              <>
                <strong>Add</strong> a new collection to get started
              </>
            }
          />
        </RestOfTheScreen>
      ) : (
        <>
          <SectionTitle>Favorites ({favorites.length})</SectionTitle>
          <CollectionCards>
            {favorites.map((collection, index) => (
              <CollectionCard
                collection={collection}
                index={index}
                key={collection.id}
              />
            ))}
          </CollectionCards>
          <SectionTitle>Collections ({otherCollections.length})</SectionTitle>
          <CollectionCards>
            {otherCollections.map((collection, index) => (
              <CollectionCard
                collection={collection}
                index={index}
                key={collection.id}
              />
            ))}
          </CollectionCards>
        </>
      )}
      <AddButton to="/add">
        <AddIcon />
      </AddButton>
    </PageContainer>
  );
};

export default Home;
