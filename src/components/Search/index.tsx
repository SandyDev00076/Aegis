import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSearch } from "../../hooks/useSearch";
import { Colors } from "../../styles/colors";
import { CollectionCards, PageContainer } from "../../styles/shared";
import CollectionCard from "../CollectionCard";
import Header from "./Header";
import NoCollections from "../NoCollections";

const SearchInput = styled.input`
  padding: 8px;
  font-size: 1.1rem;
  border: none;
  width: 100%;
  border-bottom: 2px solid ${Colors.primaryLighter};
  margin-bottom: 32px;

  &:focus {
    border-bottom-color: ${Colors.primary};
  }
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
          {filteredCollections.map((collection, index) => (
            <CollectionCard
              collection={collection}
              index={index}
              key={collection.id}
            />
          ))}
        </CollectionCards>
      )}
    </PageContainer>
  );
};

export default Search;
