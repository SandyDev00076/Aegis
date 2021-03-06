import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import CollectionCard from "components/shared/CollectionCard";
import { ActionLink, CollectionCards, PageContainer } from "styles/shared";
import { AddIcon } from "assets/icons";
import NoCollections from "components/shared/NoCollections";
import { primary, primaryLight, textInvert } from "styles/colors";
import { db } from "db";
import { useLiveQuery } from "dexie-react-hooks";
import { ICollection } from "types/Collection";
import DeleteDialog from "components/shared/DeleteDialog";
import Loading from "components/shared/Loading";

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

const AddButton = styled(ActionLink)`
  position: fixed;
  bottom: 24px;
  right: 32px;
  color: ${textInvert};
  background: linear-gradient(150deg, ${primary}, ${primaryLight});

  &:hover {
    background: linear-gradient(230deg, ${primary}, ${primaryLight});
  }
`;

const Home = () => {
  const collections = useLiveQuery(() => db.collections.toArray());
  const [collectionToDelete, setCollectionToDelete] = useState<ICollection>();

  if (collections === undefined) {
    return <Loading />;
  }

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
          {favorites.length !== 0 && (
            <section>
              <SectionTitle>Favorites ({favorites.length})</SectionTitle>
              <CollectionCards>
                {favorites.map((collection) => (
                  <CollectionCard
                    key={collection.id}
                    collection={collection}
                    onFavoriteToggle={() =>
                      db.collections.update(collection.id, {
                        favorite: !collection.favorite,
                      })
                    }
                    onDelete={() => setCollectionToDelete(collection)}
                  />
                ))}
              </CollectionCards>
            </section>
          )}
          {otherCollections.length !== 0 && (
            <section>
              <SectionTitle>
                Collections ({otherCollections.length})
              </SectionTitle>
              <CollectionCards>
                {otherCollections.map((collection) => (
                  <CollectionCard
                    key={collection.id}
                    collection={collection}
                    onFavoriteToggle={() =>
                      db.collections.update(collection.id, {
                        favorite: !collection.favorite,
                      })
                    }
                    onDelete={() => setCollectionToDelete(collection)}
                  />
                ))}
              </CollectionCards>
            </section>
          )}
        </>
      )}
      <AddButton to="/add">
        <AddIcon />
      </AddButton>
      {/* Dialogs */}
      {collectionToDelete !== undefined && (
        <DeleteDialog
          item="collection"
          handleClose={() => setCollectionToDelete(undefined)}
          itemName={collectionToDelete.name}
          onConfirmation={() => {
            db.collections.delete(collectionToDelete.id);
          }}
        />
      )}
    </PageContainer>
  );
};

export default Home;
