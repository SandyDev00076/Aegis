import React from "react";
import styled from "@emotion/styled";
import { DarkModeIcon, MoreIcon, SearchIcon } from "../../assets/icons";
import { Actions, IconButton } from "../../styles/shared";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const AppName = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
`;

const Action = styled(IconButton)`
  & > svg {
    height: 28px;
  }
`;

const Header = () => {
  return (
    <Container>
      <AppName>aegis</AppName>
      <Actions>
        <Action>
          <SearchIcon />
        </Action>
        <Action>
          <DarkModeIcon />
        </Action>
        <Action>
          <MoreIcon />
        </Action>
      </Actions>
    </Container>
  );
};

export default Header;
