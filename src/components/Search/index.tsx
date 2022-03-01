import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSearch } from "hooks/useSearch";
import { CollectionCards, PageContainer } from "styles/shared";
import CollectionCard from "components/shared/CollectionCard";
import Header from "./Header";
import NoCollections from "components/shared/NoCollections";
import Input from "components/shared/Input";
import { db } from "db";
import DeleteDialog from "components/shared/DeleteDialog";
import { ICollection } from "types/Collection";
import Loading from "components/shared/Loading";

const SearchInput = styled(Input)`
  margin-bottom: 32px;
`;

const RestOfTheScreen = styled.div`
  height: calc(100vh - 210px);
  display: grid;
  place-items: center;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const filteredCollections = useSearch(query);
  const [collectionToDelete, setCollectionToDelete] = useState<ICollection>();

  if (filteredCollections === undefined) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <Header />
      <SearchInput
        placeholder="type here"
        name="search"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredCollections.length === 0 && query ? (
        <RestOfTheScreen>
          <NoCollections
            line2={
              <>
                Nothing matched with <strong>{query}</strong>
              </>
            }
          />
        </RestOfTheScreen>
      ) : (
        <CollectionCards>
          {filteredCollections.map((collection) => (
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
      )}
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

export default Search;
