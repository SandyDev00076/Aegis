import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSearch } from "hooks/useSearch";
import { CollectionCards, PageContainer } from "styles/shared";
import CollectionCard from "components/CollectionCard";
import Header from "./Header";
import NoCollections from "components/NoCollections";
import Input from "components/Input";
import { db } from "db";

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

  return (
    <PageContainer>
      <Header />
      <SearchInput
        placeholder="type here"
        name="search"
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
            />
          ))}
        </CollectionCards>
      )}
    </PageContainer>
  );
};

export default Search;
