import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../styles/colors";
import { PageContainer } from "../../styles/shared";
import Header from "./Header";

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

const Search = () => {
  return (
    <PageContainer>
      <Header />
      <SearchInput placeholder="Type here" />
    </PageContainer>
  );
};

export default Search;
