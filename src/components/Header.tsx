import React from "react";
import styled from "@emotion/styled";
import { DarkModeIcon, MoreIcon, SearchIcon } from "../assets/icons";

const Container = styled.header`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

const AppName = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled.button`
  border: none;
  padding: none;
  background: transparent;
  & > svg {
    height: 32px;
    width: auto;
  }
`;

const Header = () => {
  return (
    <Container>
      <AppName>aegis</AppName>
      <Actions>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <DarkModeIcon />
        </IconButton>
        <IconButton>
          <MoreIcon />
        </IconButton>
      </Actions>
    </Container>
  );
};

export default Header;
