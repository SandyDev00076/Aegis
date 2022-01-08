import React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import { useCollections } from "../../hooks/useCollections";
import CollectionCard from "./CollectionCard";
import { PageContainer } from "../../styles/shared";

const Cards = styled.section`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-bottom: 32px;
`;

const SectionTitle = styled.h5`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const Home = () => {
  const collections = useCollections((state) => state.collections);
  const favorites = collections.filter((collection) => collection.favorite);
  const otherCollections = collections.filter(
    (collection) => !collection.favorite
  );

  return (
    <PageContainer>
      <Header />
      <SectionTitle>Favorites ({favorites.length})</SectionTitle>
      <Cards>
        {favorites.map((collection) => (
          <CollectionCard collection={collection} key={collection.id} />
        ))}
      </Cards>
      <SectionTitle>Collections ({otherCollections.length})</SectionTitle>
      <Cards>
        {otherCollections.map((collection) => (
          <CollectionCard collection={collection} key={collection.id} />
        ))}
      </Cards>
    </PageContainer>
  );
};

export default Home;
