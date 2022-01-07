import React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import { useCollections } from "../../hooks/useCollections";
import CollectionCard from "./CollectionCard";

const Container = styled.section`
  min-height: 100vh;
  padding: 16px;
`;

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
    <Container>
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
    </Container>
  );
};

export default Home;
